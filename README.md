# Portfolio

Personal portfolio built with Vite + React and Tailwind CSS.

## Overview

This repository contains a personal portfolio site showcasing projects, experience, and a contact form. The contact form uses EmailJS (or a serverless endpoint) and sensitive credentials must be kept out of the client build.

## Local setup

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

## Environment variables

Create a local `.env.local` (this file is gitignored). Copy values from `.env.example` and fill in private keys.

Important variables used in this project:

- `VITE_EMAILJS_SERVICE_ID` — EmailJS service ID (client fallback only; prefer server-side)
- `VITE_EMAILJS_TEMPLATE_ID` — EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` — EmailJS public key
- `VITE_CONTACT_EMAIL` — recipient email used in contact form
- `VITE_GITHUB_URL`, `VITE_LINKEDIN_URL`, `VITE_INSTAGRAM_URL` — optional overrides for socials

Do NOT commit `.env.local` or any secret values to GitHub.

## Deployment recommendations

- Recommended hosts: **Vercel** or **Netlify** (automatic builds + serverless functions). Keep secrets in the host's env settings (not as `VITE_` if you want them private).
- If you deploy a static build (GitHub Pages), host any email-sending endpoint separately (Vercel/Netlify function or external backend) and keep its credentials on the server side.

### GitHub Actions (static build example)

Use a workflow to build on push and deploy the `dist` folder to your chosen host. For sensitive server-side keys, store them under `Settings → Secrets & variables → Actions` and use them only in server-side functions or workflows.

## Security notes

- `.env.local` is ignored by default. If secrets were accidentally committed, rotate them immediately and remove them from history using tools like BFG or `git filter-repo`.
- Prefer serverless/email endpoints that store credentials server-side rather than placing private keys in the client.

## Contacts

For development questions or help with deployment, open an issue in this repo or reach out via the contact form (once server-side email is configured).

---

Generated README — update details to match your preferences.
