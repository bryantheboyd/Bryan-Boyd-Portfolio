# Revision 13 — ISTA Strategy

October 24, 2026

## Changes

- Updated ISTA opening description to emphasize digital strategy, campaigns and creative production.
- Added Strategy as the first numbered section on `/work/ista/` and updated the subsequent section numbers.
- Replaced the former "The Work" summary with a strategy statement focused on planning, distribution, measurement and performance-based iteration.
- Moved the results-on-request message directly into the strategy section, with a link to Contact; removed the duplicate note below the videos.
- Retained all existing films, photography, publications, The Next Chapter links, credit index, Display options, favicon and Google Analytics.
- Bumped stylesheet version parameters to `v=13` to avoid stale cached CSS after deployment.

## Copy

My goal is to win attention.

At ISTA, I plan and manage digital campaigns across creative production, distribution, and measurement. I use performance data to decide what to make, where to put it, and what to change.

Results available on request. I don’t publish campaign analytics here, but I can discuss selected results—including lead generation, conversion rates, and paid distribution—and the strategy behind the work.

## Checks

- `npm run build`: 16 pages, 46 credit records.
- `python link_check.py`: 0 broken internal paths.
- Targeted ISTA Strategy section renders at 1440px, 390px, and 320px, with no horizontal overflow; Night, Field and Signal palette checks at 390px also show no overflow.
- Live browser navigation in this environment was blocked, so no claim of an end-to-end full-page browser QA; targeted component was rendered by placing the generated HTML and exact build CSS in the browser.

## Run

From `bryan-boyd-website/`:

```bash
npm run preview
```

Open http://localhost:4173/work/ista/.

This is a review build; not deployed.

**Confidentiality:** Before discussing campaign metrics externally, confirm what can be shared on behalf of ISTA and use client-approved or appropriately aggregated figures.
