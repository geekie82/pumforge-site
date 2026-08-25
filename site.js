/* pumFORGE site JS — reveal animations, glass nav, back-to-top, marquee. */
(function () {
  "use strict";

  // Track the download CTA click (self-hosted beacon).
  window.trackDl = function () {
    try {
      var img = new Image();
      img.src = "/tracking/download?v=" + encodeURIComponent("1.0.0-rc.1");
      if (window.PUMFORGE_ANALYTICS_URL) {
        navigator.sendBeacon &&
          navigator.sendBeacon(
            window.PUMFORGE_ANALYTICS_URL + "/api/event",
            new Blob(
              [JSON.stringify({ domain: "pumforge.com", name: "download_cta" })],
              { type: "application/json" }
            )
          );
      }
    } catch (e) {}
  };

  // Smooth-scroll anchor links.
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var href = a.getAttribute("href");
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      var el = document.querySelector(href);
      el && el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // Glass nav on scroll.
  function onScroll() {
    var nav = document.querySelector(".nav");
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 10);
    var btt = document.getElementById("btt");
    if (btt) btt.classList.toggle("show", window.scrollY > 400);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Back-to-top.
  var btt = document.createElement("button");
  btt.id = "btt";
  btt.className = "btt";
  btt.setAttribute("aria-label", "Back to top");
  btt.innerHTML =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
  btt.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.body.appendChild(btt);

  // Scroll-reveal via IntersectionObserver.
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }
})();
