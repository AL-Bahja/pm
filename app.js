const I18N = {
  ar: {
    app: "إدارة مشاريع شركة البهجة",
    login: "تسجيل الدخول",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    enter: "دخول",
    demo: "",
    loginHint: "أدخل اسم المستخدم وكلمة المرور.",
    mustChangePass: "لأمان النظام، غيّر كلمة المرور الافتراضية قبل المتابعة.",
    weakPassword: "اختر كلمة مرور جديدة من 8 أحرف على الأقل، وليست الكلمة الافتراضية.",
    noProjects: "لا توجد مشاريع بعد. أضف المشروع الأول من الزر أعلاه.",
    installHint: "من Chrome أو Edge: القائمة ⋮ ثم تثبيت التطبيق — يبقى نفس الرابط ويسهل التعديل لاحقاً من المشروع.",
    lang: "English",
    projects: "المشاريع",
    reports: "التقارير",
    users: "المستخدمون",
    profile: "صفحتي",
    logout: "خروج",
    addProject: "إضافة مشروع",
    editProject: "تعديل المشروع",
    copyProject: "نسخ المشروع",
    copied: "نسخة",
    projectName: "اسم المشروع",
    hospital: "المستشفى / الموقع",
    device: "نوع الجهاز",
    mri: "رنين مغناطيسي",
    ct: "مفراس",
    cath: "قسطرة",
    other: "أخرى",
    status: "الحالة",
    plannedCost: "الكلفة المتوقعة",
    actualCost: "الكلفة الحقيقية",
    plannedDays: "الأيام المتوقعة",
    actualDays: "الأيام الحقيقية",
    progress: "التقدم",
    open: "فتح",
    tasks: "المهام / المراحل",
    addTask: "إضافة مهمة رئيسية",
    addSubtask: "إضافة مهمة متفرعة",
    expand: "إظهار المهام الفرعية",
    collapse: "إخفاء المهام الفرعية",
    edit: "تعديل",
    editTask: "تعديل المهمة",
    taskName: "اسم المهمة",
    plannedStart: "بداية متوقعة",
    plannedEnd: "نهاية متوقعة",
    actualStart: "بداية حقيقية",
    actualEnd: "نهاية حقيقية",
    notes: "ملاحظات",
    save: "حفظ",
    cancel: "إلغاء",
    delete: "حذف",
    up: "أعلى",
    down: "أسفل",
    gantt: "مخطط جانت",
    planned: "متوقع",
    actual: "حقيقي",
    not_started: "لم تبدأ",
    in_progress: "قيد التنفيذ",
    done: "منجزة",
    delayed: "متأخرة",
    variance: "الانحراف",
    costReport: "تقرير الكلف",
    timeReport: "تقرير الزمن",
    print: "طباعة التقرير",
    allProjects: "كل المشاريع",
    projectReport: "تقرير المشروع",
    role: "الدور",
    pm: "مدير مشاريع",
    otherRole: "أخرى",
    roleTitle: "مسمى الدور",
    roleTitleHint: "مثال: مهندس موقع، محاسب، مراقب جودة",
    addUser: "إضافة مستخدم",
    email: "البريد الإلكتروني",
    displayName: "الاسم الظاهر",
    newPassword: "كلمة مرور جديدة",
    onlyPm: "المراقبة فقط. التعديل متاح لمدير المشاريع.",
    badLogin: "اسم المستخدم أو كلمة المرور غير صحيحة.",
    required: "أكمل الحقول المطلوبة.",
    welcome: "مرحباً",
    summary: "قائمة المشاريع المختصرة",
    currency: "د.ع",
    days: "يوم",
    loginTitle: "دخول النظام",
    changePassword: "تغيير كلمة المرور",
    currentUser: "الحساب الحالي",
    rolledUp: "تُحسب الكلفة والجدول تلقائياً من المهام المتفرعة.",
    subtaskOf: "متفرعة من",
    leaves: "مهام",
    reportFor: "تقرير",
    chooseProject: "اختر مشروعاً",
    dateHint: "اليوم/الشهر/السنة",
    dateInvalid: "التاريخ يجب أن يكون بالصيغة dd/mm/yyyy",
    costFiles: "مرفقات الكلفة (وصولات)",
    projectFiles: "مرفقات المشروع",
    upload: "تحميل ملف",
    download: "تنزيل",
    noFiles: "لا توجد ملفات",
    fileTooBig: "حجم الملف أكبر من 15 ميغابايت.",
    showSubtasks: "إظهار المهام الفرعية",
    showGantt: "إظهار مخطط الجانت",
    attachments: "مرفقات",
    total: "الإجمالي",
    storageHint: "البيانات مشتركة عبر جوجل درايف للشركة. نفس المشاريع تظهر من أي حاسبة بعد ربط حساب الشركة ثم دخول النظام.",
    exportData: "تصدير نسخة احتياطية",
    importData: "استيراد نسخة احتياطية",
    importOk: "تم استيراد البيانات. أعد تسجيل الدخول إن لزم.",
    importBad: "ملف النسخة الاحتياطية غير صالح.",
    googleConnect: "ربط تخزين الشركة",
    googleNeedConfig: "ضع GOOGLE_CLIENT_ID في ملف .env ثم حدّث الصفحة.",
    googleConnecting: "جاري الدخول…",
    googleLoading: "جاري قراءة project_data.json من درايف…",
    googleSaving: "جاري الحفظ على درايف…",
    googleSaved: "محفوظ على درايف",
    googleError: "تعذر تحميل بيانات الشركة. أكمل إعداد التخزين مرة واحدة من حساب درايف الشركة.",
    googleHint: "من أي حاسبة: اربط جوجل درايف بحساب الشركة picassomega86@gmail.com (هذا التخزين المشترك). بعد ذلك يظهر دخول النظام: مدير المشاريع أو مستخدم آخر.",
    googleWrongAccount: "يفضّل استخدام حساب درايف الشركة:",
    driveFolder: "مجلد التطبيق",
    ganttSwipe: "على الهاتف: اسحب الجدول يميناً ويساراً لمشاهدة الأيام، ولأعلى ولأسفل للمهام."
  },
  en: {
    app: "Al-Bahja Company Project Management",
    login: "Sign in",
    username: "Username",
    password: "Password",
    enter: "Sign in",
    demo: "",
    loginHint: "Enter your username and password.",
    mustChangePass: "For security, change the default password before continuing.",
    weakPassword: "Choose a new password of at least 8 characters, not the default one.",
    noProjects: "No projects yet. Add the first project with the button above.",
    installHint: "In Chrome or Edge: menu ⋮ then Install app — same link, and you can still change the code later.",
    lang: "العربية",
    projects: "Projects",
    reports: "Reports",
    users: "Users",
    profile: "My profile",
    logout: "Log out",
    addProject: "Add project",
    editProject: "Edit project",
    copyProject: "Copy project",
    copied: "copy",
    projectName: "Project name",
    hospital: "Hospital / site",
    device: "Device type",
    mri: "MRI",
    ct: "CT scanner",
    cath: "Cath lab",
    other: "Other",
    status: "Status",
    plannedCost: "Planned cost",
    actualCost: "Actual cost",
    plannedDays: "Planned days",
    actualDays: "Actual days",
    progress: "Progress",
    open: "Open",
    tasks: "Tasks / phases",
    addTask: "Add main task",
    addSubtask: "Add subtask",
    expand: "Show subtasks",
    collapse: "Hide subtasks",
    edit: "Edit",
    editTask: "Edit task",
    taskName: "Task name",
    plannedStart: "Planned start",
    plannedEnd: "Planned end",
    actualStart: "Actual start",
    actualEnd: "Actual end",
    notes: "Notes",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    up: "Up",
    down: "Down",
    gantt: "Gantt chart",
    planned: "Planned",
    actual: "Actual",
    not_started: "Not started",
    in_progress: "In progress",
    done: "Done",
    delayed: "Delayed",
    variance: "Variance",
    costReport: "Cost report",
    timeReport: "Time report",
    print: "Print report",
    allProjects: "All projects",
    projectReport: "Project report",
    role: "Role",
    pm: "Project manager",
    otherRole: "Other",
    roleTitle: "Role title",
    roleTitleHint: "Example: site engineer, accountant, QA watcher",
    addUser: "Add user",
    email: "Email",
    displayName: "Display name",
    newPassword: "New password",
    onlyPm: "Read only. Only the project manager can edit.",
    badLogin: "Wrong username or password.",
    required: "Fill the required fields.",
    welcome: "Welcome",
    summary: "Project summary list",
    currency: "IQD",
    days: "days",
    loginTitle: "System login",
    changePassword: "Change password",
    currentUser: "Current account",
    rolledUp: "Cost and schedule are calculated from subtasks.",
    subtaskOf: "Subtask of",
    leaves: "tasks",
    reportFor: "Report",
    chooseProject: "Choose a project",
    dateHint: "dd/mm/yyyy",
    dateInvalid: "Date must be dd/mm/yyyy",
    costFiles: "Cost attachments (receipts)",
    projectFiles: "Project attachments",
    upload: "Upload file",
    download: "Download",
    noFiles: "No files",
    fileTooBig: "File is larger than 15 MB.",
    showSubtasks: "Show subtasks",
    showGantt: "Show Gantt chart",
    attachments: "Attachments",
    total: "Total",
    storageHint: "Data is shared on the company Google Drive. The same projects appear on any PC after connecting the company account, then signing in.",
    exportData: "Export backup",
    importData: "Import backup",
    importOk: "Data imported. Sign in again if needed.",
    importBad: "Backup file is not valid.",
    googleConnect: "Connect company storage",
    googleNeedConfig: "Put GOOGLE_CLIENT_ID in the .env file, then refresh.",
    googleConnecting: "Signing in…",
    googleLoading: "Reading project_data.json from Drive…",
    googleSaving: "Saving to Drive…",
    googleSaved: "Saved to Drive",
    googleError: "Could not load company data. Complete storage setup once with the company Drive account.",
    googleHint: "On any PC, connect Google Drive with the company account picassomega86@gmail.com (shared storage). Then sign in as project manager or another user.",
    googleWrongAccount: "Prefer the company Drive account:",
    driveFolder: "App folder",
    ganttSwipe: "On phone: swipe the chart left and right for dates, up and down for tasks."
  }
};

