# Revision 20 — Mobile homepage touch highlight repair

**October 24, 2026** · Targeted follow-up to Revision 19.

## What was wrong

The homepage's three “Three Loose Threads” links—“Who gets heard?”, “What counts as evidence?”, and “Things people do together.”—shared a CSS `:hover` rule that changed their entire background to `#111`. On touch screens, a tap or incidental finger contact can trigger and retain the hover state, leaving a distracting black row while scrolling.

## What changed

- In `src/styles/site.css`, the black/contrasting link hover state now only applies when the device supports actual mouse-like hover with a fine pointing device (`@media (hover:hover) and (pointer:fine)`).
- The associated hover-only photo rotation reset is restricted to the same pointer type, avoiding a sticky image movement on phones.
- The `:focus-visible` styling remains available for keyboard navigation, including users with a keyboard attached to a tablet.
- These are still ordinary clickable links with their original destinations, content and layout intact. No JavaScript touch suppression or event cancellation is used.
- Generated CSS URLs use `?v=20` for cache invalidation. All 16 static pages are rebuilt; other source contents are preserved.

## QA

- Chromium touch emulation: checked the visual background, color, and link behavior after taps at phone widths in Editorial, Gallery and Index Display layouts.
- Chromium mouse emulation: confirmed the high-contrast hover style still appears on desktop.
- Chromium keyboard: confirmed focus-visible styling remains and link navigation is available.
- Built successfully; internal link checker passed. No live deployment performed.
