# Mobile experience review — September 28, 2026

The desktop editing room remains intact. Phones now use their own composition, navigation, and reading scale. The breakpoint is 900 pixels; small tablets use two columns where those columns remain useful.

## Findings and changes

| Area | What was failing | What changed |
| --- | --- | --- |
| Navigation | Tiny links and a contact button as short as 26 pixels; navigation disappeared after scrolling. | A compact sticky header with a labeled Menu button, readable links, and 48–52 pixel controls. The menu supports Escape, outside clicks, keyboard focus, and orientation changes. |
| Homepage | A desktop image/text overlay, oversized type, and unlabeled numeric channel controls competed for a small screen. | Image, title, project link, and controls occupy separate rows. Channels are labeled Film, Public life, and Art. The page grows with its content instead of forcing a viewport height. |
| The Room | Inconsistent widths, rotations, crops, and fixed heights made the project sequence hard to scan. | Full-width phone cards consistently show record, title, image, and role. Small tablets use a two-column wall. Original images and project colors remain. |
| About | The absolutely positioned portrait collided with the heading. | The portrait participates in normal page flow on phones. On small tablets, text and image get separate columns. Contact links follow the portrait and heading. |
| Project pages | Large introductory compositions, tiny credits, and dense columns delayed or obscured the work. | Separate image/title blocks, readable credits and body text, consistent spacing, and larger next-project links. |
| ISTA | A long case study offered little help moving between sections; portraits were too small to inspect. | Sticky Photography / Print / Films links, a swipeable portrait strip with a visible cue, larger image captions, and campaign videos before their supporting copy and results on mobile. |
| Index | Small search text, narrow filters, and two-column phone contact sheets made browsing difficult. | A 16-pixel search field, 44-pixel filter buttons, larger record text, and full-width phone contact sheets. Search, filters, expanded records, random selection, and shareable URLs remain. |
| Endless Coronet | Introductory sidebar content separated exposure controls from the selected artwork. | The image follows its controls immediately. Image/record pairs remain synchronized; full-size inspection remains available. |
| Dialogs | Small close buttons and dense content were awkward on short screens. | Larger controls, scrollable content, sticky close controls, and reliable focus restoration to the mobile menu. |
| Video | The Waiting Game trailer used its 35.3 MB desktop file on phones. | Phones receive a 1280×720, 11.9 MB version: about 66% smaller, retaining the full 75-second edit and audio. Desktop keeps the 1920×1080 version. Playback remains visitor initiated. |

## Validation

- Reviewed all 12 pages plus the 404 page at 320, 390, 430, 600, 768, 900, and 1024 pixels, plus an 844×390 landscape viewport: 104 route/viewport combinations.
- No horizontal page overflow, clipped visible headings, missing content images, portrait/title overlap below 900 pixels, or JavaScript errors in those checks.
- Exercised touch navigation, contact and image dialogs, focus restoration, all channels and alternate frames, archive search/filter/view/empty/random states, exposure/record synchronization, ISTA anchors, thread continuation, and landscape dialogs.
- Verified native reel playback and the mobile trailer's playback, duration, and seeking. Verified that desktop retains its original trailer source.
- Compared desktop screenshots of Home, The Room, About, and ISTA at 1440 pixels against the preceding delivery; their rendered layouts match.
- Confirmed the original GA4 property `G-XTPLG9LX0Y` on all 13 generated HTML documents and checked that its configuration executes once per document.
- Confirmed that navigation remains available with JavaScript disabled and that reduced-motion preferences remain supported.

These checks used Chromium with emulated phone/tablet viewports and touch input, rather than physical iOS hardware. YouTube frames were substituted during layout checks; remote YouTube streaming and live GA4 event receipt are not claimed as verified. Native local video playback was tested directly. Once deployed, a quick check on a physical phone and GA4 Realtime can confirm those external conditions.

## Files and deployment

Mobile styles live in `src/styles/mobile.css`; the build writes `dist/styles/mobile.css`. The shared templates and script contain the mobile menu, channel labels, ISTA section links, and mobile trailer selection. No framework or package dependency was added.

Copy the delivered folder's contents into the existing repository, preserving its `.git` directory. Run `npm run build` and `npm run preview` if reviewing locally, then commit and push through the existing deployment workflow. This delivery does not push or publish changes.

## Follow-up refinements

The link arrows remain, but mobile now draws them with a custom monochrome SVG line shape rather than relying on a font/emoji glyph. The current-page marker and wordmark use the same geometry; arrows maintain their appropriate direction. Dynamic channel links and thread continuation use the same styling.

At Bryan's request, the desktop homepage now starts with the mural frame that previously appeared through Another take. The interview becomes the desktop alternate. Mobile retains its interview opening. This is an intentional change to the desktop homepage photograph; the other reviewed desktop pages remain visually unchanged.