const KEY = "med-install-pm-v2";

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function tr(key) {
  const pack = I18N[state.lang] || I18N.ar;
  return pack[key] || I18N.en[key] || I18N.ar[key] || key;
}

function daysBetween(a, b) {
  if (!a || !b) return 0;
  return Math.max(0, Math.round((new Date(b) - new Date(a)) / 86400000));
}

function minDate(values) {
  const dates = values.filter(Boolean).map((d) => new Date(d));
  if (!dates.length) return "";
  return iso(new Date(Math.min(...dates)));
}

function maxDate(values) {
  const dates = values.filter(Boolean).map((d) => new Date(d));
  if (!dates.length) return "";
  return iso(new Date(Math.max(...dates)));
}

function iso(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function parseDay(d) {
  if (!d) return null;
  const dt = d instanceof Date ? new Date(d.getTime()) : new Date(String(d) + (String(d).includes("T") ? "" : "T00:00:00"));
  if (Number.isNaN(dt.getTime())) return null;
  dt.setHours(0, 0, 0, 0);
  return dt;
}

function fmtDate(d) {
  const dt = parseDay(d);
  if (!dt) return "—";
  return `${pad2(dt.getDate())}/${pad2(dt.getMonth() + 1)}/${dt.getFullYear()}`;
}

function hasChildren(task) {
  return !!(task.children && task.children.length);
}

function deriveStatus(task) {
  if (!hasChildren(task)) return task.status || "not_started";
  const statuses = task.children.map(deriveStatus);
  if (statuses.every((s) => s === "done")) return "done";
  if (statuses.some((s) => s === "delayed")) return "delayed";
  if (statuses.some((s) => s === "in_progress")) return "in_progress";
  if (statuses.some((s) => s === "done")) return "in_progress";
  return "not_started";
}

function rollupTask(task) {
  if (!task.children) task.children = [];
  task.children.forEach(rollupTask);
  if (!hasChildren(task)) return task;
  task.plannedCost = task.children.reduce((s, c) => s + Number(c.plannedCost || 0), 0);
  task.actualCost = task.children.reduce((s, c) => s + Number(c.actualCost || 0), 0);
  task.plannedStart = minDate(task.children.map((c) => c.plannedStart));
  task.plannedEnd = maxDate(task.children.map((c) => c.plannedEnd));
  task.actualStart = minDate(task.children.map((c) => c.actualStart));
  task.actualEnd = maxDate(task.children.map((c) => c.actualEnd));
  task.status = deriveStatus(task);
  return task;
}

function rollupProject(project) {
  (project.tasks || []).forEach(rollupTask);
  return project;
}

function leafTasks(task) {
  if (!hasChildren(task)) return [task];
  return task.children.flatMap(leafTasks);
}

function projectStats(project) {
  rollupProject(project);
  const tops = project.tasks || [];
  const leaves = tops.flatMap(leafTasks);
  const plannedCost = tops.reduce((s, t) => s + Number(t.plannedCost || 0), 0);
  const actualCost = tops.reduce((s, t) => s + Number(t.actualCost || 0), 0);
  const plannedDays = daysBetween(
    minDate(tops.map((t) => t.plannedStart)),
    maxDate(tops.map((t) => t.plannedEnd))
  );
  const actualDays = daysBetween(
    minDate(tops.map((t) => t.actualStart)),
    maxDate(tops.map((t) => t.actualEnd))
  );
  const done = leaves.filter((t) => t.status === "done").length;
  const progress = leaves.length ? Math.round((done / leaves.length) * 100) : 0;
  return { plannedCost, actualCost, plannedDays, actualDays, progress, count: leaves.length };
}

function makeTask(name, ps, pe, as, ae, pc, ac, status, children) {
  return {
    id: uid(),
    name,
    plannedStart: ps,
    plannedEnd: pe,
    actualStart: as,
    actualEnd: ae,
    plannedCost: pc,
    actualCost: ac,
    status,
    notes: "",
    children: children || [],
    costFiles: []
  };
}

function cloneFiles(files) {
  return (files || []).map((f) => ({
    id: uid(),
    name: f.name,
    type: f.type,
    size: f.size,
    driveFileId: f.driveFileId || "",
    url: f.url || ""
  }));
}

function cloneTask(task) {
  return {
    ...task,
    id: uid(),
    costFiles: cloneFiles(task.costFiles),
    children: (task.children || []).map(cloneTask)
  };
}

function seed() {
  return {
    users: [
      { id: "u1", username: "manager", password: "manager123", role: "pm", roleTitle: "", name: "مدير المشاريع", email: "picassomega86@gmail.com" },
      { id: "u2", username: "viewer", password: "viewer123", role: "other", roleTitle: "مراقب ميداني", name: "مراقب ميداني", email: "" }
    ],
    projects: []
  };
}

function migrate(data) {
  (data.users || []).forEach((u) => {
    if (u.role === "viewer") {
      u.role = "other";
      u.roleTitle = u.roleTitle || "مراقب ميداني";
    }
    if (u.role !== "pm") u.role = "other";
    if (u.roleTitle == null) u.roleTitle = "";
  });
  (data.projects || []).forEach((p) => {
    if (!p.files) p.files = [];
    (p.tasks || []).forEach(function walk(task) {
      if (!task.children) task.children = [];
      if (!task.costFiles) task.costFiles = [];
      task.children.forEach(walk);
    });
    rollupProject(p);
  });
  return data;
}

function loadLocalFallback() {
  const raw = localStorage.getItem(KEY) || localStorage.getItem("med-install-pm-v1");
  if (raw) {
    try {
      return migrate(JSON.parse(raw));
    } catch (err) {
      /* ignore */
    }
  }
  const data = seed();
  return data;
}

function compactData(data) {
  const copy = JSON.parse(JSON.stringify(data || { users: [], projects: [] }));
  const slim = (files) =>
    (files || []).map((f) => ({
      id: f.id,
      name: f.name,
      type: f.type,
      size: f.size,
      driveFileId: f.driveFileId || "",
      url: f.url || ""
    }));
  (copy.projects || []).forEach((p) => {
    p.files = slim(p.files);
    (p.tasks || []).forEach(function walk(task) {
      task.costFiles = slim(task.costFiles);
      (task.children || []).forEach(walk);
    });
  });
  return copy;
}

let saveTimer = null;
function save(data) {
  state.data = data;
  localStorage.setItem(KEY, JSON.stringify(compactData(data)));
  if (!state.driveReady) return;
  state.driveSaving = true;
  renderDriveStatus();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    Drive.saveData(compactData(state.data))
      .then(() => {
        state.driveSaving = false;
        state.driveError = "";
        renderDriveStatus();
      })
      .catch((err) => {
        state.driveSaving = false;
        state.driveError = String(err.message || err);
        renderDriveStatus();
      });
  }, 600);
}

