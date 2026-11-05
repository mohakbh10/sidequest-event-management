(function () {
  const events = window.SIDEQUEST_EVENTS || [];
  const params = new URLSearchParams(location.search);
  const event = events.find(item => item.id === params.get("event"));
  const root = document.querySelector("#event-page-root");
  const $ = (selector, container = document) => container.querySelector(selector);
  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const formattedDate = new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric" });
  const formattedTime = new Intl.DateTimeFormat("en", { hour: "numeric", minute: "2-digit" });
  const icon = name => ({
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M7.5 3v4M16.5 3v4M4 9.5h16"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.2"/></svg>',
    ticket: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5A2.5 2.5 0 0 0 4 12.5v4A1.5 1.5 0 0 0 5.5 18h13a1.5 1.5 0 0 0 1.5-1.5v-4a2.5 2.5 0 0 1 0-5v-1A1.5 1.5 0 0 0 18.5 5h-13A1.5 1.5 0 0 0 4 6.5Z"/><path d="M14 5v2m0 3v2m0 3v3"/></svg>'
  })[name];

  function countdownMarkup() {
    return `<span class="countdown detail-countdown" data-countdown="${escapeHTML(event.start)}"><span class="countdown-prefix">THE ADVENTURE STARTS IN</span><span class="countdown-numbers"><b data-days>00</b><small>d</small><b data-hours>00</b><small>h</small><b data-minutes>00</b><small>m</small><b data-seconds>00</b><small>s</small></span></span>`;
  }

  function renderNotFound() {
    document.title = "Event not found — Sidequest";
    root.innerHTML = `<div class="not-found"><span aria-hidden="true">✳</span><p class="eyebrow">WRONG TURN?</p><h1>This event’s gone<br><em>off the map.</em></h1><p>It may have moved or wrapped up. There are plenty more good things waiting.</p><a class="button button-ink" href="index.html#events">Back to all events <span aria-hidden="true">↗</span></a></div>`;
  }

  function render() {
    document.title = `${event.title} — Sidequest`;
    const date = new Date(event.start);
    const end = new Date(event.end);
    const related = events.filter(item => item.id !== event.id && (item.category === event.category || item.audience === event.audience)).slice(0, 3);
    root.innerHTML = `
      <a class="back-link" href="index.html#events"><span aria-hidden="true">←</span> All events</a>
      <section class="detail-hero">
        <div class="detail-hero-image"><img src="${event.image}" alt="${escapeHTML(event.imageAlt)}"><span class="detail-image-caption">SIDEQUEST NO. ${String(events.indexOf(event) + 1).padStart(2, "0")} <i>✳</i> MAKE A PLAN</span></div>
        <div class="detail-intro"><div class="detail-badges"><span class="category-label">${escapeHTML(event.category)}</span><span class="audience-tag">${escapeHTML(event.audience)}</span></div>
          <p class="sample-event-note">SAMPLE EVENT · DETAILS ARE ILLUSTRATIVE</p>
          <p class="eyebrow">${escapeHTML(event.subtitle)}</p><h1>${escapeHTML(event.title)}</h1><p class="detail-lede">${escapeHTML(event.excerpt)}</p>
          <div class="detail-quickfacts"><div>${icon("calendar")}<span><b>${formattedDate.format(date)}</b><small>${formattedTime.format(date)} – ${formattedTime.format(end)}</small></span></div><div>${icon("pin")}<span><b>${escapeHTML(event.venue)}</b><small>${escapeHTML(event.location)}</small></span></div><div>${icon("ticket")}<span><b>${escapeHTML(event.price)}</b><small>Registration takes less than a minute</small></span></div></div>
          <a class="button button-accent" href="#registration">Count me in <span aria-hidden="true">↘</span></a>
        </div>
      </section>
      <div class="detail-layout">
        <div class="detail-main-column">
          <section class="detail-description"><p class="eyebrow">THE FEELING</p><h2>What it’s <em>all about.</em></h2><p>${escapeHTML(event.description)}</p><div class="host-note"><span class="host-icon">✳</span><span><small>PUT TOGETHER BY</small><b>${escapeHTML(event.host)}</b></span></div></section>
          <section class="schedule-section"><p class="eyebrow">HOW IT GOES</p><h2>A little <em>preview.</em></h2><div class="schedule-list">${event.schedule.map(([time, label], index) => `<div class="schedule-item"><span class="schedule-index">0${index + 1}</span><span class="schedule-time">${escapeHTML(time)}</span><span class="schedule-label">${escapeHTML(label)}</span></div>`).join("")}</div><p class="access-note"><span aria-hidden="true">✳</span> ${escapeHTML(event.access)}</p></section>
        </div>
        <aside class="registration-column" id="registration"><div class="registration-card"><p class="eyebrow">SAVE YOUR SPOT</p><h2>See you <em>there?</em></h2><p class="registration-intro">A few details and you’re on the list. No payment, no fuss.</p>${countdownMarkup()}
          <form id="registration-form" novalidate>
            <input type="hidden" name="eventId" value="${escapeHTML(event.id)}">
            <div class="form-field"><label for="participant-name">Your name</label><input id="participant-name" name="name" type="text" autocomplete="name" placeholder="e.g. Jamie Parker" required minlength="2" aria-describedby="name-error"><span class="field-error" id="name-error"></span></div>
            <div class="form-field"><label for="participant-email">Email address</label><input id="participant-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required aria-describedby="email-error"><span class="field-error" id="email-error"></span></div>
            <div class="form-field"><label for="participant-phone">Phone number <span>(for event updates)</span></label><input id="participant-phone" name="phone" type="tel" autocomplete="tel" placeholder="+91 98765 43210" required aria-describedby="phone-error"><span class="field-error" id="phone-error"></span></div>
            <label class="consent-check"><input id="registration-consent" type="checkbox" required aria-describedby="consent-error"><span class="custom-check" aria-hidden="true"></span><span>Save my spot and remember my details for this event.</span></label><span class="field-error consent-error" id="consent-error"></span>
            <button class="button button-ink registration-submit" type="submit">Register for free <span aria-hidden="true">↗</span></button>
            <p class="privacy-note">Demo registration only. Your details stay in this browser and are not sent to the organizers.</p>
          </form>
          <div class="registration-success" id="registration-success" role="status" tabindex="-1" hidden></div>
        </div><p class="registration-side-note">GOOD PLANS ARE BETTER SHARED <span aria-hidden="true">↗</span></p></aside>
      </div>
      <section class="related-section"><div class="section-heading"><div><p class="eyebrow">WHILE YOU’RE HERE</p><h2>More good <span>things.</span></h2></div><a class="text-link" href="index.html#events">Explore everything <span aria-hidden="true">↗</span></a></div><div class="event-grid related-grid">${related.map((item, index) => `<article class="event-card" style="--card-index:${index}"><div class="event-card-image"><a href="event.html?event=${encodeURIComponent(item.id)}" tabindex="-1" aria-hidden="true"><img src="${item.image}" alt="" loading="lazy"></a><span class="event-category-tag">${escapeHTML(item.category)}</span></div><div class="event-card-body"><div class="event-card-topline"><span>${formattedDate.format(new Date(item.start))} · ${formattedTime.format(new Date(item.start))}</span><span class="event-price">${escapeHTML(item.price)}</span></div><h3><a href="event.html?event=${encodeURIComponent(item.id)}">${escapeHTML(item.title)} <span aria-hidden="true">↗</span></a></h3><p class="event-card-description">${escapeHTML(item.excerpt)}</p><div class="event-card-footer"><span class="event-location"><i aria-hidden="true">⌖</i> ${escapeHTML(item.venue)}</span><span class="audience-tag audience-tag-small">${escapeHTML(item.audience)}</span></div></div></article>`).join("")}</div></section>`;
    setupRegistration();
    tickCountdowns();
  }

  function tickCountdowns() {
    root.querySelectorAll("[data-countdown]").forEach(element => {
      const difference = new Date(element.dataset.countdown).getTime() - Date.now();
      if (difference <= 0) {
        element.querySelector(".countdown-prefix").textContent = difference > -3_600_000 ? "HAPPENING NOW" : "JUST GETTING STARTED";
        element.querySelector(".countdown-numbers").textContent = "✳  GOOD THINGS ARE HERE";
        return;
      }
      const seconds = Math.floor(difference / 1000);
      const values = { days: Math.floor(seconds / 86400), hours: Math.floor((seconds % 86400) / 3600), minutes: Math.floor((seconds % 3600) / 60), seconds: seconds % 60 };
      Object.entries(values).forEach(([unit, value]) => {
        const node = element.querySelector(`[data-${unit}]`);
        if (node) node.textContent = String(value).padStart(2, "0");
      });
    });
  }

  function setError(field, message) {
    const input = $(`#${field === "consent" ? "registration-consent" : `participant-${field}`}`);
    const error = $(`#${field}-error`);
    if (error) error.textContent = message;
    if (input && input.type !== "checkbox") input.setAttribute("aria-invalid", message ? "true" : "false");
    if (input && input.type === "checkbox") input.setAttribute("aria-invalid", message ? "true" : "false");
  }

  function setupRegistration() {
    const form = $("#registration-form");
    const success = $("#registration-success");
    const fields = ["name", "email", "phone"];
    fields.forEach(field => $(`#participant-${field}`).addEventListener("input", () => setError(field, "")));
    $("#registration-consent").addEventListener("change", () => setError("consent", ""));
    form.addEventListener("submit", submitEvent => {
      submitEvent.preventDefault();
      const name = $("#participant-name").value.trim();
      const email = $("#participant-email").value.trim();
      const phone = $("#participant-phone").value.trim();
      const consent = $("#registration-consent").checked;
      const phoneDigits = phone.replace(/\D/g, "");
      const errors = {
        name: name.length < 2 ? "Please enter your name (at least 2 characters)." : "",
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Enter a valid email address, like you@example.com." : "",
        phone: phoneDigits.length < 7 || phoneDigits.length > 15 ? "Enter a phone number with 7 to 15 digits." : "",
        consent: !consent ? "Please confirm so we can save your demo registration." : ""
      };
      fields.forEach(field => setError(field, errors[field]));
      setError("consent", errors.consent);
      const firstInvalid = fields.find(field => errors[field]);
      if (firstInvalid) { $(`#participant-${firstInvalid}`).focus(); return; }
      if (errors.consent) { $("#registration-consent").focus(); return; }

      const registration = { id: `${event.id}-${Date.now()}`, eventId: event.id, eventTitle: event.title, name, email, phone, submittedAt: new Date().toISOString() };
      try {
        const registrations = JSON.parse(localStorage.getItem("sidequestRegistrations") || "[]");
        registrations.push(registration);
        localStorage.setItem("sidequestRegistrations", JSON.stringify(registrations));
        localStorage.setItem("sidequestLastRegistrant", JSON.stringify({ name, email, phone }));
      } catch (_) {
        // The confirmation still works if browser storage is disabled.
      }
      form.hidden = true;
      success.hidden = false;
      success.innerHTML = `<span class="success-spark" aria-hidden="true">✳</span><p class="eyebrow">YOU’RE ON THE LIST</p><h3>Nice one, ${escapeHTML(name.split(/\s+/)[0])}.</h3><p>Your demo registration for <strong>${escapeHTML(event.title)}</strong> is saved on this device. No email has been sent.</p><a class="text-link" href="index.html#events">Find another good thing <span aria-hidden="true">↗</span></a>`;
      success.focus();
    });
    try {
      const last = JSON.parse(localStorage.getItem("sidequestLastRegistrant") || "null");
      if (last) { $("#participant-name").value = last.name || ""; $("#participant-email").value = last.email || ""; $("#participant-phone").value = last.phone || ""; }
    } catch (_) {}
  }

  function setupShell() {
    document.querySelector("#current-year").textContent = new Date().getFullYear();
    let theme = "light";
    try { theme = localStorage.getItem("sidequestTheme") || "light"; } catch (_) {}
    document.documentElement.dataset.theme = theme;
    const updateTheme = () => document.querySelectorAll(".theme-toggle").forEach(button => {
      const dark = document.documentElement.dataset.theme === "dark";
      button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode"); button.title = dark ? "Switch to light mode" : "Switch to dark mode";
    });
    updateTheme();
    document.querySelectorAll(".theme-toggle").forEach(button => button.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("sidequestTheme", next); } catch (_) {}
      updateTheme();
    }));
    const menuButton = $(".menu-toggle");
    const mobileNav = $("#mobile-nav");
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open)); menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation"); mobileNav.hidden = !open;
    });
    mobileNav.addEventListener("click", click => { if (click.target.closest("a")) { mobileNav.hidden = true; menuButton.setAttribute("aria-expanded", "false"); menuButton.setAttribute("aria-label", "Open navigation"); } });
  }

  setupShell();
  if (event) { render(); window.setInterval(tickCountdowns, 1000); }
  else renderNotFound();
})();
