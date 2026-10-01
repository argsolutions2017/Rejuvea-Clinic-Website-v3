# Rejuvea Skin & Hair Clinic Website — V3

Static, Cloudflare-friendly clinic website created by adapting the same lightweight HTML/CSS/JavaScript approach used for the Gajanan Hospital website.

## Included

- `index.html` — responsive one-page clinic website
- `styles.css` — bright blush/rose/peach/green design system
- `script.js` — mobile navigation, scroll reveal, appointment-to-WhatsApp flow
- `privacy.html` — basic website privacy notice
- `robots.txt`
- `sitemap.xml`
- `_headers` — suggested Cloudflare Pages/Workers static security/cache headers
- `assets/rejuvea-logo.webp`
- `assets/doctor-placeholder.svg` — intentionally kept as a placeholder
- `assets/hero-visual.svg`
- `assets/og-image.jpg`
- `assets/favicon.png`

## Clinic information used

- Clinic: Rejuvea Skin & Hair Clinic | Diet & Nutrition Center
- Doctor: Dr. Priyanka G. Shirbhate
- Phone: +91 98342 22352
- Address: Jamb Road, near Vidya Vihar, Yavatmal – 445001
- Timings: 10:00 AM–2:00 PM and 5:00 PM–9:00 PM
- Doctor registration number is intentionally NOT displayed anywhere.

## Before production deployment

1. Replace `assets/doctor-placeholder.svg` with the doctor's approved photograph.
2. Confirm spelling of all degrees/qualifications with the doctor.
3. Confirm exact clinic address and operating days.
4. Confirm the final domain.
5. Update:
   - canonical URL in `index.html`
   - `og:url` and absolute `og:image`
   - JSON-LD `url`
   - `sitemap.xml`
   - `robots.txt` Sitemap line
6. Review treatment/service wording with the doctor before publishing.
7. If you add analytics, cookies, online payment, patient records, report uploads, or stored appointment data, update the privacy/compliance design accordingly.

## Local preview

Open `index.html` directly or run a local server:

```bash
python -m http.server 8080
```

Then browse to `http://localhost:8080`.

## Cloudflare deployment

This project is suitable for static deployment on Cloudflare Pages or Workers Static Assets. No database is required for the current version.


## V2 corrections
- Corrected doctor qualification to `Diet & Nutrition (AIAY, Punjab)`.
- Doctor registration number remains completely excluded from the website.
- Replaced the illustrated doctor pseudo-photo with a genuine photo placeholder.
- Changed concern/procedure tiles from acronym-heavy badges to cleaner symbols.
- Changed procedure wording to `Dandruff Removal`.
- Expanded the PRP label to `PRP (Platelet-Rich Plasma)`.
- Added `Diet & Nutrition Center` visibly with the header brand.
- Adjusted key section headings to better match the approved homepage concept.


## V3 improvements
- Mobile hamburger menu now closes after selecting any menu item.
- Mobile hamburger menu also closes when clicking outside the menu, pressing Escape, or resizing to desktop.
- Hamburger icon animates into a close icon while the menu is open.
- Header logo now reliably returns to `index.html#home`.
- Footer brand/logo is also clickable and returns to the main page.
- Added `Certified Yoga Consultant` to Dr. Priyanka G. Shirbhate's qualifications.


## Latest V3 update
- Dr. Priyanka G. Shirbhate photo added to the About Doctor section.
- Doctor image optimized to WebP for faster Cloudflare delivery.


## Production SEO update — rejuveawellness.com
- Canonical homepage: `https://rejuveawellness.com/`
- Canonical privacy page: `https://rejuveawellness.com/privacy.html`
- Open Graph URL and social image updated to production URLs.
- Twitter image updated to the production URL.
- JSON-LD `url` and `image` updated to production URLs.
- Google Maps / Get Directions links updated to the confirmed Rejuvea Skin & Hair Clinic location.
- `robots.txt` points to `https://rejuveawellness.com/sitemap.xml`.
- `sitemap.xml` now contains the production URLs.
