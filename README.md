# Mimris Site

Public website and communication home for the Mimris ecosystem.

## Repository responsibility

This repository owns public positioning, messaging, concepts, SEO/GEO content, examples, press material, and promotion strategy.

- `Mimris/mimris` implements Mimris Modelling.
- `Mimris/mimris-ai-workspace` implements Mimris AI Workspace.
- `Mimris/mimris-site` explains the ecosystem and the relationship between the products.

See [`docs/strategy/product-architecture.md`](docs/strategy/product-architecture.md) and [`docs/strategy/phase-1-positioning-and-web-foundation.md`](docs/strategy/phase-1-positioning-and-web-foundation.md).

## Public surfaces

- Ecosystem website: `https://mimris-site.vercel.app`
- Press kit: `https://mimris-site.vercel.app/press.html`
- From Metis to Mimris: `https://mimris-site.vercel.app/metis-legacy.html`
- Mimris Modelling demo: `https://mimris.vercel.app`
- Mimris AI Workspace demo: `https://mimris-ai-workspace.vercel.app`
- Public Mimris Modelling source: `https://github.com/Mimris/mimris`
- Modelling videos by Snorre Fossland: `https://www.youtube.com/@SnorresModelBureau`

Do not publish or link to the Mimris AI Workspace source repository until its owner changes its visibility.

## Application structure

The canonical site uses application routes under `app/`. Root-level HTML files support retained public pages and migration history. The former homepage is preserved as `legacy-home.html` and published at `/legacy-home.html`.

Public assets are generated into `public/` by `npm run sync:static` and are intentionally not committed.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run build
```
