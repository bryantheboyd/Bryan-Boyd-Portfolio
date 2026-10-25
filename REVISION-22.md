# Revision 22 — Updated Filmmaking Reel

## Changes
- Replaced the previously featured 02:18 reel with the newly supplied 4K source, encoded into two browser-friendly H.264/AAC MP4 versions for desktop and mobile.
- Updated the shared reel modal, which is used on Home, Work, Reunited, and The Point pages, to select the new mobile and desktop files.
- Updated the non-JavaScript fallback links on Home and The Point to the new desktop reel file.
- Generated a new poster image from the uploaded footage for the reel modal.
- Changed reel asset filenames and bumped the site JavaScript version to prevent cached older video and JS files from persisting.
- Existing on-page 02:18 duration labels remain correct: the new file is 138.138 seconds.
- Left the underlying page layouts, ISTA additions, and other work untouched.

## Deployment
- Deploy the `dist` directory to your web host. The full download includes both `src` and `dist`.
- MP4 delivery should support HTTP byte-range requests to enable seeking on mobile. Verify in Safari and Chrome after deployment.
- The original user-supplied 4K source is not included in the site zip; it was used as the encoding master.