function renderDriveStatus() {
  const elStatus = document.querySelector("[data-drive-status]");
  if (!elStatus) return;
  elStatus.textContent = state.driveError
    ? tr("googleError")
    : state.driveSaving
      ? tr("googleSaving")
      : tr("googleSaved");
}

const state = {
  data: { users: [], projects: [] },
  session: null,
  lang: localStorage.getItem(KEY + "-lang") || "ar",
  view: "projects",
  projectId: null,
  reportProjectId: "all",
  reportShowSubs: true,
  reportShowGantt: false,
  modal: null,
  expanded: {},
  driveReady: false,
  driveSaving: false,
  driveError: "",
  driveStatus: "init",
  googleProfile: null
};

const WEAK_PASSWORDS = ["manager123", "viewer123", "12345678", "password"];

function isWeakPassword(pass) {
  const p = String(pass || "");
  return p.length < 8 || WEAK_PASSWORDS.includes(p);
}

function isExpanded(taskId) {
  return !!state.expanded[taskId];
}

function toggleExpanded(taskId) {
  state.expanded[taskId] = !state.expanded[taskId];
  render();
}

function expandTask(taskId) {
  state.expanded[taskId] = true;
}

function currentUser() {
  return state.data.users.find((u) => u.id === state.session?.userId);
}

function isPm() {
  return currentUser()?.role === "pm";
}

function roleLabel(user) {
  if (!user) return "";
  if (user.role === "pm") return tr("pm");
  return user.roleTitle || tr("otherRole");
}

function persistSession() {
  localStorage.setItem(KEY + "-session", JSON.stringify(state.session));
}

function storagePlace() {
  if (location.protocol === "file:") return "file";
  return location.host || location.origin;
}

function exportBackup() {
  const blob = new Blob([JSON.stringify(compactData(state.data), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "bahja-projects-backup.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function importBackup(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(String(reader.result || ""));
      if (!data || !Array.isArray(data.projects) || !Array.isArray(data.users)) throw new Error("bad");
      state.data = migrate(data);
      save(state.data);
      alert(tr("importOk"));
      render();
    } catch (err) {
      alert(tr("importBad"));
    }
  };
  reader.readAsText(file);
}

function el(html) {
  const tpl = document.createElement("template");
  tpl.innerHTML = html.trim();
  return tpl.content.firstElementChild;
}

function money(n) {
  return Number(n || 0).toLocaleString(state.lang === "ar" ? "ar-IQ" : "en-US");
}

function render() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.title = tr("app");
  const root = document.getElementById("app");
  const user = currentUser();
  if (!user) {
    root.replaceChildren(loginView());
    return;
  }
  if (!state.driveReady) {
    root.replaceChildren(loginView());
    return;
  }
  if (isWeakPassword(user.password)) {
    root.replaceChildren(passwordGateView(user));
    return;
  }
  root.replaceChildren(shellView(user));
}

function passwordGateView(user) {
  const box = el(`<div class="login-wrap">
    <form class="login-card">
      <div class="brand"><div class="logo">PM</div><div><h1>${tr("changePassword")}</h1><div class="muted">${esc(user.name)}</div></div></div>
      <p class="hint">${tr("mustChangePass")}</p>
      <label>${tr("newPassword")}<input name="password" type="password" minlength="8" required></label>
      <p class="error"></p>
      <button class="btn" type="submit">${tr("save")}</button>
    </form>
  </div>`);
  box.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    const pass = String(new FormData(e.target).get("password") || "");
    if (isWeakPassword(pass)) {
      box.querySelector(".error").textContent = tr("weakPassword");
      return;
    }
    user.password = pass;
    save(state.data);
    render();
  };
  return box;
}

async function ensureDrive() {
  if (state.driveReady && (Drive.token || Drive.useBridge())) return;
  if (!Drive.useBridge()) throw new Error("no-bridge");
  await Drive.init();
  await Drive.signIn();
  state.googleProfile = Drive.profile;
  let remote = await Drive.loadData();
  const empty =
    !remote ||
    ((!(remote.projects && remote.projects.length)) && (!(remote.users && remote.users.length)));
  if (empty) remote = loadLocalFallback();
  state.data = migrate(remote);
  state.driveReady = true;
  state.driveStatus = "ready";
  save(state.data);
}

async function boot() {
  render();
  try {
    await loadEnv();
    await Drive.init().catch(() => {});
  } catch (err) {
    state.driveError = "";
  }
  render();
}

function setLang() {
  state.lang = state.lang === "ar" ? "en" : "ar";
  localStorage.setItem(KEY + "-lang", state.lang);
  render();
}

function loginView() {
  const box = el(`<div class="login-wrap">
    <form class="login-card">
      <div class="brand"><div class="logo">PM</div><div><h1>${tr("loginTitle")}</h1><div class="muted">${tr("app")}</div></div></div>
      <p class="hint">${tr("loginHint")}</p>
      <label>${tr("username")}<input name="username" autocomplete="username" required></label>
      <label>${tr("password")}<input name="password" type="password" autocomplete="current-password" required></label>
      <p class="error"></p>
      <div class="row">
        <button class="btn" type="submit">${tr("enter")}</button>
        <button class="btn ghost" type="button" data-lang>${tr("lang")}</button>
      </div>
    </form>
  </div>`);
  box.querySelector("[data-lang]").onclick = setLang;
  box.querySelector("form").onsubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const err = box.querySelector(".error");
    const btn = box.querySelector("[type=submit]");
    err.textContent = tr("googleConnecting");
    btn.disabled = true;
    try {
      if (!state.driveReady) await ensureDrive();
    } catch (ex) {
      err.textContent = tr("googleError");
      btn.disabled = false;
      return;
    }
    const user = state.data.users.find(
      (u) => u.username === String(fd.get("username")).trim() && u.password === String(fd.get("password"))
    );
    if (!user) {
      err.textContent = tr("badLogin");
      btn.disabled = false;
      return;
    }
    state.session = { userId: user.id };
    persistSession();
    state.view = "projects";
    render();
  };
  return box;
}

