# Sidequest

**Tagline:** Find your next thing.

Sidequest is a responsive event discovery website for finding what is happening around KIIT, Patia, and Bhubaneswar. Student-led and campus events are prominent, with clear audience labels for events open to the wider community.

The site is implemented as a static front-end project. It does not require an account, API key, or backend.

## Project goals

- Make it easy to discover upcoming events, understand who can attend, and find essential event details.
- Give the platform a bold, energetic visual identity inspired by festivals and student culture.
- Provide a clear, responsive experience on phones, tablets, and desktop screens.
- Let visitors complete a validated demo registration without requiring a server or backend.

## Audience and event access

The platform is centered on KIIT students and the Bhubaneswar community. Each listing makes its audience clear with labels such as **Students**, **Campus community**, and **Open to all**. Avoid implying that every event is available to every visitor.

## Features

- Homepage with an expressive hero, event search, and a featured event.
- Upcoming event cards showing an image, title, date and time, venue, category, audience, and short description.
- Search by event name or keyword, category filtering, and useful empty states.
- A separate, shareable event details view (`event.html?event=event-id`) with schedule and registration action.
- Registration form for name, email, phone number, and selected event.
- JavaScript validation with field-level guidance and a clear success confirmation.
- Local Storage for demo registrations, saved events, newsletter signups, and theme preference.
- Light and dark themes.
- Countdown timer for the featured event, with an appropriate state when it has started or passed.
- Responsive layouts, keyboard support, visible focus styles, and reduced-motion support.

## Main visitor journey

1. A visitor lands on the homepage and sees the platform's purpose and a featured upcoming event.
2. They search or filter the event list and compare the event cards.
3. They open an event's detail page to review its schedule, location, description, and audience label.
4. They register for that event. The event is preselected in the form.
5. The form validates the required details, then confirms the registration and stores it in the browser.

## Design direction

The visual direction is **bold festival energy**: expressive typography, vivid accent colors, event photography, and confident contrast. The event listings and homepage hero use the photo references supplied for this project. They are illustrative images and do not document confirmed Sidequest events.

Design principles:

- Use a consistent type scale, spacing system, color palette, and reusable controls.
- Give event imagery consistent crops and meaningful alternative text when the image conveys information.
- Make hover and motion effects brief and subtle; honor `prefers-reduced-motion`.
- Ensure text, controls, and focus indicators remain legible in both themes.
- Keep the brand name **Sidequest** and tagline **Find your next thing.** consistent across the site.

## Responsive behavior

- **Mobile:** compact navigation, single-column event cards, stacked form fields, and touch-friendly controls.
- **Tablet:** two-column event grid where content remains comfortable to read.
- **Desktop:** wider hero composition and a three-column event grid when card content still fits cleanly.

Breakpoints should be chosen around the content rather than specific device models. Search, filters, navigation, theme switching, event details, and registration must remain usable at every layout size.

## Front-end implementation

The stack is **HTML5, CSS3, and vanilla JavaScript**. Event data lives in `assets/js/events.js` and is rendered into the homepage and the event detail view. Registration records, saved events, newsletter signups, and theme preference use Local Storage.

Local Storage is specific to the current browser and device. It does not send registrations to event organizers, provide a shared attendee list, or act as a production registration service. The interface should make the demo confirmation clear and should not imply that an email was sent.

## Accessibility and form behavior

- Use semantic landmarks, a logical heading structure, and native buttons and links.
- Associate visible labels with form fields; do not rely on placeholders as labels.
- Validate required fields, email format, and a reasonable phone number input.
- Explain errors next to the relevant field and expose them accessibly; do not communicate errors by color alone.
- Announce success feedback to assistive technology and prevent repeated submission while handling the form.
- Support keyboard navigation and show a clear focus indicator.
- Provide appropriate alt text for informative images and empty alt text for decorative images.

## Suggested event data

