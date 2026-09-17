const FOLDER_NAME = "Bahja-PM";
const DATA_NAME = "project_data.json";
const SECRET = "bahja-2026-pm";

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
