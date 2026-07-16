(function () {
  "use strict";

  // Mark JS as available so CSS can enable motion (keeps content visible if JS fails)
  document.documentElement.classList.add("js-enabled");

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Sticky header shadow on scroll
  var header = document.getElementById("siteHeader");
  var onScroll = function () {
    if (window.scrollY > 12) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Scroll progress bar
  var progressBar = document.getElementById("scrollProgress");
  var onProgress = function () {
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = pct + "%";
  };
  if (progressBar) {
    window.addEventListener("scroll", onProgress, { passive: true });
    window.addEventListener("resize", onProgress);
    onProgress();
  }

  // Animated stat counters — count up once, the moment the stat enters view
  function animateCounter(el) {
    if (el.dataset.counted) { return; }
    el.dataset.counted = "true";
    var target = parseInt(el.getAttribute("data-count-to"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    if (prefersReducedMotion || isNaN(target)) {
      el.textContent = target + suffix;
      return;
    }
    var duration = 1100;
    var start = null;
    function step(timestamp) {
      if (start === null) { start = timestamp; }
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  }

  // Scroll-reveal animation
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            var counters = entry.target.querySelectorAll("[data-count-to]");
            counters.forEach(animateCounter);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 60 + "ms";
      observer.observe(el);
    });

    // Safety net: a fast fling-scroll or instant anchor jump can skip the
    // paint frame IntersectionObserver relies on. Never leave lead-gen
    // content permanently invisible — force-reveal anything still hidden
    // shortly after load.
    window.setTimeout(function () {
      revealEls.forEach(function (el) {
        el.classList.add("in-view");
        el.querySelectorAll("[data-count-to]").forEach(animateCounter);
      });
    }, 2500);
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in-view");
      el.querySelectorAll("[data-count-to]").forEach(animateCounter);
    });
  }

  // Country select — "Other" reveals a free-text field instead of
  // accepting free text for every submission (keeps the country column
  // clean for routing/reporting; see UX/CRO review).
  var countrySelect = document.getElementById("country");
  var countryOtherField = document.getElementById("countryOtherField");
  var countryOtherInput = document.getElementById("countryOther");
  if (countrySelect && countryOtherField && countryOtherInput) {
    countrySelect.addEventListener("change", function () {
      var isOther = countrySelect.value === "Other";
      countryOtherField.hidden = !isOther;
      countryOtherInput.required = isOther;
      if (!isOther) { countryOtherInput.value = ""; }
    });
  }

  // ---------------------------------------------------------------------
  // Google Sheets destination — leads are appended to a Sheet via a Google
  // Apps Script Web App (doPost). See marketing/landing-pages/us-b2b-leads/
  // README.md for the full setup steps. Paste the deployed /exec URL below;
  // until it's set, this silently no-ops and only Netlify Forms captures
  // submissions.
  // ---------------------------------------------------------------------
  var SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxI7gDpKX7c58N9oGZSDzYpUctOP58TPUjTqfPlcFMt-pbWciJmPKVs1955SuCh5CF0lw/exec";

  // Netlify Forms — AJAX submit with inline success state
  var form = document.getElementById("rfqForm");
  var successBlock = document.getElementById("formSuccess");
  var submitBtn = document.getElementById("rfqSubmit");
  var errorMsg = document.getElementById("formError");

  function encode(data) {
    return Object.keys(data)
      .map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
      })
      .join("&");
  }

  // Shared event id for the Meta Pixel Lead event. When the Conversions API
  // (CAPI) is added server-side, it must send the SAME event_id + event_name
  // ("Lead") so Meta deduplicates the browser and server events instead of
  // double-counting the lead.
  function genEventId() {
    if (window.crypto && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    return "lead-" + Date.now() + "-" + Math.random().toString(36).slice(2);
  }

  function getCookie(name) {
    var m = document.cookie.match("(^|; )" + name + "=([^;]*)");
    return m ? decodeURIComponent(m[2]) : "";
  }

  // Real-time field validation feedback — reduces friction on the only
  // conversion action of this page. Native required/type validation still
  // runs; this just gives faster, more visible feedback than the browser default.
  if (form) {
    var requiredFields = form.querySelectorAll("[required]");
    requiredFields.forEach(function (field) {
      var wrapper = field.closest(".form-field");
      if (!wrapper) { return; }
      field.addEventListener("blur", function () {
        if (field.value.trim() === "") { return; } // don't scold untouched fields
        wrapper.classList.toggle("is-valid", field.checkValidity());
        wrapper.classList.toggle("is-invalid", !field.checkValidity());
      });
      field.addEventListener("input", function () {
        if (wrapper.classList.contains("is-invalid") && field.checkValidity()) {
          wrapper.classList.remove("is-invalid");
          wrapper.classList.add("is-valid");
        }
      });
      field.addEventListener("invalid", function () {
        wrapper.classList.add("is-invalid");
        wrapper.classList.remove("is-valid");
      });
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      errorMsg.hidden = true;
      submitBtn.classList.add("is-loading");
      submitBtn.disabled = true;
      submitBtn.setAttribute("aria-busy", "true");

      // Generated once per submission, shared between the Pixel (browser) and
      // the CAPI (server) Lead events for deduplication.
      var metaEventId = genEventId();

      var formData = new FormData(form);
      var payload = {};
      formData.forEach(function (value, key) {
        payload[key] = value;
      });

      // Attach attribution (UTM / gclid / fbclid / referrer) captured on the
      // landing page load. Column names here must match the Google Sheet
      // header row and the Apps Script appendRow order.
      var attribution = {};
      try { attribution = JSON.parse(sessionStorage.getItem('triunfo_attribution')) || {}; } catch (e) {}
      payload["UTM Source"] = attribution.utm_source || "";
      payload["UTM Medium"] = attribution.utm_medium || "";
      payload["UTM Campaign"] = attribution.utm_campaign || "";
      payload["UTM Term"] = attribution.utm_term || "";
      payload["UTM Content"] = attribution.utm_content || "";
      payload["GCLID"] = attribution.gclid || "";
      payload["FBCLID"] = attribution.fbclid || "";
      payload["Referrer"] = attribution.referrer || "";

      // Meta CAPI matching data — relayed by the Apps Script as a server-side
      // Lead event sharing this event_id with the browser Pixel (dedup). These
      // extra fields are ignored by the Sheet append (fixed column list) and by
      // Netlify Forms (undeclared fields); they exist only for the CAPI call.
      payload["meta_event_id"] = metaEventId;
      payload["fbp"] = getCookie("_fbp");
      var fbc = getCookie("_fbc");
      if (!fbc && attribution.fbclid) {
        // Meta's fbc format when the cookie isn't set yet but we have fbclid.
        fbc = "fb.1." + Date.now() + "." + attribution.fbclid;
      }
      payload["fbc"] = fbc;
      payload["event_source_url"] = window.location.href;
      payload["client_user_agent"] = navigator.userAgent;

      // Fire-and-forget copy to Google Sheets. mode:"no-cors" means we can't
      // read success/failure from Apps Script's response — that's expected,
      // it's a known limitation of calling Apps Script Web Apps from the
      // browser. The Netlify submission below remains the source of truth
      // for the on-page success/error state.
      if (SHEETS_WEBHOOK_URL) {
        fetch(SHEETS_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode(payload),
        }).catch(function () {
          /* ignored — Netlify submission is the reliable channel */
        });
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      })
        .then(function () {
          // Push the lead conversion to the dataLayer so GTM can fire GA4 and
          // Google Ads conversion tags. Fires only on confirmed Netlify success.
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "generate_lead",
            lead_country: payload["Country"] || "",
            lead_product_interest: payload["Product Interest"] || "",
            lead_utm_source: payload["UTM Source"] || "",
            lead_utm_campaign: payload["UTM Campaign"] || ""
          });

          // Meta Pixel Lead (browser side). Passing eventID lets the future
          // CAPI server event dedupe against this one. Fires only on confirmed
          // Netlify success, matching the GA4 generate_lead event above.
          if (typeof window.fbq === "function") {
            // trackSingle pins the Lead to OUR pixel (903988453820396). Other
            // Meta pixels injected by the shared GTM container must not receive
            // this event, and a generic track() would leak it to them.
            window.fbq("trackSingle", "903988453820396", "Lead", {
              content_name: "RFQ - US B2B Landing Page",
              content_category: payload["Product Interest"] || ""
            }, { eventID: metaEventId });
          }

          form.hidden = true;
          successBlock.hidden = false;
          successBlock.scrollIntoView({ behavior: "smooth", block: "center" });
        })
        .catch(function () {
          submitBtn.classList.remove("is-loading");
          submitBtn.disabled = false;
          submitBtn.removeAttribute("aria-busy");
          errorMsg.hidden = false;
        });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
