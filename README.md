# Vivid Catering

A modern single-page marketing site for Vivid Catering, built with **Vite + React + TypeScript + Tailwind CSS** and **React Router**.

## Requirements

- Node.js (LTS recommended)

## Getting started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Routing notes

- This project uses `HashRouter` so routes work on static hosts (including GitHub Pages) without server-side rewrite rules.
- The home page is `/` and contains in-page sections (About/Services/Menu/Gallery/Testimonials/Contact).
- The pages `/about`, `/menu`, and `/gallery` navigate back to `/` and then scroll to those in-page sections when you click the matching header links.

## GitHub Pages deployment

- This repo includes a workflow at `.github/workflows/deploy-pages.yml`.
- On every push to `main`, GitHub Actions builds the app and deploys `dist` to GitHub Pages.
- To enable it in GitHub:
  1. Open repository **Settings** -> **Pages**.
  2. Under **Build and deployment**, choose **Source: GitHub Actions**.
  3. Push to `main` and wait for the workflow to finish.

