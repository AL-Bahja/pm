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

  clientId() {
    return (this.env().GOOGLE_CLIENT_ID || "").trim();
  },

  apiKey() {
    return (this.env().GOOGLE_API_KEY || "").trim();
  },

  folderName() {
    return (this.env().APP_FOLDER_NAME || "Bahja-PM").trim();
  },

  expectedEmail() {
    return (this.env().GOOGLE_DRIVE_EMAIL || "picassomega86@gmail.com").trim().toLowerCase();
  },

  configured() {
    return !!this.clientId();
  },

  async init() {
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

  signIn() {
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
    if (this.token && window.google && google.accounts && google.accounts.oauth2) {
      google.accounts.oauth2.revoke(this.token, () => {});
    }
    this.token = null;
    this.profile = null;
    this.folderId = null;
    this.dataFileId = null;
    this.attachmentsFolderId = null;
  },

  async getProfile() {
    const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: "Bearer " + this.token }
    });
    if (!res.ok) throw new Error("profile");
    return res.json();
  },

  async api(url, options) {
    const opts = options || {};
    const headers = Object.assign({}, opts.headers || {});
    if (this.token) headers.Authorization = "Bearer " + this.token;
    if (this.apiKey() && !url.includes("key=")) {
      url += (url.includes("?") ? "&" : "?") + "key=" + encodeURIComponent(this.apiKey());
    }
    const res = await fetch(url, Object.assign({}, opts, { headers }));
    if (res.status === 401 && this.tokenClient) {
      await this.signIn();
      headers.Authorization = "Bearer " + this.token;
      const retry = await fetch(url, Object.assign({}, opts, { headers }));
      if (!retry.ok) {
        const t = await retry.text();
        throw new Error(t || String(retry.status));
      }
      return retry;
    }
    if (!res.ok) {
      const t = await res.text();
      throw new Error(t || String(res.status));
    }
    return res;
  },

  async findFile(name, parentId, mime) {
    const parts = ["trashed=false", "name='" + name.replace(/'/g, "\\'") + "'"];
    if (parentId) parts.push("'" + parentId + "' in parents");
    if (mime) parts.push("mimeType='" + mime + "'");
    const q = encodeURIComponent(parts.join(" and "));
    const res = await this.api(
      "https://www.googleapis.com/drive/v3/files?pageSize=10&fields=files(id,name,mimeType,webViewLink,webContentLink)&q=" + q
    );
    const body = await res.json();
    return (body.files && body.files[0]) || null;
  },

  async createFolder(name, parentId) {
    const meta = {
      name,
      mimeType: "application/vnd.google-apps.folder"
    };
    if (parentId) meta.parents = [parentId];
    const res = await this.api("https://www.googleapis.com/drive/v3/files?fields=id,name", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meta)
    });
    return res.json();
  },

  async ensureStore() {
    const folderMime = "application/vnd.google-apps.folder";
    let appFolder = await this.findFile(this.folderName(), null, folderMime);
    if (!appFolder) appFolder = await this.createFolder(this.folderName());
    this.folderId = appFolder.id;

    let attachments = await this.findFile("Attachments", this.folderId, folderMime);
    if (!attachments) attachments = await this.createFolder("Attachments", this.folderId);
    this.attachmentsFolderId = attachments.id;

    let dataFile = await this.findFile("project_data.json", this.folderId, "application/json");
    if (!dataFile) dataFile = await this.findFile("project_data.json", this.folderId);
    if (!dataFile) {
      const created = await this.createJsonFile("project_data.json", this.folderId, { users: [], projects: [] });
      this.dataFileId = created.id;
    } else {
      this.dataFileId = dataFile.id;
    }
  },

  async createJsonFile(name, parentId, data) {
    const metadata = {
      name,
      mimeType: "application/json",
      parents: parentId ? [parentId] : undefined
    };
    const form = new FormData();
    form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
    form.append("file", new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
    const res = await this.api("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name", {
      method: "POST",
      body: form
    });
    return res.json();
  },

  async loadData() {
    const res = await this.api(
      "https://www.googleapis.com/drive/v3/files/" + this.dataFileId + "?alt=media"
    );
    const text = await res.text();
    if (!text) return { users: [], projects: [] };
    return JSON.parse(text);
  },

  saveData(data) {
    this.saveQueue = this.saveQueue
      .catch(() => {})
      .then(() =>
        this.api("https://www.googleapis.com/upload/drive/v3/files/" + this.dataFileId + "?uploadType=media", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
      )
      .then(() => true);
    return this.saveQueue;
  },

  async uploadAttachment(file) {
    const metadata = {
      name: Date.now() + "-" + file.name,
      parents: [this.attachmentsFolderId]
    };
    const form = new FormData();
    form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
    form.append("file", file);
    const res = await this.api(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink,webContentLink,mimeType,size",
      { method: "POST", body: form }
    );
    const created = await res.json();
    try {
      await this.api("https://www.googleapis.com/drive/v3/files/" + created.id + "/permissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "reader", type: "anyone" })
      });
    } catch (err) {
      /* private file still usable while signed in */
    }
    const infoRes = await this.api(
      "https://www.googleapis.com/drive/v3/files/" + created.id + "?fields=id,name,webViewLink,webContentLink,mimeType,size"
    );
    const info = await infoRes.json();
    return {
      id: created.id,
      name: file.name,
      type: file.type || info.mimeType,
      size: Number(file.size || info.size || 0),
      driveFileId: info.id,
      url: info.webViewLink || info.webContentLink || ""
    };
  },

  async openAttachment(meta) {
    const id = meta.driveFileId || meta.id;
    if (meta.url && meta.url.indexOf("http") === 0) {
      window.open(meta.url, "_blank", "noopener");
      return;
    }
    const res = await this.api("https://www.googleapis.com/drive/v3/files/" + id + "?alt=media");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = meta.name || "file";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  },

  async deleteAttachment(meta) {
    const id = meta && (meta.driveFileId || meta.id);
    if (!id) return;
    try {
      await this.api("https://www.googleapis.com/drive/v3/files/" + id, { method: "DELETE" });
    } catch (err) {
      /* ignore */
    }
  }
};
