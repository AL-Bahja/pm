window.APP_ENV = window.APP_ENV || {};

async function loadEnv() {
  const merged = Object.assign({}, window.APP_ENV || {});
  for (const file of [".env.example", ".env"]) {
    try {
      const res = await fetch(file, { cache: "no-store" });
      if (!res.ok) continue;
      String(await res.text())
        .split(/\r?\n/)
        .forEach((line) => {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith("#")) return;
          const eq = trimmed.indexOf("=");
          if (eq < 1) return;
          const key = trimmed.slice(0, eq).trim();
          let value = trimmed.slice(eq + 1).trim();
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          }
          if (value) merged[key] = value;
        });
    } catch (err) {
      /* hosted copies may not include .env */
    }
  }
  window.APP_ENV = merged;
  return merged;
}