function shellView(user) {
  const wrap = el(`<div>
    <header class="topbar">
      <div class="brand">
        <div class="logo">PM</div>
        <div>
          <strong>${tr("app")}</strong>
          <div class="muted">${tr("welcome")} ${esc(user.name)} · ${esc(roleLabel(user))}</div>
          <div class="muted" data-drive-status>${state.driveSaving ? tr("googleSaving") : tr("googleSaved")}</div>
        </div>
      </div>
      <nav class="nav">
        <button class="btn secondary" data-go="projects">${tr("projects")}</button>
        <button class="btn secondary" data-go="reports">${tr("reports")}</button>
        ${isPm() ? `<button class="btn secondary" data-go="users">${tr("users")}</button>` : ""}
        <button class="btn secondary" data-go="profile">${tr("profile")}</button>
        <button class="btn ghost" data-lang>${tr("lang")}</button>
        <button class="btn ghost" data-out>${tr("logout")}</button>
      </nav>
    </header>
    <main class="page"></main>
  </div>`);
  wrap.querySelectorAll("[data-go]").forEach((b) => {
    if (b.dataset.go === state.view || (state.view === "project" && b.dataset.go === "projects")) {
      b.setAttribute("aria-current", "page");
    }
    b.onclick = () => {
      state.view = b.dataset.go;
      if (b.dataset.go === "projects") state.projectId = null;
      render();
    };
  });
  wrap.querySelector("[data-lang]").onclick = setLang;
  wrap.querySelector("[data-out]").onclick = () => {
    state.session = null;
    persistSession();
    render();
  };
  const main = wrap.querySelector("main");
  if (state.view === "projects") main.append(projectsView());
  if (state.view === "project") main.append(projectView());
  if (state.view === "reports") main.append(reportsView());
  if (state.view === "users") main.append(usersView());
  if (state.view === "profile") main.append(profileView());
  if (state.modal) main.append(state.modal);
  return wrap;
}

function projectsView() {
  const box = el(`<div>
    <h2>${tr("summary")}</h2>
    <p class="hint">${tr("storageHint")}</p>
    <p class="muted">${tr("installHint")}</p>
    ${!isPm() ? `<p class="readonly-note">${tr("onlyPm")}</p>` : ""}
    <div class="row no-print" style="margin:12px 0">
      ${isPm() ? `<button class="btn" data-add>${tr("addProject")}</button>
      <button class="btn secondary" data-export>${tr("exportData")}</button>
      <label class="btn secondary file-btn">${tr("importData")}<input type="file" accept="application/json,.json" hidden data-import></label>` : ""}
    </div>
    <div class="card" style="padding:8px 16px; overflow:auto">
      <table>
        <thead><tr>
          <th>${tr("projectName")}</th><th>${tr("hospital")}</th><th>${tr("device")}</th>
          <th>${tr("progress")}</th><th>${tr("plannedCost")}</th><th>${tr("actualCost")}</th>
          <th>${tr("plannedDays")}</th><th>${tr("actualDays")}</th><th></th>
        </tr></thead>
        <tbody></tbody>
      </table>
    </div>
  </div>`);
  const tbody = box.querySelector("tbody");
  state.data.projects.forEach((p) => {
    const s = projectStats(p);
    const trRow = el(`<tr>
      <td>${esc(p.name)}</td><td>${esc(p.hospital)}</td><td>${tr(p.device)}</td>
      <td>
        <div class="progress-wrap">
          <div class="progress-track" title="${s.progress}%"><span class="progress-fill" style="width:${s.progress}%"></span></div>
          <span class="progress-pct">${s.progress}%</span>
        </div>
      </td>
      <td>${money(s.plannedCost)} ${tr("currency")}</td>
      <td>${money(s.actualCost)} ${tr("currency")}</td>
      <td>${s.plannedDays} ${tr("days")}</td>
      <td>${s.actualDays} ${tr("days")}</td>
      <td class="row">
        <button class="btn small secondary" data-open>${tr("open")}</button>
        ${isPm() ? `<button class="btn small" data-copy>${tr("copyProject")}</button>` : ""}
      </td>
    </tr>`);
    trRow.querySelector("[data-open]").onclick = () => {
      state.view = "project";
      state.projectId = p.id;
      render();
    };
    const copyBtn = trRow.querySelector("[data-copy]");
    if (copyBtn) copyBtn.onclick = () => copyProject(p);
    tbody.append(trRow);
  });
  if (!state.data.projects.length) {
    tbody.append(el(`<tr><td colspan="9" class="muted">${tr("noProjects")}</td></tr>`));
  }
  const add = box.querySelector("[data-add]");
  if (add) add.onclick = () => openProjectForm();
  const exp = box.querySelector("[data-export]");
  if (exp) exp.onclick = exportBackup;
  const imp = box.querySelector("[data-import]");
  if (imp) imp.onchange = () => {
    if (imp.files && imp.files[0]) importBackup(imp.files[0]);
    imp.value = "";
  };
  return box;
}

function copyProject(project) {
  const copy = {
    id: uid(),
    name: `${project.name} (${tr("copied")})`,
    hospital: project.hospital,
    device: project.device,
    files: cloneFiles(project.files),
    tasks: (project.tasks || []).map(cloneTask)
  };
  state.data.projects.push(copy);
  save(state.data);
  state.view = "project";
  state.projectId = copy.id;
  render();
}

function flatRows(tasks, parent) {
  const rows = [];
  (tasks || []).forEach((task, index) => {
    rows.push({ task, parent, index, depth: parent ? 1 : 0 });
    (task.children || []).forEach((child, cIndex) => {
      rows.push({ task: child, parent: task, index: cIndex, depth: 1 });
    });
  });
  return rows;
}

