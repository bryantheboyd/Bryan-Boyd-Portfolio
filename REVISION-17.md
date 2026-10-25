# Revision 17 — Cinematography sequence and mobile formatting

October 24, 2026

## What changed
- Reordered Cinematography: **Golden Hour → The Sugarman → Steve Cropper: On the Record (John Mellencamp) → Absolution → Kyle Larson vs. The Double**.
- Redesigned mobile typography and spacing within the Golden Hour lead, the five-link press list, project titles, image pairings, award notes, and small-screen credits. Kept full image proportions.
- Expanded *The Sugarman* description to identify Olympic gold medalist Sugar Ray Seales and added its **Best Sports Documentary Short Film** award at the **2024 Seattle Film Festival**.
- Added *Absolution* as a featured cinematography project with three supplied film frames, its **Best Cinematography** win at the **Queen Palm International Film Festival (February 2019)**, and its **Dances With Films premiere (June 2018)**.
- Kept the previously abbreviated Golden Hour press treatment (text and links only; no MovieMaker screenshot).
- Preserved global navigation (Cinematography remains under Work), side-eye icon, Display control, analytics and the Index.

## Sources for award and festival claims
- Sarah Farnsley, [Absolution — choreography/film page](https://www.sarahfarnsley.com/choreography) (dates, directors, Queen Palm and Dances With Films recognition, producer Bryan Boyd).
- Dances With Films, [2018 opening press release](https://danceswithfilms.com/press/2018.05.10-Open-Release.pdf) (2018 selection; director Stirling Matheson and choreography Sarah Farnsley).
- FilmSpeak, [Seattle Film Festival award coverage](https://filmspeak.net/news-2/2024/7/9/topawards-seattleff) (*The Sugarman* Best Sports Documentary Short Film, 2024).
- Film Threat, [Seattle Film Festival overview](https://filmthreat.com/news/indie-filmmakers-mark-your-calendars-for-the-2024-seattle-film-festival/) (*The Sugarman* subject and director).

Note: the **Seattle Film Festival** award is not being represented as an award from **SIFF (Seattle International Film Festival)**, which is a distinct festival.

## Validation
- `npm run build`: 16 pages, 46 records.
- `python link_check.py`: no missing internal paths.
- Targeted real Chromium layout captures for Cinematography at 390px and 1440px (rendered from locally inlined source assets due blocked browser navigation).
- Layout-overflow checks across 252 combinations (widths 320, 375, 390, 430, 768, 1024, 1440; four colors; three type modes; three layouts) found zero horizontal overflow issues.
- Final production-hosted video playback and Google Analytics reception not retested; unchanged from V16.
