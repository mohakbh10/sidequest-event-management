(function () {
  const events = window.SIDEQUEST_EVENTS || [];
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const state = { search: "", category: "All", audience: "All", sort: "soonest" };
  const categoryList = ["All", ...new Set(events.map(event => event.category))];
  const audienceList = ["All", "Students", "Campus community", "Open to all"];
  const grid = $("#event-grid");
  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const formatDate = (date, options = { weekday: "short", month: "short", day: "numeric" }) => new Intl.DateTimeFormat("en", options).format(new Date(date));
  const formatTime = date => new Intl.DateTimeFormat("en", { hour: "numeric", minute: "2-digit" }).format(new Date(date));
  const dateRange = event => `${formatDate(event.start)} · ${formatTime(event.start)}`;
  const detailUrl = event => `event.html?event=${encodeURIComponent(event.id)}`;

  function renderFilters(container, values, key) {
    const node = $(container);
    if (!node) return;
    node.innerHTML = values.map(value => `<button type="button" class="filter-chip${state[key] === value ? " is-selected" : ""}" data-filter-key="${key}" data-filter-value="${escapeHTML(value)}" aria-pressed="${state[key] === value}">${escapeHTML(value)}</button>`).join("");
  }

  function countdownMarkup(event, compact = false) {
    const id = compact ? "featured-countdown" : `countdown-${event.id}`;
    return `<span class="countdown${compact ? " countdown-featured" : ""}" id="${id}" data-countdown="${escapeHTML(event.start)}"><span class="countdown-prefix">${compact ? "STARTS IN" : "THE ADVENTURE STARTS IN"}</span><span class="countdown-numbers"><b data-days>00</b><small>d</small><b data-hours>00</b><small>h</small><b data-minutes>00</b><small>m</small><b data-seconds>00</b><small>s</small></span></span>`;
  }

  function renderFeatured() {
    const event = events.find(item => item.featured) || events[0];
    const target = $("#featured-card");
    if (!event || !target) return;
    target.innerHTML = `
      <a class="featured-image-wrap" href="${detailUrl(event)}" aria-label="See details for ${escapeHTML(event.title)}">
        <img src="${event.image}" alt="${escapeHTML(event.imageAlt)}" loading="lazy">
        <span class="featured-image-stamp"><span>DON’T<br>MISS<br><b>THIS</b></span><i>✳</i></span>
        <span class="featured-count-pill">✳ &nbsp; THIS WEEK</span>
      </a>
      <div class="featured-info"><div class="featured-topline"><span class="category-label">${escapeHTML(event.category)}</span><span class="audience-tag">${escapeHTML(event.audience)}</span></div>
        <h3><a href="${detailUrl(event)}">${escapeHTML(event.title)}</a></h3><p class="featured-subtitle">${escapeHTML(event.subtitle)}</p>
        <p class="featured-description">${escapeHTML(event.excerpt)}</p>
        <div class="featured-meta"><span><i aria-hidden="true">◷</i> ${escapeHTML(dateRange(event))}</span><span><i aria-hidden="true">⌖</i> ${escapeHTML(event.venue)}</span></div>
        ${countdownMarkup(event, true)}
        <a class="button button-ink featured-button" href="${detailUrl(event)}">Get the details <span aria-hidden="true">↗</span></a>
      </div>`;
    tickCountdowns();
  }

  function eventCard(event, index) {
    const saved = JSON.parse(localStorage.getItem("sidequestSaved") || "[]").includes(event.id);
    return `<article class="event-card" style="--card-index:${index}">
      <div class="event-card-image"><a href="${detailUrl(event)}" tabindex="-1" aria-hidden="true"><img src="${event.image}" alt="" loading="lazy"></a>
        <span class="event-category-tag">${escapeHTML(event.category)}</span>
        <button class="save-event${saved ? " is-saved" : ""}" type="button" data-save="${event.id}" aria-label="${saved ? "Remove" : "Save"} ${escapeHTML(event.title)} ${saved ? "from" : "to"} saved events" aria-pressed="${saved}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-3.5L6 21V4.75Z"/></svg></button>
      </div>
      <div class="event-card-body"><div class="event-card-topline"><span>${escapeHTML(dateRange(event))}</span><span class="event-price">${escapeHTML(event.price)}</span></div>
        <h3><a href="${detailUrl(event)}">${escapeHTML(event.title)} <span aria-hidden="true">↗</span></a></h3>
        <p class="event-card-description">${escapeHTML(event.excerpt)}</p>
        <div class="event-card-footer"><span class="event-location"><i aria-hidden="true">⌖</i> ${escapeHTML(event.venue)}</span><span class="audience-tag audience-tag-small">${escapeHTML(event.audience)}</span></div>
      </div></article>`;
  }

  function currentEvents() {
    let visible = events.filter(event => {
      const term = state.search.toLowerCase();
      const matchesSearch = !term || [event.title, event.subtitle, event.category, event.audience, event.venue, event.location, event.excerpt].join(" ").toLowerCase().includes(term);
      return matchesSearch && (state.category === "All" || event.category === state.category) && (state.audience === "All" || event.audience === state.audience);
    });
    if (state.sort === "featured") visible.sort((a, b) => Number(b.featured) - Number(a.featured) || new Date(a.start) - new Date(b.start));
    else if (state.sort === "az") visible.sort((a, b) => a.title.localeCompare(b.title));
    else visible.sort((a, b) => new Date(a.start) - new Date(b.start));
    return visible;
  }

  function renderEvents() {
    if (!grid) return;
    const visible = currentEvents();
    grid.innerHTML = visible.map(eventCard).join("");
    $("#results-count").textContent = `${visible.length} ${visible.length === 1 ? "good thing" : "good things"} to get out for`;
    $("#empty-state").hidden = visible.length > 0;
    grid.hidden = visible.length === 0;
    const hasFilters = Boolean(state.search || state.category !== "All" || state.audience !== "All");
    $("#clear-filters").hidden = !hasFilters;
  }

  function tickCountdowns() {
    $$('[data-countdown]').forEach(element => {
      const difference = new Date(element.dataset.countdown).getTime() - Date.now();
      if (difference <= 0) {
        element.classList.add("countdown-started");
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

  function clearFilters() {
    state.search = ""; state.category = "All"; state.audience = "All";
    $("#event-search").value = "";
    renderFilters("#category-filters", categoryList, "category");
    renderFilters("#audience-filters", audienceList, "audience");
    renderEvents();
  }

  function setupMenu() {
    const button = $(".menu-toggle");
    const nav = $("#mobile-nav");
    if (!button || !nav) return;
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.hidden = !open;
    });
    nav.addEventListener("click", event => {
      if (event.target.closest("a")) { nav.hidden = true; button.setAttribute("aria-expanded", "false"); button.setAttribute("aria-label", "Open navigation"); }
    });
  }

  function setupTheme() {
    let savedTheme = "light";
    try { savedTheme = localStorage.getItem("sidequestTheme") || "light"; } catch (_) {}
    document.documentElement.dataset.theme = savedTheme;
    const updateButtons = () => $$(".theme-toggle").forEach(button => {
      const dark = document.documentElement.dataset.theme === "dark";
      button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      button.title = dark ? "Switch to light mode" : "Switch to dark mode";
    });
    updateButtons();
    $$(".theme-toggle").forEach(button => button.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("sidequestTheme", next); } catch (_) {}
      updateButtons();
    }));
  }

  document.addEventListener("click", event => {
    const filter = event.target.closest("[data-filter-key]");
    if (filter) {
      state[filter.dataset.filterKey] = filter.dataset.filterValue;
      renderFilters("#category-filters", categoryList, "category");
      renderFilters("#audience-filters", audienceList, "audience");
      renderEvents();
    }
    const save = event.target.closest("[data-save]");
    if (save) {
      const saved = JSON.parse(localStorage.getItem("sidequestSaved") || "[]");
      const index = saved.indexOf(save.dataset.save);
      if (index === -1) saved.push(save.dataset.save); else saved.splice(index, 1);
      localStorage.setItem("sidequestSaved", JSON.stringify(saved));
      renderEvents();
    }
  });

  $("#search-form").addEventListener("submit", event => { event.preventDefault(); state.search = $("#event-search").value.trim(); renderEvents(); });
  $("#event-search").addEventListener("input", event => { state.search = event.target.value.trim(); renderEvents(); });
  $("#event-sort").addEventListener("change", event => { state.sort = event.target.value; renderEvents(); });
  $("#clear-filters").addEventListener("click", clearFilters);
  $("#empty-reset").addEventListener("click", clearFilters);
  $("#newsletter-form").addEventListener("submit", event => {
    event.preventDefault();
    const input = $("#newsletter-email");
    try {
      const subscribers = JSON.parse(localStorage.getItem("sidequestNewsletter") || "[]");
      if (!subscribers.includes(input.value.trim().toLowerCase())) subscribers.push(input.value.trim().toLowerCase());
      localStorage.setItem("sidequestNewsletter", JSON.stringify(subscribers));
      $("#newsletter-feedback").textContent = "You’re on the list. Good things are coming.";
      input.value = "";
    } catch (_) { $("#newsletter-feedback").textContent = "You’re on the list — thanks for joining."; }
  });
  $("#current-year").textContent = new Date().getFullYear();
  renderFilters("#category-filters", categoryList, "category");
  renderFilters("#audience-filters", audienceList, "audience");
  renderFeatured();
  renderEvents();
  setupMenu();
  setupTheme();
  window.setInterval(tickCountdowns, 1000);
})();
