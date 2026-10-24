# Revision 19 — Mobile repair and whole-site formatting audit

**October 24, 2026** · Based on the complete Revision 18 ZIP. This update keeps the site's content, project order, design choices, original assets, tracking ID, and build system intact.

## Critical root cause and repair

A missing `}` in `src/styles/atelier.css` directly after the `@media(hover:hover)` link animation (originally near line 786) caused **all subsequent CSS rules to be parsed as part of a hover-only query**. Desktop browsers with a mouse applied those rules, but most touch-based browsers did not. This silently disabled hundreds of lines of later styling, including the ISTA strategy and Cinematography refinements from Revisions 14–18. The missing brace is restored. Existing rules now apply normally to touch devices.

## Responsive follow-through

- **ISTA:** The “My goal is to / win attention” strategy section again receives its intended heading, serif contrast, paragraphs, section spacing, and results hierarchy on phones. The section navigation is horizontally swipeable on small screens with **44px minimum-height tap targets** and touch scrolling/snap behavior.
- **Cinematography:** The mobile photographic chapter layouts now apply through **1023px** rather than ending at 760px; 768px/900px tablets no longer inherit cramped two-column film captions or oversize headings. The existing responsive work from Revision 18 is preserved and made operative on touch screens.
- **Homepage:** More flexible Gallery-mode thread cards at tablet widths prevent the alternate composition from pushing the page sideways or truncating labels.
- **Other small-screen fixes:** Scaled the Recognition heading on About, adjusted Wall Street Journal project title typography at narrow widths (including Gallery mode), reduced desktop-width Reunited title clipping, and refined the tiny Endless Coronet exposure picker labels.
- **Cache invalidation:** Regenerated all pages with `?v=19` for CSS files, so browsers do not reuse the broken Revision 18 stylesheet.

## Quality assurance performed

- Rebuilt successfully using `npm run build`: **16 pages**, **46 index records**, **3 threads**, **3 channels**, and a regenerated 404 page.
- `python link_check.py`: **696 internal asset/page paths checked, 0 broken**.
- Independent hash-fragment target audit: **51 internal anchor links checked, 0 missing targets**.
- Image integrity audit (Pillow): **127 original images checked, 0 failures**.
- Media metadata: **9 local MP4 files** inspected with `ffprobe` (H.264 video streams identified).
- CSS parser check: **zero top-level parse errors** across all four stylesheets and balanced braces.
- Layout sweep: **16 pages × 8 widths (320, 375, 390, 600, 768, 900, 1024, 1440px) × 3 Display combinations = 384 tests**. No document-level horizontal overflow observed after the changes. Deliberately scrollable ISTA image-strip and section-index contents are allowed to extend *inside* their scroll containers; the hidden accessible homepage heading is intentionally visually clipped.
- Rendered detailed photographic previews of ISTA and Cinematography at 320, 390, 768, 900, and 1024px, including titles, strategy, press lists, features, and film chapters.
- Chromium functional spot checks: mobile menu open/Escape close, Display open/change/close, channel preset change, archive search/empty/reset/contact sheet, Endless Coronet exposure switch, and reel/contact/random dialogs opening and closing with Escape. No JavaScript exceptions observed in these spot checks.

## Verification boundaries

This environment blocks Chromium's HTTP navigation (including localhost), so visual and interaction checks used the **actual generated HTML with locally inlined CSS/scripts/photographs**. This is a meaningful Chromium rendering and JavaScript test, but not an end-to-end HTTP/live-host test. Because web fonts are imported from Google, offline screenshots can use fallback fonts, which may differ slightly from the deployed appearance.

Before publishing, test the uploaded site on a real phone (Safari iOS and Chrome Android where available) and verify YouTube embeds, video playback/seek, remote outbound links, GA4 collection, and Google Fonts loaded normally. Those external services and browser-specific behaviors cannot be certified by a static/offline audit. No hosting deployment or GitHub push was performed.

## Apply the release

If using the full ZIP: replace the website files while preserving your repository's `.git`, run `npm run build`, and deploy with Vercel (Framework: Other, Build: `npm run build`, Output: `dist`). The ZIP already includes the compiled `dist` site.

If using the small **Revision 19 patch** instead: copy its contents over the Revision 18 website folder (preserving relative paths). The patch contains the edited source, documentation, and regenerated HTML/CSS; the old assets remain in place. Run `npm run build` afterward if working in a source repository.