function projectView() {
  const project = state.data.projects.find((p) => p.id === state.projectId);
  if (!project) return el(`<p>${tr("projects")}</p>`);
  rollupProject(project);
  const s = projectStats(project);
  const box = el(`<div>
    <div class="row" style="justify-content:space-between">
      <div>
        <h2>${esc(project.name)}</h2>
        <div class="muted">${esc(project.hospital)} · ${tr(project.device)}</div>
      </div>
      <div class="row no-print">
        <button class="btn secondary" data-rep>${tr("projectReport")}</button>
        ${isPm() ? `<button class="btn secondary" data-copy>${tr("copyProject")}</button>
        <button class="btn secondary" data-editp>${tr("editProject")}</button>
        <button class="btn danger" data-delp>${tr("delete")}</button>` : ""}
      </div>
    </div>
    <div class="kpis">
      <div class="card kpi"><span class="muted">${tr("plannedCost")}</span><b>${money(s.plannedCost)}</b></div>
      <div class="card kpi"><span class="muted">${tr("actualCost")}</span><b>${money(s.actualCost)}</b></div>
      <div class="card kpi"><span class="muted">${tr("plannedDays")}</span><b>${s.plannedDays} ${tr("days")}</b></div>
      <div class="card kpi"><span class="muted">${tr("actualDays")}</span><b>${s.actualDays} ${tr("days")}</b></div>
    </div>
    <h3>${tr("gantt")}</h3>
    <p class="hint gantt-hint no-print">${tr("ganttSwipe")}</p>
    <div class="legend"><span><i class="swatch planned"></i>${tr("planned")}</span><span><i class="swatch actual"></i>${tr("actual")}</span></div>
    <div class="card gantt-wrap">${ganttHtml(project)}</div>
    <div class="card" style="padding:16px; margin-top:16px">
      <h3>${tr("projectFiles")}</h3>
      <div data-proj-files></div>
    </div>
    <div class="row" style="margin:18px 0 8px; justify-content:space-between">
      <h3>${tr("tasks")}</h3>
      ${isPm() ? `<button class="btn" data-addt>${tr("addTask")}</button>` : ""}
    </div>
    <div class="card" style="padding:8px 16px; overflow:auto">
      <table>
        <thead><tr>
          <th>#</th><th>${tr("taskName")}</th><th>${tr("status")}</th>
          <th>${tr("plannedStart")} / ${tr("plannedEnd")}</th>
          <th>${tr("actualStart")} / ${tr("actualEnd")}</th>
          <th>${tr("plannedCost")}</th><th>${tr("actualCost")}</th><th>${tr("attachments")}</th>
          ${isPm() ? "<th></th>" : ""}
        </tr></thead>
        <tbody></tbody>
      </table>
    </div>
  </div>`);
  const tbody = box.querySelector("tbody");
  visibleTaskRows(project).forEach((rowInfo) => {
    const label = rowInfo.depth ? `${rowInfo.parent ? project.tasks.indexOf(rowInfo.parent) + 1 : ""}.${rowInfo.index + 1}` : String(rowInfo.index + 1);
    tbody.append(taskRow(project, rowInfo.task, rowInfo.parent, rowInfo.index, label, !!rowInfo.depth, isExpanded(rowInfo.task.id), rowInfo.last));
  });
  bindGanttScroll(box);
  mountFileBox(box.querySelector("[data-proj-files]"), project.files || (project.files = []), () => {
    save(state.data);
  });
  box.querySelectorAll("[data-twist]").forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleExpanded(btn.getAttribute("data-twist"));
    };
  });
  const addt = box.querySelector("[data-addt]");
  if (addt) addt.onclick = () => openTaskForm(project, null, null);
  const editp = box.querySelector("[data-editp]");
  if (editp) editp.onclick = () => openProjectForm(project);
  const copy = box.querySelector("[data-copy]");
  if (copy) copy.onclick = () => copyProject(project);
  box.querySelector("[data-rep]").onclick = () => {
    state.view = "reports";
    state.reportProjectId = project.id;
    render();
  };
  const delp = box.querySelector("[data-delp]");
  if (delp) delp.onclick = () => {
    state.data.projects = state.data.projects.filter((p) => p.id !== project.id);
    save(state.data);
    state.view = "projects";
    render();
  };
  return box;
}

function taskRow(project, taskItem, parent, index, label, isSub, expanded, isLast) {
  const kids = hasChildren(taskItem);
  const twist = !isSub
    ? kids
      ? `<button class="twist ${expanded ? "open" : ""}" type="button" data-twist="${taskItem.id}" title="${expanded ? tr("collapse") : tr("expand")}" aria-expanded="${expanded ? "true" : "false"}">${expanded ? "▾" : "▸"}</button>`
      : `<span class="twist-spacer"></span>`
    : treeMark(true, isLast);
  const count = kids && !expanded ? `<span class="sub-count">${taskItem.children.length}</span>` : "";
  const filesN = (taskItem.costFiles || []).length;
  const row = el(`<tr class="${parent ? "child-row" : "parent-row"}">
    <td>${label}</td>
    <td class="${isSub ? "task-indent" : ""}"><span class="task-name-cell">${twist}<span>${esc(taskItem.name)}</span>${count}</span></td>
    <td><span class="badge ${taskItem.status}">${tr(taskItem.status)}</span></td>
    <td>${fmtDate(taskItem.plannedStart)} → ${fmtDate(taskItem.plannedEnd)}</td>
    <td>${fmtDate(taskItem.actualStart)} → ${fmtDate(taskItem.actualEnd)}</td>
    <td>${money(taskItem.plannedCost)}</td>
    <td>${money(taskItem.actualCost)}</td>
    <td>${filesN ? filesN : "—"}</td>
    ${isPm() ? `<td class="row">
      <button class="btn small secondary" data-up>${tr("up")}</button>
      <button class="btn small secondary" data-down>${tr("down")}</button>
      ${!isSub ? `<button class="btn small secondary" data-sub>${tr("addSubtask")}</button>` : ""}
      <button class="btn small" data-ed>${tr("editTask")}</button>
      <button class="btn small danger" data-del>${tr("delete")}</button>
    </td>` : ""}
  </tr>`);
  if (isPm()) {
    const list = parent ? parent.children : project.tasks;
    row.querySelector("[data-up]").onclick = () => moveInList(list, index, -1);
    row.querySelector("[data-down]").onclick = () => moveInList(list, index, 1);
    const sub = row.querySelector("[data-sub]");
    if (sub) sub.onclick = () => openTaskForm(project, null, taskItem);
    row.querySelector("[data-ed]").onclick = () => openTaskForm(project, taskItem, parent);
    row.querySelector("[data-del]").onclick = () => {
      if (parent) parent.children = parent.children.filter((x) => x.id !== taskItem.id);
      else project.tasks = project.tasks.filter((x) => x.id !== taskItem.id);
      rollupProject(project);
      save(state.data);
      render();
    };
  }
  return row;
}

function collectDates(project) {
  const dates = [];
  flatRows(project.tasks).forEach(({ task }) => {
    ["plannedStart", "plannedEnd", "actualStart", "actualEnd"].forEach((k) => {
      if (task[k]) dates.push(new Date(task[k] + "T00:00:00"));
    });
  });
  return dates;
}

function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function endOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

function enumerateDays(min, max) {
  const days = [];
  const cur = new Date(min.getTime());
  while (cur <= max) {
    days.push(new Date(cur.getTime()));
    cur.setDate(cur.getDate() + 1);
  }
  return days;
}

function groupDays(days, keyFn) {
  const groups = [];
  days.forEach((d) => {
    const key = keyFn(d);
    if (!groups.length || groups[groups.length - 1].key !== key) {
      groups.push({ key, count: 1, date: d });
    } else {
      groups[groups.length - 1].count += 1;
    }
  });
  return groups;
}

function fmtDateShort(d) {
  return fmtDate(d);
}

function dateRange(start, end) {
  if (!start && !end) return "—";
  return `${fmtDate(start)} → ${fmtDate(end)}`;
}

function parseDmy(s) {
  const text = String(s || "").trim();
  if (!text) return "";
  const m = text.match(/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{4})$/);
  if (!m) return null;
  const day = Number(m[1]);
  const month = Number(m[2]);
  const year = Number(m[3]);
  const dt = new Date(year, month - 1, day);
  if (dt.getFullYear() !== year || dt.getMonth() !== month - 1 || dt.getDate() !== day) return null;
  return iso(dt);
}

function dateInput(name, value, disabled) {
  return `<input type="text" name="${name}" inputmode="numeric" placeholder="${tr("dateHint")}" value="${value ? fmtDate(value) : ""}" ${disabled} autocomplete="off">`;
}

function treeMark(isSub, isLast) {
  if (!isSub) return `<span class="tree"></span>`;
  return `<span class="tree sub ${isLast ? "last" : ""}" aria-hidden="true"><i class="tv"></i><i class="th"></i></span>`;
}

const MAX_FILE = 15 * 1024 * 1024;

async function openStoredFile(f) {
  if (f.driveFileId || (f.url && String(f.url).indexOf("http") === 0)) {
    await Drive.openAttachment(f);
    return;
  }
  if (f.data) {
    window.open(f.data, "_blank");
  }
}

