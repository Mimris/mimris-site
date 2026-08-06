# Mimris Site

Public combined landing page and press kit for Mimris and Mimris AI Workspace.

## Public Surfaces

- Combined overview: `https://site-swart-omega-89.vercel.app`
- Press kit: `https://site-swart-omega-89.vercel.app/press.html`
- Metis legacy documentation: `https://mimris-site.vercel.app/metis-legacy.html`
- Mimris demo: `https://mimris.vercel.app`
- Mimris AI Workspace demo: `https://mimris-ai-workspace.vercel.app`
- Public Mimris source: `https://github.com/Mimris/mimris`

## Repository Split

- `Mimris/mimris`: public source repository for the Mimris modelling app.
- `Mimris/mimris-ai-workspace`: private/authenticated source repository for Mimris AI Workspace.
- `Mimris/mimris-site`: public combined landing page and press kit source.

Public promotion should use this site, the public demos, and the public Mimris source link. Do not publish the private Mimris AI Workspace source repository until the owner changes its visibility.

## Local Preview

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8765
```

Then open `http://127.0.0.1:8765`.
