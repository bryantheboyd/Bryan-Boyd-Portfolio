# Bryan Boyd / Revision 06 — Camera Work & Index Images

October 23, 2026. Review build, not deployed.

## New Cinematography page

Route: `/cinematography/` (also linked as **Camera** in the navigation and from Work and the footer).

- **Kyle Larson vs. The Double** — Sony VENICE operator. Prime Video documentary artwork and supplied production frames. Distinct from the pre-existing *Kyle Larson Indy 500 Orientation in IMAX* credit; these have not been merged or assumed to be the same job.
- **Steve Cropper: On the Record** — DOP for the John Mellencamp interview, with two interview frames and the supplied film poster.
- **The Sugarman** — DOP / Editor, with supplied black-and-white interview frames and poster.
- Compact equipment / crew experience: Sony VENICE, ARRI ALEXA, RED, and camera-department teams. This is experience provided by Bryan Boyd, not a list of per-production verified kit assignments.

Original content, analytics ID `G-XTPLG9LX0Y`, favicon, Display panel, and earlier project pages remain intact.

## Index imagery

`src/data/index-images.json` is the source of truth for matched media. Keys **must equal the exact title** in `src/data/credits.json` (or another canonical Index record). Every entry contains one or more image objects with:

```json
{
  "Steve Cropper: On the Record": [
    {"src": "/images/camera/mellencamp-close.webp", "alt": "John Mellencamp interview", "caption": "John Mellencamp interview"}
  ]
}
```

The first image is the cover in the contact sheet, hover preview and random record. Additional images appear when that record expands. Any record without a match keeps its existing project image or its current typographic fallback.

Eleven supplied named images were matched to three confidently identified credits (details in `INDEX-IMAGE-CATALOG.csv`). The inline-only image batch from the subsequent message was not available as named files for programmatic insertion; do not claim it has been matched. Please supply those images as files or a ZIP for a future batch. Images have not been attached to unrelated credits based on visual similarity alone.

## Ongoing additions

1. Place optimized pictures in `public/images/index/` (or another logical folder under `public/images/`).
2. Add an exact credit-title key to `src/data/index-images.json` with objects for each image. The first object becomes the thumbnail. In an existing key, append rather than replace when preserving an earlier still.
3. Run `npm run build`. No page-template changes are required for future batches.
4. Open `/index/?view=sheet` for image review, and click a record to examine its additional stills. Match uncertain images to a pending list until verified.

See `INDEX-IMAGE-CATALOG.csv` for all canonical credits, media coverage, and filenames. Use the status column to track progress, not as a statement about who owns the underlying photo copyright.

## Checks

- Build: **16 routes, 46 Index records**, plus 404.
- Local links/assets: **0 broken among 673 checked internal references**.
- Cinematography / Index / Work / About widths: 390, 768, 1440; no horizontal overflow in tested default views.
- Verified image galleries attached to all three designated credits, with primary thumbnails in the Index contact sheet.
- Corrected mobile title wrapping and Index card hover contrast.

The changes have not been deployed. External streaming, browser analytics receipt, all palette/layout combinations, and photo rights/attributions still merit review before publishing.
