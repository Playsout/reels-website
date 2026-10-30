# ReelsBuddy Website

Static, dependency-light implementation of the approved ReelsBuddy site concept.
It targets `https://reels.playsout.com`.

## Run Locally

From this directory:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`.

There is no frontend bundling step. For a deployable package, run:

```powershell
pwsh -NoProfile -File .\build-release.ps1
```

This writes the web root to `dist/reelsbuddy-site-YYYYMMDD/`, together with a
ZIP archive and SHA-256 checksum. Upload the contents of the release directory
to the web root, or deploy the ZIP through your hosting provider.

## Configure Downloads

Add the signed production installer URLs in `site-config.js`:

```js
window.REELSBUDDY_SITE_CONFIG = {
  downloads: {
    macAppleSilicon: "https://.../ReelsBuddy-arm64.dmg",
    macIntel: "https://.../ReelsBuddy-x64.dmg",
    windows: "https://.../ReelsBuddy-Setup.exe"
  }
};
```

While a URL is empty, the matching download button shows a localized
availability message rather than linking to a broken file.

## Languages

- `/` opens in English.
- `/?lang=zh` opens in Simplified Chinese.
- The language switch updates the URL and stores the preference locally.
- Language-specific metadata and accessible labels are updated client-side.

## Files

- `index.html`: production homepage.
- `styles.css`: homepage design system and responsive layout.
- `app.js`: language state, tabs, canvas interactions, navigation and download UI.
- `site-config.js`: deployment-owned download URLs.
- `privacy.html` / `terms.html`: starter legal pages in English and Chinese.
- `legal.css` / `legal.js`: legal page presentation and language switching.
- `assets/manrope-latin.woff2`: self-hosted Latin display font.
- `assets/reelsbuddy-icon.png`: current app icon and favicon.
- `assets/og-reelsbuddy.jpg`: optimized 1200x630 social sharing card.
- `assets/icons.svg`: a small sprite containing only the Lucide icons used by
  the site.
- `_headers`: cache and security defaults for Netlify or Cloudflare Pages.
- `deploy/nginx.conf.example`: self-hosted Nginx baseline with gzip and cache
  policy.

## Hosting Notes

Recommended cache policy:

- `index.html`, `privacy.html`, `terms.html`: short cache or revalidate.
- `styles.css`, `app.js`, `legal.css`, `legal.js`: short cache while iterating.
- `assets/*`: long cache with content hashing or deployment
  versioning.

Serve the directory over HTTPS and gzip or Brotli text assets.

## Performance

- No framework runtime and no third-party network requests.
- Icons are shipped as a 3.4KB local SVG sprite containing only the symbols
  used by the page.
- The header uses a 96px logo asset instead of the 1024px source icon.
- Manrope is self-hosted and preloaded.
- HTML, CSS and JavaScript compress well with Brotli. Keep Brotli enabled for
  HTML, CSS, JavaScript and SVG on the production host.
- Do not add a full icon library back to the page for one or two new icons;
  extend `assets/icons.svg` instead.
- The production page can run under a self-only CSP. Inline style attributes
  were removed; the only inline script is the hashed JSON-LD block on the home
  page.

Local lab baseline on the bundled Python server at 1440px:

- 7 transfer requests
- about 130KB uncompressed transfer
- LCP about 400ms
- CLS 0

These are local lab numbers, not production field metrics. Re-run Lighthouse
against the deployed HTTPS host after enabling Brotli.

## Accessibility

The homepage, privacy page and terms page were audited with axe-core against
WCAG 2.0/2.1/2.2 A and AA at 1440px and 390px in both English and Simplified
Chinese. The final matrix reported zero violations.

## Launch Checklist

- Replace the starter legal copy with counsel-reviewed policy text.
- Add real installer URLs in `site-config.js`.
- Replace illustrated media cards with approved product footage when available.
- Confirm Playsout branding, copyright and company contact details.
- Add analytics only after a privacy decision and consent strategy are approved.
- Verify `og:image` with the final social sharing asset.
