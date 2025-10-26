# Email Subscription Setup

✅ **Resend entegrasyonu tamamlandı!**

Email subscription formu çalışıyor ve `bytrosprotocol@gmail.com` adresine email göndermek için hazır.

## Kurulum (Sadece 2 Adım!)

### 1. Resend API Key Alın

1. https://resend.com/signup adresine gidin ve ücretsiz hesap oluşturun
2. Dashboard'dan API Key oluşturun
3. API Key'i kopyalayın

### 2. Environment Variable Ekleyin

Landing klasöründe `.env.local` dosyası oluşturun:

```bash
cd landing
cp .env.local.example .env.local
```

`.env.local` dosyasını açın ve API key'inizi ekleyin:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### 3. Development Server'ı Yeniden Başlatın

```bash
npm run dev
```

**Hepsi bu kadar!** Artık form çalışıyor ve email'ler `bytrosprotocol@gmail.com` adresine gönderiliyor.

## Test

1. http://localhost:3001 adresini açın
2. Email adresinizi girin
3. "Notify Me" butonuna tıklayın
4. `bytrosprotocol@gmail.com` adresine email geldiğini kontrol edin

## Not

- Resend'in ücretsiz planı ayda 3,000 email göndermeye izin veriyor
- `onboarding@resend.dev` adresi test için kullanılıyor
- Production'da kendi domain'inizi verify edip kullanabilirsiniz

---

### 2. SendGrid

```bash
npm install @sendgrid/mail
```

`.env.local`:
```env
SENDGRID_API_KEY=your_api_key_here
```

`app/api/subscribe/route.ts`:
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

await sgMail.send({
  to: 'bytrosprotocol@gmail.com',
  from: 'your-verified-sender@yourdomain.com',
  subject: 'New Bytros Landing Page Subscription',
  html: `
    <h2>New Bytros Landing Page Subscription</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
  `,
});
```

**Kayıt:** https://sendgrid.com/

---

### 3. Nodemailer (Gmail ile)

```bash
npm install nodemailer
```

`.env.local`:
```env
GMAIL_USER=bytrosprotocol@gmail.com
GMAIL_APP_PASSWORD=your_app_password_here
```

**Gmail App Password oluşturma:**
1. Google Account → Security
2. 2-Step Verification'ı aktif edin
3. App passwords → Generate

`app/api/subscribe/route.ts`:
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

await transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: 'bytrosprotocol@gmail.com',
  subject: 'New Bytros Landing Page Subscription',
  html: `
    <h2>New Bytros Landing Page Subscription</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
  `,
});
```

---

## Şu Anki Durum

✅ Form çalışıyor
✅ API endpoint hazır
✅ Email validasyonu var
⚠️ Email gönderimi için yukarıdaki seçeneklerden birini entegre etmeniz gerekiyor

Şu anda email'ler sadece console'a log olarak yazılıyor. Production'a almadan önce mutlaka bir email servisi entegre edin.

## Test

Email servisi entegre ettikten sonra:

1. Landing page'i açın: http://localhost:3001
2. Email adresinizi girin
3. "Notify Me" butonuna tıklayın
4. `bytrosprotocol@gmail.com` adresine email geldiğini kontrol edin

## Production

Production'a alırken `.env.local` dosyasındaki değişkenleri hosting platformunuza (Vercel, Netlify, vb.) environment variables olarak ekleyin.

