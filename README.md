# Shack Starlink Mounts

Marketing site for the Shack Mounts hardware line, built with React, Vite and Tailwind CSS.

## Local development

```bash
npm install         # install dependencies
npm run dev         # start the local dev server
npm run build       # type-check + build static assets into docs/
```

## Deployment

GitHub Actions now handles deployments for you:

1. Push changes to `main`.
2. The `Deploy site to GitHub Pages` workflow installs dependencies, runs `npm run build` (which emits the static site into `docs/`), and uploads that folder as the GitHub Pages artifact.
3. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions** so that Pages serves the artifact the workflow publishes.

You can also run `npm run build` locally to verify the `docs/` output before pushing.
