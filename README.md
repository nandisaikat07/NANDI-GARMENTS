# Nandi Garments - Static Website

This is a simple static website for Nandi Garments (demo).

Files added:
- `index.html` — main page
- `styles.css` — styles
- `script.js` — product rendering and demo interactions

How to view locally:

1. Open `index.html` in your browser (double-click).
2. Or serve via a simple HTTP server (recommended for some browsers):

```
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Next steps I can help with:
- Add real product images and prices
- Hook contact form to email or WhatsApp
- Deploy to GitHub Pages or Netlify

Contact configuration
- Email: nandisaikat.2002@gmail.com
- Phone: 8250530293
- WhatsApp: 8250530293 (use international format in `script.js`: `918250530293`)
- GitHub: https://github.com/nandisaikat07

- The `script.js` constants `CONTACT_EMAIL` and `WHATSAPP_NUMBER` are already set to these values.

Deploying
- GitHub Pages: push this folder to a GitHub repository. The workflow in `.github/workflows/deploy.yml` will publish the site on push to `main`/`master` using the repository's `GITHUB_TOKEN`. After first deploy, enable Pages to serve from `gh-pages` branch in the repository settings.
- Netlify: connect the repository to Netlify and set the publish directory to the repository root. A `netlify.toml` file is included for basic configuration.

If you want, I can set these values for you (email/number) and help you connect the repo to Netlify or GitHub.
