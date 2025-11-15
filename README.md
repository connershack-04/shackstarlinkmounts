# Shack Starlink Mounts

Marketing site for the Shack Mounts hardware line, built with React, Vite and Tailwind CSS.

## Local development

```bash
npm install         # install dependencies
npm run dev         # start the local dev server
npm run build       # type-check + build static assets into docs/
```

## Deployment

GitHub Pages needs the built files (the `docs/` folder) — there are two ways to publish them:

**Option A: GitHub Actions (recommended)**

1. Push changes to `main`.
2. The `Deploy site to GitHub Pages` workflow installs dependencies, runs `npm run build` (which emits the static site into `docs/`), and uploads that folder as the GitHub Pages artifact.
3. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions** so that Pages serves the artifact the workflow publishes.

You can also run `npm run build` locally to verify the `docs/` output before pushing.

**Option B: Deploy from the `docs/` branch folder**

1. Run `npm run build` locally so `docs/` contains the latest production bundle.
2. Commit the generated `docs/` files.
3. In **Pages → Build and deployment**, select **Deploy from a branch**, pick the `main` branch and the `/docs` folder.
4. Every time you change the site, rebuild (`npm run build`), commit the updated `docs/` files, and push to `main`.
