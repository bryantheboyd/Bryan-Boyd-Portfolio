# Revision 14 — Golden Hour / camera work

## Work page
- Changed the Camera Work gallery so **The Sugarman** is the lead, full-width image. The primary image is the original monochrome interview portrait.
- Kept **Kyle Larson vs. The Double**, using the existing Sony VENICE operator credit.
- Added a frame from **Golden Hour** (the sunset embrace).
- Retained the requested wide John Mellencamp interview still.
- Kept Cinematography as a secondary section under Work; no camera link was added to top navigation.

## Cinematography page
- Featured **Golden Hour** at the top: DOP credit, project context, wide sunset frame and two contrasting stills.
- Included a visual clipping from the user-supplied MovieMaker screenshot, linking directly to the article.
- Linked the two MovieMaker features and independent coverage by Macabre Daily, the Cleveland International Film Festival credit listing, and Festival Formula's 2024 roundup.
- Preserved the existing Larson, Cropper/Mellencamp, and Sugarman features and their credits; renumbered the sections to accommodate the new lead.

## Sources verified
- MovieMaker, October 25, 2024: https://www.moviemaker.com/golden-hour-maureen-mcely/
- MovieMaker, February 19, 2025: https://www.moviemaker.com/making-a-film-respect-peoples-time/
- Cleveland International Film Festival film/crew record: https://www.clevelandfilm.org/films/golden-hour-2025/
- Macabre Daily festival coverage: https://www.macabredaily.com/articles/access-horror-film-festival-uplifts-as-much-as-it-terrifies-event-recap
- Festival Formula's Best of 2024: https://bird-parsnip-hmg9.squarespace.com/insight/best-of-2024

## QA
- Source build: `npm run build` passes, generating 16 pages / 46 index records.
- Local link/asset check: `python link_check.py` passes, zero broken internal paths.
- New imagery exported to optimized webp under `public/images/golden-hour/`; supplied originals not overwritten.
- No changes to navigation, Index mappings, Google Analytics measurement ID, or Display settings logic.
- Browser screenshot test **not completed**: the sandbox browser blocks navigation (ERR_BLOCKED_BY_ADMINISTRATOR), including localhost and file URLs. Review Work and Cinematography at desktop and phone widths before live deployment.

## Run
`npm run preview` and open `http://localhost:4173/work/` or `http://localhost:4173/cinematography/`.

Deploy the contents of `dist/` to update the live website. The HTML requests `atelier.css?v=14` and other `v=14` CSS assets to refresh browser caches.
