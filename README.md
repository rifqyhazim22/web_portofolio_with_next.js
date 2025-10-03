# Rifqy Hazim HR — Portfolio (Next.js)

Next.js rebuild of the original Astro portfolio. It keeps the same content, navigation, and theme toggle while using the App Router so it can be deployed easily to Vercel.

## Tech Stack
- Next.js 15 (App Router) + React 19
- TypeScript with simple module aliases (`@/*` → `src/*`)
- Plain CSS for theming and layout (`src/app/globals.css`)

## Project Structure
- `src/app` — Route tree and page components
- `src/components` — Shared UI pieces (Header, BaseLink, UpdatesList, ThemeToggle, NextSteps)
- `src/data` — Small data objects for navigation, updates, and links
- `public` — Static assets, including `favicon.svg` and placeholders

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
