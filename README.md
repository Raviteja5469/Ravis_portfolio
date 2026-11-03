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
- Social preview: `public/og.png` (1200×630)

## Contact form (optional)

The contact form appears only when EmailJS is configured. Add these as repository secrets (Settings → Secrets and variables → Actions) and as a local `.env` for development:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

The template receives `from_name`, `from_email` and `message`. Without these keys the site shows email and links only.
