# ReelsBuddy Website

Static, dependency-light implementation of the ReelsBuddy Cut Room site concept.
It targets `https://reels.playsout.com` and clearly labels all currently
illustrated media as concept previews.

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

If `deploy/` exists, its hosting examples are included in the release; it is
optional for providers that use the included `_headers` file.

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
- `assets/noto-sans-sc-subset.woff2`: Chinese page-copy subset of Noto Sans SC.
- `assets/OFL-noto-sans-sc.txt`: license for the subsetted Noto Sans SC font.
- `assets/reelsbuddy-icon.png`: current app icon and favicon. The website header
  uses a wordmark-only lockup until the brand mark is final.
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
Serve MP4 files with HTTP Range support so the player progress control can
seek. Python's built-in `http.server` does not implement byte ranges; use a
Range-capable static server when testing seeking locally.

## Performance

- No framework runtime and no third-party network requests.
- Icons are shipped as a 3.4KB local SVG sprite containing only the symbols
  used by the page.
- The header uses a 96px logo asset instead of the 1024px source icon.
- Manrope and the Noto Sans SC page subset are self-hosted and preloaded.
- HTML, CSS and JavaScript compress well with Brotli. Keep Brotli enabled for
  HTML, CSS, JavaScript and SVG on the production host.
- Do not add a full icon library back to the page for one or two new icons;
  extend `assets/icons.svg` instead.
- The production page can run under a self-only CSP. Inline style attributes
  were removed; the only inline script is the hashed JSON-LD block on the home
  page.

Re-run Lighthouse against the deployed HTTPS host after enabling Brotli. The
Chinese font is a page-copy subset, not the full Noto Sans SC family.

## Accessibility

The revised homepage was audited with axe-core 4.11 against WCAG 2.0/2.1/2.2 A
and AA at 1440px and 390px in both English and Simplified Chinese. The final
matrix reported zero violations. Responsive checks at 320px, 390px, 768px and
1440px reported no horizontal overflow.

## Launch Checklist

- Replace the starter legal copy with counsel-reviewed policy text.
- Add real installer URLs in `site-config.js`.
- Replace illustrated media cards with approved product footage when available.
- Confirm Playsout branding, copyright and company contact details.
- Add analytics only after a privacy decision and consent strategy are approved.
- Verify `og:image` with the final social sharing asset.
