# OS-Portfolio — Retro OS-style Personal Portfolio

An interactive, OS-like portfolio built with Next.js and TypeScript. The project showcases a desktop-inspired UI, apps, and a collection of demo content to present work in a playful, nostalgic way.

Repository: https://github.com/Saksham-Goel1107/OS-Portfolio

> Note: This repository contains demo content. Personal details, dates, and project data in the portfolio may be fictional or inaccurate and are included for demonstration purposes only.

---

## What is this?

OS-Portfolio is a single-page portfolio shell that imitates a desktop operating system. It demonstrates UX ideas and frontend techniques for presenting projects inside movable windows, with a dock, lock screen, quick settings, and small app-like pages (e.g., Projects, Files, Terminal, Resume viewer).

This repo is intended as a visually interesting portfolio template and learning resource — not a production OS.

---

## Key Features

- Retro OS-style desktop UI with draggable windows and dock
- App components for Projects, Files, Calendar, Terminal, Resume and more
- Responsive, accessible UI built with Next.js + TypeScript
- Static demo data stored under `lib/portfolio.ts` for easy customization
- Simple file viewer and PDF embedding for demonstrating portfolio assets

---

## Tech Stack

| Area | Technology |
|------|------------|
| Frontend | Next.js (App Router), React, TypeScript |
| Styling | PostCSS / plain CSS (globals.css) |
| Tooling | npm, ESLint, TypeScript |

---

## Getting started (local)

Prerequisites: Node.js 18+ recommended.

Clone and run locally:

```bash
git clone https://github.com/Saksham-Goel1107/OS-Portfolio.git
cd OS-Portfolio
npm install
npm run dev
```

Open http://localhost:3000 to view the portfolio.

Build for production:

```bash
npm run build
npm run start
```

---

## Project structure (high level)

- `app/` — Next.js app routes and pages (App Router)
- `components/` — React UI components (windows, dock, apps)
- `lib/portfolio.ts` — Demo data: profile, projects, files, settings
- `public/assets/` — Static images and assets used by the UI
- `styles` / `globals.css` — Global styles

To customize the displayed profile and projects, edit `lib/portfolio.ts` and replace demo entries with your real content.

---

## Customize the demo data

All visible content (name, projects, experience, files) is driven from `lib/portfolio.ts`. Edit that file to:

1. Update `PORTFOLIO` fields (name, title, contact links, projects)
2. Replace images in `public/assets` and update paths
3. Optionally adjust window defaults in `WIN_DEFAULTS` for sizes/titles

Changes are hot-reloaded in development.

---

## Deployment

This Next.js app can be deployed on Vercel (recommended) or any platform that supports Next.js.

1. Push the repo to GitHub: `git push origin main`
2. Import project on Vercel and set framework to Next.js

---

## Contributing

Contributions are welcome. For fixes or improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/my-change`)
3. Commit and push your changes
4. Open a pull request describing your change

Please keep changes focused and open an issue first for large features.

---

## License

No license file is included in this repository by default. Check the `LICENSE` file (if present) or contact the repository owner for usage terms.

---

## Author / Contact

This repo is published at https://github.com/Saksham-Goel1107/OS-Portfolio

If you want to adapt this template for your own portfolio, edit `lib/portfolio.ts` and replace the demo content with your real projects and links.

<sub>Demo content may be inaccurate — this is a showcase template, not a real personal profile.</sub>

