# Rifqy Hazim HR — Portfolio (Next.js)

Next.js rebuild of the original Astro portfolio. It keeps the same content, navigation, and theme toggle while using the App Router so it can be deployed easily to Vercel.

## Tech Stack
- Next.js 15 (App Router) + React 19
- TypeScript with simple module aliases (`@/*` → `src/*`)
- Plain CSS for theming, layout, palettes, and pointer effects (`src/app/globals.css`)
- OpenAI Chat Completions (`gpt-5-nano`) for the AI navigation agent

## Project Structure
- `src/app` — Route tree and page components
- `src/components` — Shared UI pieces (Header, BaseLink, UpdatesList, ThemeToggle, NextSteps)
- `src/data` — Small data objects for navigation, updates, and links
- `public` — Static assets, including `favicon.svg` and placeholders

## Environment Variables

The AI agent requires an OpenAI API key available **only** on the server. Copy `.env.local.example` → `.env.local` and fill in a fresh key that has not been committed anywhere.

```bash
cp .env.local.example .env.local
# edit .env.local and paste your rotated key
```

- Never commit `.env.local` (already ignored).
- Set `OPENAI_API_KEY` in your hosting provider dashboard (e.g., Vercel → Project Settings → Environment Variables).
- Rotate the key immediately if it was ever printed to a public log or shared workspace.

## Local Development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to view the site.

## Production Build
```bash
npm run build
```
This outputs a static build ready for Vercel or any Node-compatible hosting. `npm start` runs the production server locally if needed.

## Deploying to Vercel
1. Push this repository to GitHub.
2. In Vercel, create a project from the repo (use the `main` branch).
3. Keep the default build command (`npm run build`) and output directory (`.next`).
4. (Optional) Add an env var `SITE_URL` if you want canonical URLs for a custom domain.
5. Trigger a deploy.
