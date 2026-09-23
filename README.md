# Acantilado

🌐 [Versión en español](README.es.md)

Reading site for **Acantilado**, a novel distributed chapter by chapter through QR codes posted around Buenos Aires. Each QR leads to a different chapter and unlocks that chapter plus every previous one.

🔗 **Live site:** https://acantilado.netlify.app

---

## About the project

The author hands out her novel across the city: six flyers, six QR codes, six chapters. Whoever scans the QR for chapter 3 can read chapters 3, 2 and 1, but not the ones that come after — to get those, they have to find the other flyers.

The original site was built in Canva as **six copies** of the same page, with the chapter number hardcoded in each one. This project rewrites it as **a single React application**, where the chapter comes from the URL.

## Features

- **URL-based unlocking.** Each QR points to `/capitulo/:numero`. The route defines how far the reader can go.
- **Cumulative progress.** Progress is stored in `localStorage` and combined with the URL: a reader who reached chapter 5 and later enters through the QR for chapter 1 keeps all five chapters.
- **Reader** with its own navigation, a chapter index with locked/unlocked states, and contextual notices depending on where the reader is in the trail.
- **Reading mode** that dims the surroundings and narrows the text column for distraction-free reading.
- **Custom text formatting.** Chapters are stored as plain text with markers (`*italic*`, `**bold**`, `***` as a separator) parsed at render time, with no external library.
- **Contact form without a backend**, with submission states and email notifications to the author.
- **Per-chapter analytics**, which translate directly into how many times each QR was scanned.
- **Responsive** and accessibility-aware: keyboard navigation, `aria-label`, `aria-pressed` and `aria-live`.

## Tech stack

| Technology | Purpose |
|---|---|
| **React 19** | component-based UI |
| **Vite 8** | dev server and build |
| **React Router 8** | dynamic routes and shared layout |
| **Tailwind CSS 4** | styling, with custom `@theme` tokens and a custom variant |
| **Axios** | form submission |
| **Lucide / Font Awesome** | icons |
| **SweetAlert2** | locked-chapter notice |
| **Netlify** | hosting, forms and continuous deployment |
| **GoatCounter + Google Analytics** | analytics |

## Project structure

```
src/
├── layout/       MainLayout, Header, Footer
├── page/         NovelPage
├── components/   Hero, ChapterIndex, Reader, NextQrNotice, About, ContactLetter
├── data/         chapters.js, navLinks.js
├── utils/        progreso.js, validarCapitulo.js
└── index.css     Tailwind tokens, animations and the `lectura:` variant
```

## Technical decisions

**One dynamic route instead of six pages.** `/capitulo/:numero` serves all six QR codes through a single component. A design change is made once, not six times.

**Two separate pieces of state.** `unlockedUpTo` (permission, derived from the URL and stored progress) and `currentChapter` (what is being read, held in local state). A single function, `openChapter`, owns the decision and is shared by the index, the reader and the hero.

**Validation at the boundary.** Every value coming from outside — the URL parameter or `localStorage` — goes through `validarCapitulo`, which guarantees a valid chapter number. A hand-edited value can neither break the app nor get stored permanently.

**A custom Tailwind variant for reading mode.** Instead of repeating conditionals across elements, `@custom-variant lectura` allows writing `lectura:bg-noche`, keeping the state in one place.

**No server of its own for the form.** Netlify Forms receives the submissions; the React form sends them with `axios` so the page never reloads, with a honeypot against spam and sending/success/error states.

**SPA routing on static hosting.** `public/_redirects` returns `index.html` with a 200 status for any path, so opening `/capitulo/3` directly — exactly what a QR code does — works as expected.

## Running it locally

```bash
git clone https://github.com/EnzoSantoni/Acantilado.git
cd Acantilado
npm install
npm run dev
```

Requires Node 22.22 or later (a React Router 8 requirement).

> The form and the analytics only work on the deployed site: both rely on services that do not run locally.

## Roadmap

- Per-chapter reading events using `IntersectionObserver`.
- Final decision on what the root route shows.
- Generating the final QR codes.

## Credits

- **Novel and texts:** Abril Novoa.
- **Development:** Enzo Santoni.
- **Photography:** Pexels.