function fileListHtml(files, canEdit, inputName) {
  const items = (files || [])
    .map(
      (f, i) => `<li>
        <button class="btn ghost small" type="button" data-openfile="${inputName}:${i}">${esc(f.name)}</button>
        <span class="muted">(${Math.max(1, Math.round(f.size / 1024))} KB)</span>
        ${canEdit ? `<button class="btn small danger" type="button" data-rmfile="${inputName}:${i}">${tr("delete")}</button>` : ""}
      </li>`
    )
    .join("");
  return `<div class="file-box">
    <ul class="file-list">${items || `<li class="muted">${tr("noFiles")}</li>`}</ul>
    ${canEdit ? `<label class="btn secondary small file-btn">${tr("upload")}<input type="file" multiple hidden data-file-in="${inputName}"></label>` : ""}
  </div>`;
}

function visibleTaskRows(project) {
  const rows = [];
  (project.tasks || []).forEach((task, index) => {
    rows.push({ task, parent: null, index, depth: 0, last: false });
    if (hasChildren(task) && isExpanded(task.id)) {
      const kids = task.children || [];
      kids.forEach((child, cIndex) => {
        rows.push({
          task: child,
          parent: task,
          index: cIndex,
          depth: 1,
          last: cIndex === kids.length - 1
        });
      });
    }
  });
  return rows;
}

function mountFileBox(host, files, onChange) {
  if (!host) return;
  const paint = () => {
    host.innerHTML = fileListHtml(files, isPm(), "x");
    const input = host.querySelector("[data-file-in]");
    if (input) {
      input.onchange = async () => {
        for (const file of input.files || []) {
          try {
            if (file.size > MAX_FILE) throw new Error("big");
            const uploaded = await Drive.uploadAttachment(file);
            files.push({
              id: uid(),
              name: uploaded.name,
              type: uploaded.type,
              size: uploaded.size,
              driveFileId: uploaded.driveFileId,
              url: uploaded.url
            });
          } catch (err) {
            host.insertAdjacentHTML("beforeend", `<p class="error">${tr("fileTooBig")}</p>`);
          }
        }
        if (onChange) onChange();
        paint();
      };
    }
    host.querySelectorAll("[data-openfile]").forEach((btn) => {
      btn.onclick = () => {
        const idx = Number(btn.getAttribute("data-openfile").split(":")[1]);
        if (files[idx]) openStoredFile(files[idx]);
      };
    });
    host.querySelectorAll("[data-rmfile]").forEach((btn) => {
      btn.onclick = () => {
        const idx = Number(btn.getAttribute("data-rmfile").split(":")[1]);
        const removed = files.splice(idx, 1)[0];
        if (removed) Drive.deleteAttachment(removed);
        if (onChange) onChange();
        paint();
      };
    });
  };
  paint();
}

function ganttHtml(project) {
  const dates = collectDates(project);
  if (!dates.length) return `<p class="muted">—</p>`;
  const min = startOfMonth(new Date(Math.min(...dates)));
  const max = endOfMonth(new Date(Math.max(...dates)));
  const days = enumerateDays(min, max);
  const dayW = window.matchMedia("(max-width: 800px)").matches ? 14 : 16;
  const scaleW = days.length * dayW;
  const years = groupDays(days, (d) => String(d.getFullYear()));
  const months = groupDays(days, (d) => `${d.getFullYear()}-${d.getMonth()}`);
  const monthStarts = new Set();
  let seen = 0;
  months.forEach((g) => {
    monthStarts.add(seen);
    seen += g.count;
  });

  const yearBand = years
    .map((g) => `<span class="gantt-band year" style="flex:0 0 ${g.count * dayW}px;width:${g.count * dayW}px"><span class="gantt-sticky-label">${g.date.getFullYear()}</span></span>`)
    .join("");
  const monthBand = months
    .map((g) => `<span class="gantt-band month" style="flex:0 0 ${g.count * dayW}px;width:${g.count * dayW}px"><span class="gantt-sticky-label">${pad2(g.date.getMonth() + 1)}</span></span>`)
    .join("");
  const dayBand = days
    .map((d, i) => {
      const weekend = d.getDay() === 0 || d.getDay() === 6 ? " weekend" : "";
      const monthStart = monthStarts.has(i) ? " month-start" : "";
      return `<span class="gantt-day${weekend}${monthStart}">${pad2(d.getDate())}</span>`;
    })
    .join("");
  const monthLines = [...monthStarts]
    .filter((i) => i > 0)
    .map((i) => `<i class="gantt-month-line" style="left:${i * dayW}px"></i>`)
    .join("");

  const vis = visibleTaskRows(project);
  const barHtml = (start, end, cls) => {
    const a = parseDay(start);
    if (!a) return "";
    const b = parseDay(end) || a;
    const i1 = Math.round((a - min) / 86400000);
    const i2 = Math.round((b - min) / 86400000);
    const left = Math.max(0, i1) * dayW;
    const width = Math.max(1, i2 - i1 + 1) * dayW;
    return `<div class="bar ${cls}" style="left:${left}px;width:${width}px" title="${fmtDate(start)} → ${fmtDate(end)}"></div>`;
  };
  const rows = vis
    .map(({ task, depth, last }) => {
      const kids = hasChildren(task);
      const expanded = isExpanded(task.id);
      const twist = depth
        ? treeMark(true, last)
        : kids
          ? `<button class="twist ${expanded ? "open" : ""}" type="button" data-twist="${task.id}" title="${expanded ? tr("collapse") : tr("expand")}">${expanded ? "▾" : "▸"}</button>`
          : `<span class="twist-spacer"></span>`;
      const count = kids && !expanded ? `<span class="sub-count">${task.children.length}</span>` : "";
      return `<div class="gantt-row ${depth ? "sub" : ""}">
        <div class="gantt-sticky-name">
          <div class="gantt-name">${twist}<span class="gantt-name-text">${esc(task.name)}</span>${count}</div>
          <div class="gantt-col gantt-dates-p">${dateRange(task.plannedStart, task.plannedEnd)}</div>
          <div class="gantt-col gantt-dates-a">${dateRange(task.actualStart, task.actualEnd)}</div>
        </div>
        <div class="gantt-track" style="width:${scaleW}px">
          ${monthLines}
          ${barHtml(task.plannedStart, task.plannedEnd, "planned")}
          ${barHtml(task.actualStart, task.actualEnd, "actual")}
        </div>
      </div>`;
    })
    .join("");

  return `<div class="gantt" style="--day-w:${dayW}px">
    <div class="gantt-scroll">
      <div class="gantt-head">
        <div class="gantt-sticky-name">
          <div class="gantt-name">${tr("taskName")}</div>
          <div class="gantt-col gantt-dates-p">${tr("planned")}</div>
          <div class="gantt-col gantt-dates-a">${tr("actual")}</div>
        </div>
        <div class="gantt-scale" style="width:${scaleW}px">
          <div class="gantt-years">${yearBand}</div>
          <div class="gantt-months">${monthBand}</div>
          <div class="gantt-days">${dayBand}</div>
        </div>
      </div>
      ${rows}
    </div>
  </div>`;
}

function bindGanttScroll() {}

function moveInList(list, index, dir) {
  const next = index + dir;
  if (next < 0 || next >= list.length) return;
  [list[index], list[next]] = [list[next], list[index]];
  save(state.data);
  render();
}

function openProjectForm(project) {
  const p = project || { name: "", hospital: "", device: "mri" };
  showForm(`
    <h3>${project ? tr("editProject") : tr("addProject")}</h3>
    <label>${tr("projectName")}<input name="name" value="${esc(p.name)}" required></label>
    <label>${tr("hospital")}<input name="hospital" value="${esc(p.hospital)}" required></label>
    <label>${tr("device")}<select name="device">
      <option value="mri">${tr("mri")}</option>
      <option value="ct">${tr("ct")}</option>
      <option value="cath">${tr("cath")}</option>
      <option value="other">${tr("other")}</option>
    </select></label>
  `, (fd) => {
    if (project) {
      project.name = fd.get("name");
      project.hospital = fd.get("hospital");
      project.device = fd.get("device");
    } else {
      state.data.projects.push({
        id: uid(),
        name: fd.get("name"),
        hospital: fd.get("hospital"),
        device: fd.get("device"),
        files: [],
        tasks: []
      });
    }
    save(state.data);
  });
  document.querySelector('select[name="device"]').value = p.device;
}

