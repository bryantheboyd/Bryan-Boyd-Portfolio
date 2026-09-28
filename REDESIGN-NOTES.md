# Redesign notes — September 28, 2026

## Visual identity

An editing room with a few things left running. Hard white and black, acid yellow, signal red and electric blue replace the cream, rust and serif system. Anton supplies blunt, oversized display type; Archivo keeps the records readable. Images interrupt the typography, project tiles sit at uneven scales, and the work supplies the visual material.

The homepage behaves like a small three-channel station. Visitors cut between documentary, public life and synthetic images; each has alternate stills and a direct way into the project. Nothing changes automatically or plays unsolicited sound. The controls are literal and keyboard accessible.

Three threads link the projects through voice, evidence and collective action. The index supports hovering, native credit disclosures, a contact-sheet view and a random record. Random picks respect the current search/filter and avoid repeating the previous selection when alternatives exist. Contact becomes a film end card with a useful email action.

Each project has its own environment: electric-blue film typography for The Waiting Game, black/red production records for Netflix, a giant overlapping year for Google, red type for The Wall Street Journal, a public-facing photo essay for ISTA, and a dark evidence viewer for Endless Coronet. The Coronet selector keeps each supplied image paired with its actual examination plate. The film press clippings open as a small footnote.

The navigation, roles, project facts, CV and contact address stay directly reachable. The weirdness lives in composition, discovery and juxtaposition. No invented anecdotes, fabricated production stills or decorative error states were added.

## Preserved

All 42 original credits and their role/client/collaborator metadata (with the user-requested Google Year in Search 2020 title correction); original site routes; contact address; CV; desktop/mobile reel derivatives; press links; original Endless Coronet wall text and artist statement; recognition data; domain, GA4 ID and build/deployment architecture.

No unverified project dates or roles were added. New catalogue numbers indicate display order, not production chronology.

## New assets and sources

- The supplied reel supplies the opening and contact-sheet frames. Generic reel images are labeled as reel fragments rather than assigned to unrelated productions.
- `title-frame.jpg`, `aba-ball.jpg`, and `interview.jpg` come from the newly supplied Waiting Game screenshots/still.
- Supplied ISTA event photographs populate the homepage and photography essay.
- The Advocate cover and pages 8–9 use the provided Fall 2025 pages. The supplied contents page is also retained in the asset folder.
- The three Members in Action 2026 contact sheets were extracted from the supplied PDF and optimized for the web. The documented shoot date is September 22–23, 2026.
- The September 2026 ISTA digital-media deck informs public-facing descriptions and the two campaign examples. Platform metrics are named separately and dated. The internal briefing PDF and its internal staffing, workflow and approval discussions are not included in the public site.
- The user requested replacement of all Endless Coronet imagery. The new set is used throughout, including project metadata and archive previews. Pairings: exposure 335 ↔ `23795da8…webp`; 337 ↔ `6766e989…webp`; 347 ↔ `d384df69…webp`; 354 ↔ `f89c3bfb…webp`; 374 ↔ `4be829dc…webp`. All five corresponding full PNG archive plates are included and can be enlarged.
- Anton and Archivo font license notices are included in `public/fonts/` and copied to the build. The former Bodoni Moda fonts are no longer used.

The public site uses real supplied material; no generated portfolio photography or invented campaign artifacts were added.

## Future editorial additions

The short Wall Street Journal record can accommodate its film link and production stills when supplied. More personal production notes, scans and behind-the-scenes images can extend the archive without changing its structure. These are optional additions; there are no visible placeholder boxes or unfinished routes.

## Approved additions — September 28

The uploaded `TWG Boyd Website Edit.mp4` provides fresh 1920×1080 stills: the group gathering at 00:36, the mural at 01:00, and an interview at 00:44. These replace the low-resolution Bob Costas opening and alternate imagery. The entire 75-second edit is included as **The Waiting Game Trailer**, re-encoded for web playback. No external Waiting Game film-site link remains.

The supplied reel provides the Orgasm Inc. title at 01:35 and Reunited imagery at 01:38 and 01:42. Reunited is now a homepage feature and a seventh featured project, with Bryan’s directing credit explicitly limited to Season 1 Episodes 3 and 6. Archive thumbnails map to the correct Netflix production.

Google Year in Search 2020 embeds `rokGy0huYEA`; the WSJ piece embeds `Xes6ZgV1Iww`. Both retain a direct YouTube fallback link.

## Latest refinements

The Waiting Game homepage opening, project card, archive image and social previews now use the interview still shown in “And a fair share.” The supplied September 28, 3:38 PM court/title screenshot is the trailer’s poster image. Reunited follows “Take the Long Way” on the homepage. The ISTA campaign examples now embed the supplied School Funding Explainer (starting at 00:09, matching the supplied link) and Why I Joined ISTA video, each beside its corresponding campaign description.

The Room refinements: Google’s year, frame and credit now occupy separate layout rows, including wide desktop screens. The Ransomware card includes Bryan’s supplied 3:51 PM screenshot in full beneath its red title panel. The same image supplies the project’s archive thumbnail and social preview.

The favicon is a custom BB vector monogram in acid yellow on black. Its versioned URL refreshes the previous cached icon. Room card layouts were checked at 320, 390, 768, 1024, 1440, 1920 and 2560 pixels.
