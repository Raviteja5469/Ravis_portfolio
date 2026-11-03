# Raviteja Seguri — Portfolio

Personal site for Raviteja Seguri, Full Stack Developer at Workelate, Hyderabad.

**Live:** https://raviteja5469.github.io/Ravis_portfolio/

## Stack

React 18, TypeScript, Vite, Tailwind CSS, deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173/Ravis_portfolio/
npm run build    # production build in dist/
npm run lint
```

## Editing content

All copy lives in [`src/data/content.ts`](src/data/content.ts): profile, work, projects, skills, education and certifications. Update that file; the components read from it.

- Resume: replace `src/assets/Raviteja_resume.pdf`
- Portrait: replace `src/assets/portrait.webp` (square, 192px or larger)
- Social preview: `public/og-v2.png` (1200×630), with editable source in `scripts/social-preview.svg`

## Contact form (optional)

The contact form appears only when EmailJS is configured. Add these as repository secrets (Settings → Secrets and variables → Actions) and as a local `.env` for development:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

The template receives `from_name`, `from_email` and `message`. Without these keys the site shows email and links only.

## SEO and deployment

`npm run build` creates the client bundle, renders the portfolio into the initial HTML,
and validates headings, canonical URL, structured data, sitemap and referenced assets.
The client still runs the intro and interactive UI. Without JavaScript, the production
page exposes the experience details and project previews as readable static content.
Use `npm run preview` to inspect this production behavior; the dev server remains client-rendered.

The canonical URL is `https://raviteja5469.github.io/Ravis_portfolio/`.
If the hosting domain or base path changes, update `index.html`, `public/sitemap.xml`,
`vite.config.ts` and `scripts/check-seo.mjs` together.

After deployment, verify the URL in Google Search Console, inspect the rendered page,
and submit `https://raviteja5469.github.io/Ravis_portfolio/sitemap.xml`.
A GitHub Pages project cannot control robots.txt from its subdirectory: robots rules
must live at the origin root (`https://raviteja5469.github.io/robots.txt`). No misleading
subdirectory robots.txt is shipped. Indexing and rankings remain up to search engines.

Browser icons: `public/rs-icon.svg`, `public/rs-icon-48.png` and
`public/apple-touch-icon.png`. Keep raster versions in sync with the SVG.