function openTaskForm(project, taskItem, parent) {
  const rolled = taskItem && hasChildren(taskItem);
  const tk = taskItem || {
    name: "",
    plannedStart: "",
    plannedEnd: "",
    actualStart: "",
    actualEnd: "",
    plannedCost: "",
    actualCost: "",
    status: "not_started",
    notes: "",
    children: []
  };
  if (taskItem && !taskItem.costFiles) taskItem.costFiles = [];
  const fileDraft = taskItem ? taskItem.costFiles : [];
  const disabled = rolled ? "disabled" : "";
  showForm(`
    <h3>${taskItem ? tr("editTask") : parent ? tr("addSubtask") : tr("addTask")}</h3>
    ${parent ? `<p class="muted">${tr("subtaskOf")}: ${esc(parent.name)}</p>` : ""}
    ${rolled ? `<p class="hint">${tr("rolledUp")}</p>` : ""}
    <label>${tr("taskName")}<input name="name" value="${esc(tk.name)}" required></label>
    <div class="grid-2">
      <label>${tr("plannedStart")}${dateInput("plannedStart", tk.plannedStart, disabled)}</label>
      <label>${tr("plannedEnd")}${dateInput("plannedEnd", tk.plannedEnd, disabled)}</label>
      <label>${tr("actualStart")}${dateInput("actualStart", tk.actualStart, disabled)}</label>
      <label>${tr("actualEnd")}${dateInput("actualEnd", tk.actualEnd, disabled)}</label>
      <label>${tr("plannedCost")}<input type="number" name="plannedCost" value="${tk.plannedCost || 0}" ${disabled}></label>
      <label>${tr("actualCost")}<input type="number" name="actualCost" value="${tk.actualCost || 0}" ${disabled}></label>
    </div>
    <p class="muted">${tr("dateHint")}: dd/mm/yyyy</p>
    <label>${tr("status")}<select name="status" ${disabled}>
      <option value="not_started">${tr("not_started")}</option>
      <option value="in_progress">${tr("in_progress")}</option>
      <option value="done">${tr("done")}</option>
      <option value="delayed">${tr("delayed")}</option>
    </select></label>
    <label>${tr("notes")}<textarea name="notes">${esc(tk.notes || "")}</textarea></label>
    <div>
      <h4>${tr("costFiles")}</h4>
      <div data-cost-files></div>
    </div>
  `, (fd, modal) => {
    const payload = {
      name: fd.get("name"),
      notes: fd.get("notes")
    };
    if (!rolled) {
      const fields = ["plannedStart", "plannedEnd", "actualStart", "actualEnd"];
      for (const key of fields) {
        const parsed = parseDmy(fd.get(key));
        if (parsed === null) {
          modal.querySelector(".error").textContent = tr("dateInvalid");
          return false;
        }
        payload[key] = parsed;
      }
      payload.plannedCost = Number(fd.get("plannedCost") || 0);
      payload.actualCost = Number(fd.get("actualCost") || 0);
      payload.status = fd.get("status");
    }
    if (taskItem) Object.assign(taskItem, payload);
    else {
      const created = {
        id: uid(),
        children: [],
        status: "not_started",
        plannedCost: 0,
        actualCost: 0,
        costFiles: fileDraft,
        ...payload
      };
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(created);
        expandTask(parent.id);
      } else project.tasks.push(created);
    }
    rollupProject(project);
    save(state.data);
  });
  const sel = document.querySelector('select[name="status"]');
  if (sel) sel.value = tk.status || "not_started";
  mountFileBox(document.querySelector("[data-cost-files]"), fileDraft, () => {
    if (taskItem) save(state.data);
  });
}

function showForm(inner, onSave) {
  const modal = el(`<div class="modal-bg"><form class="modal card">
    ${inner}
    <p class="error"></p>
    <div class="row" style="margin-top:12px">
      <button class="btn" type="submit">${tr("save")}</button>
      <button class="btn secondary" type="button" data-cancel>${tr("cancel")}</button>
    </div>
  </form></div>`);
  modal.querySelector("[data-cancel]").onclick = () => {
    state.modal = null;
    render();
  };
  modal.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    if (!String(fd.get("name") || "").trim()) {
      modal.querySelector(".error").textContent = tr("required");
      return;
    }
    const ok = onSave(fd, modal);
    if (ok === false) return;
    state.modal = null;
    render();
  };
  state.modal = modal;
  render();
}

function reportTable(projects, withTasks, showSubs) {
  const single = withTasks && projects.length === 1;
  const head = `<thead><tr>
    ${single ? "" : `<th>${tr("projectName")}</th>`}
    ${withTasks ? `<th>${tr("taskName")}</th>` : ""}
    <th>${tr("plannedCost")}</th><th>${tr("actualCost")}</th><th>${tr("variance")}</th>
    <th>${tr("plannedStart")}</th><th>${tr("plannedEnd")}</th>
    <th>${tr("actualStart")}</th><th>${tr("actualEnd")}</th>
    <th>${tr("plannedDays")}</th><th>${tr("actualDays")}</th>
    <th>${tr("progress")}</th>
  </tr></thead>`;
  const body = projects
    .map((p) => {
      const s = projectStats(p);
      const summary = `<tr class="report-summary">
        ${single ? "" : `<td><b>${esc(p.name)}</b></td>`}
        ${withTasks ? `<td><b>${single ? tr("total") : ""}</b></td>` : ""}
        <td>${money(s.plannedCost)}</td>
        <td>${money(s.actualCost)}</td>
        <td>${money(s.actualCost - s.plannedCost)}</td>
        <td>${fmtDate(minDate(p.tasks.map((x) => x.plannedStart)))}</td>
        <td>${fmtDate(maxDate(p.tasks.map((x) => x.plannedEnd)))}</td>
        <td>${fmtDate(minDate(p.tasks.map((x) => x.actualStart)))}</td>
        <td>${fmtDate(maxDate(p.tasks.map((x) => x.actualEnd)))}</td>
        <td>${s.plannedDays}</td>
        <td>${s.actualDays}</td>
        <td>${s.progress}%</td>
      </tr>`;
      if (!withTasks) return summary;
      const taskLines = flatRows(p.tasks)
        .filter(({ depth }) => showSubs || depth === 0)
        .map(({ task, depth, parent }, i, arr) => {
          const kids = parent ? parent.children || [] : [];
          const last = depth && kids[kids.length - 1] === task;
          const mark = depth ? (last ? "└ " : "├ ") : "";
          return `<tr class="${depth ? "report-sub" : "report-main"}">
          ${single ? "" : "<td></td>"}
          <td class="${depth ? "task-indent" : ""}">${mark}${esc(task.name)}</td>
          <td>${money(task.plannedCost)}</td>
          <td>${money(task.actualCost)}</td>
          <td>${money(Number(task.actualCost || 0) - Number(task.plannedCost || 0))}</td>
          <td>${fmtDate(task.plannedStart)}</td>
          <td>${fmtDate(task.plannedEnd)}</td>
          <td>${fmtDate(task.actualStart)}</td>
          <td>${fmtDate(task.actualEnd)}</td>
          <td>${daysBetween(task.plannedStart, task.plannedEnd)}</td>
          <td>${daysBetween(task.actualStart, task.actualEnd)}</td>
          <td>${tr(task.status)}</td>
        </tr>`;
        })
        .join("");
      return summary + taskLines;
    })
    .join("");
  return `<table class="report-table">${head}<tbody>${body}</tbody></table>`;
}

