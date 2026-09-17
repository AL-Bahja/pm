# إدارة مشاريع شركة البهجة

تطبيق ويب بدون خادم خاص: كل البيانات والمرفقات تُحفظ في Google Drive للحساب `picassomega86@gmail.com`.

## التشغيل من أي جهاز

الرابط العام (GitHub Pages) يُنشر بعد رفع المشروع، بالشكل:

`https://<github-user>.github.io/bahja-pm/`

في Google Cloud Console → بيانات اعتماد OAuth → Authorized JavaScript origins أضف هذا الرابط (بدون مسار في النهاية) بالإضافة إلى:

- `http://127.0.0.1:8765`
- `http://localhost:8765`

على الأجهزة الأخرى سجّل الدخول إلى جوجل بحساب `picassomega86@gmail.com` حتى تظهر نفس المشاريع.

## التخزين

- مجلد `Bahja-PM` في درايف
- ملف `project_data.json` للمشاريع والمهمات والمستخدمين
- مجلد `Attachments` للصور والمرفقات (الروابط تُحفظ داخل الـ JSON)

لا توجد قاعدة بيانات أخرى. المتصفح يتصل بـ Drive API مباشرة.

## التشغيل

افتح التطبيق عبر خادم محلي (مطلوب لقراءة `.env` ولمصادقة جوجل)، مثلاً:

```powershell
python -m http.server 8765
```

ثم: `http://127.0.0.1:8765/`

لا تفتح `index.html` كملف `file://` لأن جوجل ومفاتيح `.env` لن تعمل.

## إعداد Google Cloud

1. في [Google Cloud Console](https://console.cloud.google.com/) أنشئ مشروعاً أو استخدم مشروعاً موجوداً.
2. فعّل **Google Drive API**.
3. أنشئ **OAuth 2.0 Client ID** من نوع **Web application**.
4. في Authorized JavaScript origins أضف:
   - `http://127.0.0.1:8765`
   - `http://localhost:8765`
5. انسخ Client ID إلى ملف `.env`:

```
GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
GOOGLE_API_KEY=
GOOGLE_DRIVE_EMAIL=picassomega86@gmail.com
APP_FOLDER_NAME=Bahja-PM
```

`GOOGLE_API_KEY` اختياري. لا تضع مفتاح حساب خدمة (service account) في الواجهة؛ المتصفح يستخدم OAuth للحساب أعلاه.

6. عند أول تشغيل اضغط **الاتصال بجوجل درايف** وسجّل الدخول بـ `picassomega86@gmail.com`.

## دخول التطبيق بعد درايف

| الدور | المستخدم | كلمة المرور |
|------|----------|-------------|
| مدير المشاريع | `manager` | `manager123` |
| مراقب | `viewer` | `viewer123` |

إذا سجّلت الدخول إلى جوجل بنفس إيميل المدير يُفتح حساب المدير تلقائياً.