The event ideas are fictional sample concepts inspired by the society areas listed by [KIIT’s Student Activity Centre](https://ksac.kiit.ac.in/kiit-societies/), including music and dance, drama, crafts, cooking, film, literature, technology, and social service. Society names here describe the inspiration for a concept; they do not indicate that a society has approved or scheduled the event. Event dates, schedules, prices, hosts, venues, and access notes are illustrative and must be confirmed before publication.

The sample lineup mixes campus and city plans. KSAC is at Campus 13 in Patia, and KIIT lists campus auditoriums and open-air theatres; see [KSAC](https://ksac.kiit.ac.in/) and [KIIT auditorium information](https://kiit.ac.in/campuslife/auditorium/). Off-campus concepts include a food walk around Patia, a maker pop-up at [Ekamra Haat](https://sidac.odisha.gov.in/en/album?name=ekamra), a Bhubaneswar crafts marketplace, and a reading circle at [Yara Café](https://yaracafe.com/events), which advertises group gatherings in Patia. The food-walk route is illustrative. Venue bookings, permissions, access details, and any public route still need confirmation with the venues and organizers.

Each event record should have:

- A stable ID and URL slug
- Name, category, audience label, and short and full descriptions
- Start and end date/time, including a consistent time-zone convention
- Venue name and location
- Local image path and alt text
- Optional price and featured status

Sample content should include both campus/student events and events open to everyone so audience filters and labels have a purpose.

## Project structure

The project separates page markup, styles, scripts, and image assets:

```text
sidequest/
├── index.html
├── event.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── events.js
│   │   ├── app.js
│   │   └── event-page.js
│   ├── images/
│   └── sidequest-mark.svg
└── README.md
```

The event detail page is a shared template, selected by an event ID in the URL. This keeps each event link shareable while avoiding duplicated page markup.

## Run locally

### Using VS Code

1. Open VS Code and choose **File → Open Folder…**.
2. Select the project folder that contains `index.html`, `event.html`, and `assets/`.
3. Open **Terminal → New Terminal**. Make sure the terminal is in the project folder, then run:

```bash
python3 -m http.server 8000
```

4. Open [http://localhost:8000](http://localhost:8000) in your browser.
5. Keep the terminal running while you work. Press **Ctrl+C** in that terminal to stop the local server.

Serving the files over HTTP gives browser storage and relative asset URLs a consistent local environment. If the terminal opened in a different folder, change to the project folder before running the server command.

## Demo data and privacy

The sample event dates are generated relative to the visitor's current date, so countdowns remain active when the project is revisited later. Registration, saved-event, and newsletter demo records remain in the current browser's Local Storage. The newsletter form does not send an email, and registration does not contact event organizers. The form confirmation states this clearly.

### Event photography

The event listing images use the photo references supplied for the project and are referenced by `assets/js/events.js`; the same images appear on event cards and detail pages. These photos are illustrative and are not evidence of the sample events taking place. Replace them with approved event photos if the listings are ever presented as real events.

## Completion checklist

- [x] Homepage introduces Sidequest and features an upcoming event.
- [x] Search, category filters, audience filters, sorting, and no-results recovery are implemented.
- [x] Event cards link to shareable event details.
- [x] Event details show schedule, date, time, venue, full description, category, and audience.
- [x] Registration validates name, email, phone, and consent, then shows a success confirmation.
- [x] Demo registrations persist in Local Storage and are identified as local-only.
- [x] Light/dark mode remembers the selected theme.
- [x] Countdown timers update and handle events that have started.
- [x] Responsive layouts, keyboard focus, form labels, and reduced-motion behavior are included.
- [x] Local run instructions are included.
- [x] GitHub repository and deployed site links are added after publication.

## Submission

The submission brief calls for a GitHub repository and a deployed website, for example on GitHub Pages, Netlify, or Vercel. The public repository and deployed site are linked below.

- **Repository:** [github.com/mohakbh10/sidequest-event-management](https://github.com/mohakbh10/sidequest-event-management)
- **Live site:** [sidequest-event-management.vercel.app](https://sidequest-event-management.vercel.app)

## Acknowledgements

I led and implemented the Sidequest website, with AI tools assisting with brainstorming, copy drafts, and selected coding tasks. I supplied the project brief, Sidequest direction, and KIIT/Bhubaneswar context. Event descriptions, dates, hosts, prices, and venues are illustrative sample content and should be replaced or verified before being presented as actual listings.