function reportsView() {
  const selected = state.reportProjectId || "all";
  const options = [`<option value="all">${tr("allProjects")}</option>`]
    .concat(state.data.projects.map((p) => `<option value="${p.id}">${esc(p.name)}</option>`))
    .join("");
  const list =
    selected === "all"
      ? state.data.projects
      : state.data.projects.filter((p) => p.id === selected);
  const single = selected !== "all" && list[0];
  if (single && state.reportShowGantt) {
    list[0].tasks.forEach((t) => {
      if (hasChildren(t)) state.expanded[t.id] = true;
    });
  }
  const box = el(`<div class="report-page">
    <div class="row no-print" style="justify-content:space-between">
      <h2>${tr("reports")}</h2>
      <div class="row">
        <label style="margin:0">${tr("chooseProject")}
          <select name="which">${options}</select>
        </label>
        ${single ? `<label class="chk"><input type="checkbox" data-subs ${state.reportShowSubs ? "checked" : ""}> ${tr("showSubtasks")}</label>
        <label class="chk"><input type="checkbox" data-gantt ${state.reportShowGantt ? "checked" : ""}> ${tr("showGantt")}</label>` : ""}
        <button class="btn" type="button" data-print>${tr("print")}</button>
      </div>
    </div>
    ${single ? `<h1 class="report-title">${esc(list[0].name)}</h1>
      <p class="muted">${esc(list[0].hospital)} · ${tr(list[0].device)}</p>` : `<h1 class="report-title">${tr("allProjects")}</h1>`}
    <div class="card" style="padding:8px 16px; overflow:auto; margin-top:16px">
      ${reportTable(list, !!single, state.reportShowSubs)}
    </div>
    ${single && state.reportShowGantt ? `<h3>${tr("gantt")}</h3><div class="card gantt-wrap report-gantt">${ganttHtml(list[0])}</div>` : ""}
  </div>`);
  const sel = box.querySelector("select");
  sel.value = selected;
  sel.onchange = () => {
    state.reportProjectId = sel.value;
    render();
  };
  const subs = box.querySelector("[data-subs]");
  if (subs) subs.onchange = () => {
    state.reportShowSubs = subs.checked;
    render();
  };
  const gantt = box.querySelector("[data-gantt]");
  if (gantt) gantt.onchange = () => {
    state.reportShowGantt = gantt.checked;
    render();
  };
  box.querySelector("[data-print]").onclick = () => window.print();
  bindGanttScroll(box);
  return box;
}

function usersView() {
  if (!isPm()) return el(`<p class="readonly-note">${tr("onlyPm")}</p>`);
  const box = el(`<div>
    <div class="row" style="justify-content:space-between">
      <h2>${tr("users")}</h2>
      <button class="btn" data-add>${tr("addUser")}</button>
    </div>
    <div class="card" style="padding:8px 16px; margin-top:12px; overflow:auto">
      <table>
        <thead><tr><th>${tr("username")}</th><th>${tr("displayName")}</th><th>${tr("email")}</th><th>${tr("role")}</th><th></th></tr></thead>
        <tbody></tbody>
      </table>
    </div>
  </div>`);
  const tbody = box.querySelector("tbody");
  state.data.users.forEach((u) => {
    const row = el(`<tr>
      <td>${esc(u.username)}</td><td>${esc(u.name)}</td><td>${esc(u.email)}</td><td>${esc(roleLabel(u))}</td>
      <td class="row">
        <button class="btn small" data-ed>${tr("edit")}</button>
        ${u.role !== "pm" ? `<button class="btn small danger" data-del>${tr("delete")}</button>` : ""}
      </td>
    </tr>`);
    row.querySelector("[data-ed]").onclick = () => openUserForm(u);
    const del = row.querySelector("[data-del]");
    if (del) del.onclick = () => {
      state.data.users = state.data.users.filter((x) => x.id !== u.id);
      save(state.data);
      render();
    };
    tbody.append(row);
  });
  box.querySelector("[data-add]").onclick = () => openUserForm(null);
  return box;
}

function openUserForm(user) {
  const u = user || { username: "", name: "", email: "", role: "other", roleTitle: "", password: "" };
  showForm(`
    <h3>${user ? tr("edit") : tr("addUser")}</h3>
    <div class="grid-2">
      <label>${tr("username")}<input name="username" value="${esc(u.username)}" required></label>
      <label>${tr("displayName")}<input name="name" value="${esc(u.name)}" required></label>
      <label>${tr("email")}<input name="email" type="email" value="${esc(u.email)}"></label>
      <label>${tr("role")}<select name="role">
        <option value="pm">${tr("pm")}</option>
        <option value="other">${tr("otherRole")}</option>
      </select></label>
    </div>
    <label>${tr("roleTitle")}<input name="roleTitle" value="${esc(u.roleTitle || "")}" placeholder="${esc(tr("roleTitleHint"))}"></label>
    <label>${tr("newPassword")}<input name="password" type="password" placeholder="${user ? "••••••" : ""}"></label>
  `, (fd, modal) => {
    const payload = {
      username: String(fd.get("username")).trim(),
      name: fd.get("name"),
      email: fd.get("email"),
      role: fd.get("role"),
      roleTitle: fd.get("role") === "pm" ? "" : String(fd.get("roleTitle") || "").trim()
    };
    if (payload.role === "other" && !payload.roleTitle) {
      modal.querySelector(".error").textContent = tr("required");
      return false;
    }
    const pass = String(fd.get("password") || "");
    if (pass && isWeakPassword(pass)) {
      modal.querySelector(".error").textContent = tr("weakPassword");
      return false;
    }
    if (user) {
      Object.assign(user, payload);
      if (pass) user.password = pass;
    } else {
      if (!pass || isWeakPassword(pass)) {
        modal.querySelector(".error").textContent = pass ? tr("weakPassword") : tr("required");
        return false;
      }
      state.data.users.push({ id: uid(), password: pass, ...payload });
    }
    save(state.data);
  });
  document.querySelector('select[name="role"]').value = u.role === "pm" ? "pm" : "other";
}

function profileView() {
  const u = currentUser();
  const box = el(`<div>
    <h2>${tr("profile")}</h2>
    <form class="card" style="padding:20px; max-width:560px">
      <p class="muted">${tr("currentUser")}: ${esc(u.username)} · ${esc(roleLabel(u))}</p>
      <label>${tr("displayName")}<input name="name" value="${esc(u.name)}" ${isPm() ? "" : "disabled"}></label>
      <label>${tr("email")}<input name="email" type="email" value="${esc(u.email || "")}" ${isPm() ? "" : "disabled"}></label>
      ${isPm() ? `<label>${tr("username")}<input name="username" value="${esc(u.username)}"></label>` : `<p>${tr("username")}: <b>${esc(u.username)}</b></p>`}
      <label>${tr("changePassword")}<input name="password" type="password" minlength="8"></label>
      ${!isPm() ? `<p class="readonly-note">${tr("onlyPm")}</p>` : ""}
      <p class="error"></p>
      <button class="btn" type="submit">${tr("save")}</button>
    </form>
  </div>`);
  box.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const err = box.querySelector(".error");
    const pass = String(fd.get("password") || "");
    if (isPm()) {
      u.name = fd.get("name");
      u.email = fd.get("email");
      if (fd.get("username")) u.username = String(fd.get("username")).trim();
    }
    if (pass) {
      if (isWeakPassword(pass)) {
        err.textContent = tr("weakPassword");
        return;
      }
      u.password = pass;
    }
    save(state.data);
    render();
  };
  return box;
}

function esc(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

boot();
