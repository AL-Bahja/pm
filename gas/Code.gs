const FOLDER_NAME = "Bahja-PM";
const DATA_NAME = "project_data.json";
const QUEUE_NAME = "mail_queue.json";
const SECRET = "bahja-2026-pm";

/**
 * شغّل هذه الدالة مرة واحدة من المحرر: Run ▶ AUTHORIZE
 * ثم اسمح بالبريد (Gmail). بعدها Deploy → New version.
 */
function AUTHORIZE() {
  MailApp.getRemainingDailyQuota();
  processMailQueue();
  var has = false;
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === "processMailQueue") has = true;
  });
  if (!has) {
    ScriptApp.newTrigger("processMailQueue").timeBased().everyMinutes(1).create();
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return json_({ ok: true, ping: true });
}

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    if (body.secret !== SECRET) return json_({ ok: false, error: "secret" });
    if (body.action === "emailReport") return emailReport_(body);
    const store = ensureStore_();
    if (body.action === "load") return json_({ ok: true, data: loadData_(store) });
    if (body.action === "save") {
      saveData_(store, body.data || { users: [], projects: [] });
      return json_({ ok: true });
    }
    if (body.action === "upload") return json_({ ok: true, file: upload_(store, body) });
    if (body.action === "delete") {
      delete_(body.id);
      return json_({ ok: true });
    }
    return json_({ ok: false, error: "action" });
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

function ensureStore_() {
  const folders = DriveApp.getFoldersByName(FOLDER_NAME);
  const folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(FOLDER_NAME);
  const attFolders = folder.getFoldersByName("Attachments");
  const attachments = attFolders.hasNext() ? attFolders.next() : folder.createFolder("Attachments");
  const files = folder.getFilesByName(DATA_NAME);
  let dataFile;
  if (files.hasNext()) {
    dataFile = files.next();
  } else {
    dataFile = folder.createFile(DATA_NAME, JSON.stringify({ users: [], projects: [] }), MimeType.PLAIN_TEXT);
  }
  return { folder: folder, attachments: attachments, dataFile: dataFile };
}

function loadData_(store) {
  const text = store.dataFile.getBlob().getDataAsString() || "";
  if (!text) return { users: [], projects: [] };
  return JSON.parse(text);
}

function saveData_(store, data) {
  store.dataFile.setContent(JSON.stringify(data));
}

function upload_(store, body) {
  const bytes = Utilities.base64Decode(body.base64 || "");
  const blob = Utilities.newBlob(bytes, body.type || "application/octet-stream", body.name || "file");
  const file = store.attachments.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return {
    id: file.getId(),
    name: body.name || file.getName(),
    type: body.type || "",
    size: Number(body.size || 0),
    driveFileId: file.getId(),
    url: file.getUrl()
  };
}

function delete_(id) {
  if (!id) return;
  DriveApp.getFileById(id).setTrashed(true);
}

function asRows_(rows) {
  return (rows || []).map(function (row) {
    return (row || []).map(function (c) {
      return String(c == null ? "" : c);
    });
  });
}

function addTable_(body, rows, rtl) {
  const clean = asRows_(rows).filter(function (r) { return r.length; });
  if (!clean.length) return;
  const table = body.appendTable(clean);
  table.setBorderWidth(0.5);
  if (rtl) {
    try {
      for (var i = 0; i < table.getNumRows(); i++) {
        var row = table.getRow(i);
        for (var j = 0; j < row.getNumCells(); j++) {
          row.getCell(j).getChild(0).asParagraph().setLeftToRight(false);
        }
      }
    } catch (err) {}
  }
}

function emailReport_(body) {
  try {
    const to = String(body.to || "")
      .split(/[,;]+/)
      .map(function (s) { return s.trim(); })
      .filter(function (s) { return s.indexOf("@") > 0; });
    if (!to.length) return json_({ ok: false, error: "to" });
    const job = {
      to: to.join(","),
      subject: String(body.subject || "Report"),
      html: String(body.html || ""),
      title: String(body.title || ""),
      dir: body.dir || "rtl",
      infoTitle: body.infoTitle || "",
      kpiTitle: body.kpiTitle || "",
      taskTitle: body.taskTitle || "",
      infoRows: body.infoRows || [],
      kpiRows: body.kpiRows || [],
      taskHead: body.taskHead || [],
      taskRows: body.taskRows || []
    };
    try {
      sendMailJob_(job);
      return json_({ ok: true });
    } catch (sendErr) {
      queueMail_(job);
      return json_({ ok: false, error: "mail-auth", detail: String(sendErr && sendErr.message ? sendErr.message : sendErr) });
    }
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

function sendMailJob_(job) {
  const subject = String(job.subject || "Report");
  const html = String(job.html || subject);
  const attachments = [];
  try {
    const pdf = reportPdf_(job, subject);
    if (pdf) attachments.push(pdf);
  } catch (pdfErr) {
    attachments.push(Utilities.newBlob(html, MimeType.HTML, subject.slice(0, 80) + ".html"));
  }
  MailApp.sendEmail({
    to: job.to,
    subject: subject,
    htmlBody: html,
    name: "Al-Bahja PM",
    attachments: attachments
  });
}

function queueMail_(job) {
  const store = ensureStore_();
  const files = store.folder.getFilesByName(QUEUE_NAME);
  var list = [];
  var file = null;
  if (files.hasNext()) {
    file = files.next();
    try {
      list = JSON.parse(file.getBlob().getDataAsString() || "[]");
    } catch (err) {
      list = [];
    }
  }
  if (!Array.isArray(list)) list = [];
  list.push(job);
  const text = JSON.stringify(list);
  if (file) file.setContent(text);
  else store.folder.createFile(QUEUE_NAME, text, MimeType.PLAIN_TEXT);
}

function processMailQueue() {
  const store = ensureStore_();
  const files = store.folder.getFilesByName(QUEUE_NAME);
  if (!files.hasNext()) return;
  const file = files.next();
  var list = [];
  try {
    list = JSON.parse(file.getBlob().getDataAsString() || "[]");
  } catch (err) {
    list = [];
  }
  if (!Array.isArray(list) || !list.length) return;
  const left = [];
  list.forEach(function (job) {
    try {
      sendMailJob_(job);
    } catch (err) {
      left.push(job);
    }
  });
  file.setContent(JSON.stringify(left));
}

function reportPdf_(body, title) {
  const name = String(title || "report").replace(/[\\/:*?"<>|]/g, " ").slice(0, 80);
  const doc = DocumentApp.create(name);
  const b = doc.getBody();
  b.clear();
  const rtl = body.dir === "rtl";
  function heading(text, level) {
    if (!text) return;
    const p = b.appendParagraph(String(text));
    p.setHeading(level || DocumentApp.ParagraphHeading.HEADING2);
    if (rtl) p.setLeftToRight(false);
  }
  heading(body.title || name, DocumentApp.ParagraphHeading.HEADING1);
  heading(body.infoTitle || "");
  addTable_(b, body.infoRows, rtl);
  heading(body.kpiTitle || "");
  addTable_(b, body.kpiRows, rtl);
  heading(body.taskTitle || "");
  const taskRows = [];
  if (body.taskHead) taskRows.push(body.taskHead);
  (body.taskRows || []).forEach(function (r) { taskRows.push(r); });
  addTable_(b, taskRows, rtl);
  doc.saveAndClose();
  const file = DriveApp.getFileById(doc.getId());
  const pdf = file.getAs(MimeType.PDF).setName(name + ".pdf");
  file.setTrashed(true);
  return pdf;
}
