# Revision 12 — Index image matching

Date: October 24, 2026

## Scope

This revision changes only the Index credit-photo mapping and the presentation of imported images in its thumbnail/preview areas. No other website copy, credits, navigation, project pages, hero imagery, Display controls, or existing images were intentionally changed.

- Matched 27 submitted stills to exact credits already present in `src/data/credits.json`.
- Added 26 optimized WebP images in `public/images/index/`. The Kyle Larson promotional image was already in the existing gallery and was not duplicated.
- Preserved the three existing image galleries for Steve Cropper, The Sugarman, and Kyle Larson, including their ordering.
- The imported images appear in the Index contact-sheet view, preview, and expanded credit details.
- Added uncropped `object-fit: contain` treatment to imported frames in the contact sheet/side preview. Original stills remain unmodified, and the images show without forced zoom/crop.
- Increased cache-busting stylesheet revision numbers from 11 to 12.
- Preserved the original GA4 measurement ID `G-XTPLG9LX0Y` and the existing eye symbol.

## Mappings and follow-up

- `INDEX-IMAGE-CATALOG.csv`: exact filename → credit mappings, with status and confidence.
- `INDEX-CREDIT-COVERAGE.csv`: full 43-record coverage spreadsheet for later Index image batches.
- `src/data/index-images.json`: source of truth for the Index gallery image assignments.

All 27 filename matches are direct or clearly identified by the visuals. No user-supplied files were reassigned to unrelated credits. Full credit text and roles were preserved.

## Build and verification

`npm run build` succeeds (16 routes / 46 indexed records, including three independent/additional work records). The internal-link checker reports no broken internal paths. Full live visual browser verification was unavailable in the current test environment (local browser navigation blocked by administrator), so review the contact-sheet layout in your local preview before publishing.

Run with `npm run preview` (http://localhost:4173). For development changes, run `npm run build` before previewing.
