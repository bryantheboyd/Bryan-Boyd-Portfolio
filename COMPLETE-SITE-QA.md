# Complete Revision 23 — Verification

This complete release combines the final Revision 21 ISTA page and definitive Revision 23 reel over the Revision 20 responsive fixes. It does **not** require any earlier archives or patches.

## Included in the ZIP
- `src/` editable templates and data
- `public/` all deployable images, fonts, PDFs, and self-hosted video
- `dist/` fully built, ready-to-deploy static site
- `scripts/` build and preview tools, `package.json`, project documentation

## Changes included
- 6 swipeable ISTA portrait images, including the 3 user-supplied additions.
- Only 1 Washington Township referendum video, at top, with member influencer Alyssa description.
- School Funding Explainer and Charles's ISTA membership testimonial embedded as local MP4 with uploaded poster art, no YouTube player.
- Definitive reel uses `BOYD_REEL_10.25.2026.mp4` source, encoded as v23 desktop/mobile streaming files, v23 preview poster, all shared modal entry points.
- Revision 19/20 responsive and touch-highlight styling preserved.

## Testing
- `npm run build`: 16 pages / 46 records / 3 threads / 3 channels.
- `python link_check.py`: 705 internal file links/assets checked, 0 broken.
- ISTA content tests: 6 portrait images; 1 referendum; member-influencer copy present; 2 local film sources present; public/dist media identical.
- Local ISTA film encodes: H.264/AAC, 1920x1080, complete durations 220.096s and 40.960s; spot-decoded end of each MP4.
- Reel files: v23 desktop/mobile present, poster and player references present in four reel-enabled pages.

## Limits
- No live-domain deployment or real iOS Safari test has been performed in this release.
- Original 4K upload masters are not duplicated in the site package; the included playback files are optimized for hosting.
