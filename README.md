# b5r

Minimal landing page for [b5r.uk](https://b5r.uk), deployed on Vercel. `b5r.co.uk` redirects here.

## Local development

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Enquiry delivery

The form uses a Next.js Server Action with server-side validation and sends mail through the Resend API. Add these Vercel environment variables before accepting enquiries:

- `RESEND_API_KEY`
- `ENQUIRY_FROM_EMAIL`, a verified Resend sender
- `ENQUIRY_TO_EMAIL`, the receiving inbox

Never commit `.env.local` or API keys.

## Before launch

- Add the remaining social links in `app/page.tsx`.
- Configure the enquiry environment variables in Vercel.
