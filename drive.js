const Drive = {
  token: null,
  tokenClient: null,
  profile: null,
  folderId: null,
  dataFileId: null,
  attachmentsFolderId: null,
  saveQueue: Promise.resolve(),

  env() {
    return window.APP_ENV || {};
  },

  webAppUrl() {
    return (this.env().DRIVE_WEBAPP_URL || "").trim();
  },

  secret() {
    return (this.env().DRIVE_SECRET || "bahja-2026-pm").trim();
  },

  clientId() {
    return (this.env().GOOGLE_CLIENT_ID || "").trim();
  },

  folderName() {
    return (this.env().APP_FOLDER_NAME || "Bahja-PM").trim();
  },

  expectedEmail() {
    return (this.env().GOOGLE_DRIVE_EMAIL || "picassomega86@gmail.com").trim().toLowerCase();
  },

  useBridge() {
    return !!this.webAppUrl();
  },

  configured() {
    return this.useBridge() || !!this.clientId();
  },

  async init() {
    if (this.useBridge()) return;
    if (!this.clientId()) return;
    await this.loadGis();
    this.tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: this.clientId(),
      scope: [
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile"
      ].join(" "),
      callback: () => {}
    });
  },

  loadGis() {
    if (window.google && google.accounts && google.accounts.oauth2) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const existing = document.querySelector("script[data-gis]");
      if (existing) {
        existing.addEventListener("load", () => resolve());
        existing.addEventListener("error", () => reject(new Error("gis")));
        return;
      }
      const s = document.createElement("script");
      s.src = "https://accounts.google.com/gsi/client";
      s.async = true;
      s.defer = true;
      s.dataset.gis = "1";
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("gis"));
      document.head.appendChild(s);
    });
  },

  async callBridge(payload) {
    const res = await fetch(this.webAppUrl(), {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(Object.assign({ secret: this.secret() }, payload))
    });
    const text = await res.text();
    let body;
    try {
      body = JSON.parse(text);
    } catch (err) {
      throw new Error("bridge");
    }
    if (!body || !body.ok) throw new Error((body && body.error) || "bridge");
    return body;
  },

  async signIn() {
    if (this.useBridge()) {
      this.profile = { email: this.expectedEmail() };
      this.token = "bridge";
      return this.profile;
    }
    return new Promise((resolve, reject) => {
      if (!this.tokenClient) {
        reject(new Error("not-init"));
        return;
      }
      this.tokenClient.callback = async (resp) => {
        if (resp.error) {
          reject(new Error(resp.error));
          return;
        }
        this.token = resp.access_token;
        try {
          this.profile = await this.getProfile();
          await this.ensureStore();
          resolve(this.profile);
        } catch (err) {
          reject(err);
        }
      };
      this.tokenClient.requestAccessToken({ prompt: this.token ? "" : "consent" });
    });
  },

  signOut() {
    this.token = null;
    this.profile = null;
  },

  async getProfile() {
    const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: "Bearer " + this.token }
    });
    if (!res.ok) throw new Error("profile");
    return res.json();
  },

  async loadData() {
    if (this.useBridge()) {
      const body = await this.callBridge({ action: "load" });
      return body.data || { users: [], projects: [] };
    }
    throw new Error("no-store");
  },

  saveData(data) {
    if (this.useBridge()) {
      this.saveQueue = this.saveQueue.catch(() => {}).then(() => this.callBridge({ action: "save", data: data }));
      return this.saveQueue;
    }
    return Promise.reject(new Error("no-store"));
  },

  async uploadAttachment(file) {
    if (!this.useBridge()) throw new Error("no-store");
    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || "").split(",")[1] || "");
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
    const body = await this.callBridge({
      action: "upload",
      name: file.name,
      type: file.type || "application/octet-stream",
      size: file.size,
      base64: base64
    });
    return body.file;
  },

  async openAttachment(meta) {
    if (meta.url && String(meta.url).indexOf("http") === 0) {
      window.open(meta.url, "_blank", "noopener");
    }
  },

  async deleteAttachment(meta) {
    const id = meta && (meta.driveFileId || meta.id);
    if (!id || !this.useBridge()) return;
    try {
      await this.callBridge({ action: "delete", id: id });
    } catch (err) {
      /* ignore */
    }
  }
};
