# Revision 18 — Mobile Cinematography Re-layout

October 24, 2026

This is a mobile-only presentation revision, based on V17. All project credits, film order, photographs, press links, award references, analytics, navigation, and the visitor Display settings remain in place.

## Changes
- Rebuilt the mobile hierarchy for the **entire Cinematography page**, rather than tweaking individual font sizes.
- Reduced desktop-sized titles; added consistent chapter-label, heading, body-copy, and metadata spacing.
- Reframed the *Golden Hour* opening as a properly spaced introduction above its imagery, followed by a clean press index.
- Removed stacked offsets and rotated frames on mobile, displaying complete original image proportions with even captions and gutters.
- Brought *The Sugarman*, *On the Record*, *Absolution*, *Kyle Larson vs. The Double*, and camera-system sections into the same mobile editorial rhythm.
- Kept the desktop page unchanged.
- Bumped CSS query versions to `v=18` to discourage stale cache after deployment.

## Validation
- `npm run build`: 16 pages and 46 index records.
- `python link_check.py`: 696 internal paths checked, none broken.
- Chromium render via local inline HTML/assets at widths 320, 390, 768, 1440. Representative screenshots saved with revision's QA files.
- 252 combinations of viewport, theme, typography, and layout checked for horizontal overflow: **zero**. 
- **Limitation:** Browser navigation to local HTTP resources was blocked in this environment, so screenshots were produced with locally inlined HTML, CSS, and images. This is not a live deployment test.
