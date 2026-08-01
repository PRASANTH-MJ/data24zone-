# Deploying to Hostinger (Node.js hosting)

This project is configured to produce a self-contained Node.js server via
Next.js's `output: "standalone"` build mode — this is the format Hostinger's
Node.js app manager (and most similar panels) expect: a folder with a
`server.js` you run directly with `node server.js`, no separate `next start`
or build step needed on the server.

## 1. Build the deployable folder

On your own machine (this repo):

```bash
npm install
npm run build:standalone
```

This creates `.next/standalone/` — a complete, ready-to-run copy of the app
(includes its own minimal `node_modules`, the built pages, `public/` assets,
and `server.js`). This whole folder is what you deploy.

## 2. Get the folder onto Hostinger

Pick whichever is easiest for you:

- **Zip upload:** `cd .next/standalone && zip -r ../../deploy.zip .`, then upload
  `deploy.zip` via hPanel's File Manager and extract it into the folder you'll
  point the Node.js app at (e.g. a `data24zone` folder outside `public_html`).
- **Git-based deploy:** if your Hostinger plan's hPanel has a "Git" section,
  you can point it at `https://github.com/PRASANTH-MJ/data24zone-.git` — but
  note this pulls the *source* repo, not the standalone build, so you'd still
  need to run `npm install && npm run build:standalone` on the server via
  hPanel's terminal/SSH if available. The zip-upload method above is simpler
  if you don't have SSH access.

## 3. Configure the Node.js app in hPanel

In hPanel → **Websites** → your site → **Advanced** → **Node.js**:

1. **Node.js version:** 20.x (matches what this project was built with)
2. **Application root:** the folder where you extracted the standalone build
   (the one containing `server.js`)
3. **Application startup file:** `server.js`
4. **Application URL:** `data24zone.com` (your domain)
5. **Environment variables** — add these (see `.env.example` for the full list):
   - `WEB3FORMS_ACCESS_KEY` — required for the contact form and course
     enrollment form to actually deliver email. Get this free at
     [web3forms.com](https://web3forms.com).
   - `CONTACT_RECEIVE_EMAIL` — optional, only used by the (currently unused)
     Gmail SMTP path; safe to leave unset.
   - `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — only if
     you set up Supabase for storing form submissions or auth; otherwise
     leave unset.
   - Do **not** set `PORT` — Hostinger injects this itself, and the
     standalone server already reads `process.env.PORT` automatically.
6. Click **NPM Install** if hPanel offers it (harmless even though the
   standalone build already bundles its dependencies).
7. **Start** (or **Restart**) the application.

## 4. Point your domain at it

If `data24zone.com` isn't already the domain attached to this hosting
account/website in hPanel, attach it there first (hPanel → Domains), then
make sure the Node.js app's "Application URL" step above references it.

## 5. Re-deploying after future changes

Each time you (or I) change the code:

```bash
npm run build:standalone
```

then re-upload the fresh `.next/standalone/` contents the same way as step 2,
and click **Restart** on the Node.js app in hPanel.

---

**Verified locally:** this exact build was tested by running
`node server.js` with a custom `PORT` and confirming it serves the site
correctly — the standalone output works as expected.
