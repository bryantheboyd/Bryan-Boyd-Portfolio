# Revision 15 — mobile typography and Cinematography header

Based on Revision 14. Changes are limited to the two requested formatting issues.

## ISTA strategy
- Rebuilt the “My goal is to / win attention.” heading as separate elements, with predictable line height and an explicit interline gap.
- Improved mobile spacing between the headline, paragraph, results heading, supporting paragraph, and contact link.
- Preserved all copy, imagery, performance language, and section links.

## Cinematography
- Removed the oversized decorative asterisk/boxed-green-star glyph from the opening entirely.
- Preserved the page's projects, frames, Golden Hour press links, and typography.

## Cache and QA
- Changed stylesheet cache query strings from `v=14` to `v=15` to refresh mobile CSS after deployment.
- Static build: `npm run build` passed (16 pages, 46 records).
- Internal-link test: `python link_check.py` passed (0 missing internal paths).
- Rendered the modified sections with the actual site styles (inlined to avoid the sandbox's localhost navigation restriction). Checked 320, 375, 390, 430, 768, and 1440px screenshots.
- Checked ISTA section at 5 widths, 4 themes, 3 type treatments, 3 layouts (180 combinations): no horizontal overflow or text overlap.
- Visual rendering of the complete site at its deployed URL is still unverified. This is a review build.

## Run
From the `bryan-boyd-website` directory: `npm run preview`, then visit `http://localhost:4173/work/ista/` or `http://localhost:4173/cinematography/`.
