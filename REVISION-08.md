# Bryan Boyd — Revision 08

October 24, 2026 · Local review build; not deployed.

## Navigation
- Removed **Play reel** and **Threads** from the site-wide header, including mobile navigation.
- The existing reel remains available from the homepage hero, Work page, and other site interactions. The Threads page remains accessible through the homepage experiences and its direct URL.

## Visual adjustments
- Replaced the site-wide diagonal link-arrow glyph with a custom **offset registration arrow** (`public/icons/offset-arrow.svg`). It remains arrow-shaped, works across Display palettes, and respects up/down/left directions where used.
- Reframed the **Who Gets Heard?** Gallery card with the speaker’s head and microphone in view.
- Replaced the Work page’s close John Mellencamp frame with the wide studio shot showing the cigarette. The image retains its original aspect ratio; the standalone Cinematography page is unchanged.
- Reduced and rebuilt the homepage **Play Reel** button, especially on mobile (consistent icon, label and duration).
- Both desktop and mobile now begin on the same **The Waiting Game** basketball mural/billboard still. The alternate interview still remains available through **Another take**.
- Corrected an inherited Gallery heading overflow on wide desktops.

## Verified
- Built 16 routes / 46 indexed records; existing images and Index assignments unchanged.
- Rechecked 320, 390, 768, 1024 and 1440px for horizontal overflow in Editorial, Gallery and Index, on Home and Work. None found.
- Verified new source image paths, HTML navigation, reel trigger attributes, and the unchanged GA4 ID `G-XTPLG9LX0Y` in all 16 generated pages.
- Standalone camera credits and the new V7 Work subsection retained.

## Run locally

```bash
npm run preview
```

Open `http://localhost:4173`. Run `npm run build` first after editing source files. No `npm install` required.
