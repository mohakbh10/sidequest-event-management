# Sidequest testing log

**Date:** 5 November 2026  
**Result:** Pass after the reported layout and theme fixes  
**Environment:** Local static site in a Chromium-based browser. Tests used an isolated local origin so test registrations and newsletter entries did not affect the existing preview's browser storage.

## Theme checks

| Component | Light mode | Dark mode | Result |
| --- | --- | --- | --- |
| Page and event-card surfaces | Warm paper background, white cards, dark text | Dark background and cards, light text | Pass |
| Event registration inputs and submit button | Light input surface with dark text; dark submit button with light text | Dark input surface with light text; light submit button with dark text | Pass |
| “Make a plan” CTA | `#f7f5ee` background, `#171715` text | `#f7f5ee` background, `#171715` text | Pass; label remains visible |
| Manifesto heading and copy | Heading, description and CTA remain inside the blue section | Heading, description and CTA remain inside the blue section | Pass; top clipping fixed |
| Theme toggle | Switches to dark and updates its accessible label | Switches to light and updates its accessible label | Pass |

The “Make a plan” issue was caused by its background using the dark theme’s page color while its label stayed dark. Its background is now a stable light cream in both themes. The button was also clicked successfully and navigated to `#events`.

## Interaction checks

| Area | Check | Result |
| --- | --- | --- |
| Event listing | Nine event cards render with dates, categories, venue, price and audience | Pass |
| Category filters | Music filter returns two cards; combining it with Students returns one | Pass |
| Search | “dahi bara” returns Patia Night Bazaar; an unmatched query shows the empty state | Pass |
| Reset | Clear filters and the empty-state reset both restore all nine events | Pass |
| Sorting | Name A–Z places Build for Bhubaneswar first | Pass |
| Saved events | Save control toggles its pressed state | Pass |
| Mobile navigation | Menu opens, Events link navigates, and the menu closes | Pass |
| Event details | All nine event URLs render the matching title, countdown, registration form and a loaded local image | Pass |
| Countdown | Seconds update while the page is open | Pass |
| Registration validation | A six-digit phone number is rejected with an inline message and `aria-invalid`; a valid demo entry shows the confirmation | Pass |
| Newsletter | Invalid email is rejected; a valid demo entry shows confirmation and clears the input | Pass |
| Unknown event | Friendly not-found page and return link render | Pass |
| In-page links | All homepage fragment links point to existing sections | Pass |

Registration and newsletter submissions are front-end demonstrations only. They use browser storage and do not send email or contact an event organizer.

## Responsive checks

| Viewport | Event grid | Navigation | Horizontal overflow | Result |
| --- | --- | --- | --- | --- |
| 375 × 812 | One column | Mobile menu | None | Pass |
| 768 × 1024 | Two columns | Desktop navigation | None | Pass |
| 1366 × 900 | Three columns | Desktop navigation | None | Pass |

The responsive pass found two layout issues and verified their fixes:

1. The rotated/scaled ticker extended beyond the viewport. The transform was removed while the ticker animation and styling remain.
2. The hero sticker protruded at phone and tablet widths. Its position is now constrained at those breakpoints.

## Runtime and source checks

- Browser console warnings/errors: none observed.
- JavaScript syntax checks (`events.js`, `app.js`, `event-page.js`): passed.
- `git diff --check`: passed.
- All five referenced local illustration assets exist and loaded on the event detail pages.
- No deployment was performed.

## Scope note

Event descriptions, dates, prices and venues are sample content for the front-end project and need organizer confirmation before being presented as real listings. The current image files are placeholders awaiting the user's photos.
