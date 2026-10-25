# Revision 24 — ISTA Photo & Charles Film Layout

Starting point: complete Revision 23 with correct October 25 reel and all prior ISTA changes.

- Corrected Charles Ward / Why I Joined ISTA widescreen MP4: full 16:9 ratio inside a correctly proportioned player on desktop and mobile. Removed a portrait-only CSS selector accidentally applying to all ISTA local videos.
- Removed unintended narrow, left-aligned Charles film layout across Editorial, Gallery, and Index display modes; centered it within a wide content region on desktop.
- Promoted Statehouse protest photography to full-width editorial lead image (Red for Ed 02) plus companion protest images and assembly photograph.
- Kept six event portraits in a smaller, horizontally scrollable gallery as a secondary section on desktop and mobile.
- Bumped CSS versions to `v=24` for cache invalidation.

Run `npm run build` to regenerate dist. To deploy, publish the **contents** of `dist/` to a static site host.
