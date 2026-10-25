# Revision 23 — Corrected Reel Master

**Definitive source supplied:** `BOYD_REEL_10.25.2026.mp4`.

This supersedes the reel from Revision 22. The web video, mobile video, and modal poster are regenerated exclusively from the corrected upload.

## Included changes
- Replace shared reel modal source with `/video/bryan-boyd-reel-web-v23.mp4` (desktop) and `/video/bryan-boyd-reel-mobile-v23.mp4` (mobile).
- Update the poster to `/images/frames/bryan-boyd-reel-v23-poster.jpg`.
- Update no-JavaScript fallback links in Home and The Point.
- Bust cached site JavaScript using `?v=23` so users receive the new reel references.
- All reel buttons continue to open the same shared player. Duration labels remain `02:18`.
- Preserve all previous Revision 21 ISTA edits and Revision 20 mobile corrections.

## Deployment
Apply the Revision 23 patch at the root of a Revision 22 site tree, overwriting matching paths, or deploy the standalone Revision 23 deployment archive directly.
Older v22 reel files can be deleted after installing the patch. They are deliberately absent from the full Revision 23 site archive.

## Download options
- **Revision 23 patch:** targeted replacement files, applied over a Revision 22 website folder.
- **Revision 23 complete source:** the entire editable site including public media, but without the regenerated `dist/`; run `npm run build`.
- **Revision 23 deploy-ready build:** the complete `dist/` folder, which can be uploaded to static hosting as-is.
