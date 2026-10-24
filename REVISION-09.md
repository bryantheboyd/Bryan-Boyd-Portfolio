# Revision 09 — Side-eye navigation mark

- Replaced the previous arrow system with the user's **exact uploaded** `side-eye-currentcolor.svg`, installed at `public/icons/side-eye.svg`.
- The eye inherits `currentColor` through a CSS mask, so it adapts to Paper, Night, Field, Signal, and contrasting card backgrounds without separate icon versions.
- Updated linked labels, the wordmark mark, footer, Contact, archive, interactive project pages, channel controls, decorative heading marks, link previews and random/refresh controls.
- Where back navigation previously used a left arrow, the eye is mirrored horizontally; for vertical actions, the eye remains upright alongside explicit labels such as “TOP” and “KEEP GOING”.
- Replaced all visible Unicode arrow glyphs in generated HTML, removed the old offset-arrow asset, and retained all page content and media.
- No changes to site architecture, Index image assignments, display settings or Google Analytics measurement ID.

## Checks

- `npm run build`: 16 pages, 46 indexed records.
- `python link_check.py`: no missing internal route/media paths.
- Static generated-HTML inspection: no surviving Unicode arrow characters in any generated HTML page.
- Generated pages reference the same side-eye icon through shared styles.
- Visual browser screenshots could not be performed in this runtime due to the browser's navigation restriction. Review desktop/mobile locally before deployment.

## Preview

```bash
npm run preview
```

Then visit `http://localhost:4173`.
