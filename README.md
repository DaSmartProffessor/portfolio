# Tata Ngwa Billy — Portfolio

A professional personal portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Sky-blue and orange theme with light/dark mode.

## Features

- Responsive single-page layout: Hero, About, Skills, Resume, Services, Portfolio, Contact
- Light/dark mode with a toggle (system-aware, via `next-themes`)
- Smooth scroll animations (Framer Motion) and active-section navigation
- Working contact form via [Web3Forms](https://web3forms.com) — no domain or backend required — plus WhatsApp & email fallbacks
- SEO metadata, Open Graph tags, and accessible markup

## Tech Stack

| Area        | Choice                          |
| ----------- | ------------------------------- |
| Framework   | Next.js 15 (App Router) + TS    |
| Styling     | Tailwind CSS v4                 |
| Animation   | Framer Motion                   |
| Icons       | lucide-react                    |
| Theming     | next-themes                     |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Configure the contact form (optional but recommended)
cp .env.example .env.local
# then add your free Web3Forms key to NEXT_PUBLIC_WEB3FORMS_KEY

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup (Web3Forms)

1. Go to [web3forms.com](https://web3forms.com) and enter your email to get a free **access key** (no account or domain needed).
2. Add it to `.env.local`:

   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key
   ```

3. Submissions are emailed to the address tied to your key. Until it's set, the form gracefully points visitors to the WhatsApp/email buttons.

## Editing content

All content lives in typed files under `src/data/`:

- `site.ts` — name, role, contact details, socials, navigation
- `skills.ts` — skill groups and stats
- `experience.ts` — education, work experience, summary
- `services.ts` — services offered
- `projects.ts` — portfolio projects

Images live in `public/` (avatar at `public/avatar.jpeg`, project shots in `public/projects/`). Drop a `resume.pdf` into `public/` to enable the resume download button.

## Build & Deploy

```bash
npm run build
npm run start
```

Recommended host: [Vercel](https://vercel.com) (zero-config for Next.js). Add `NEXT_PUBLIC_WEB3FORMS_KEY` as an environment variable in the project settings.
