// Typing effect, active-nav highlight, footer year, and copy-email button.
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Scroll reveals --------------------------------------------
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js");
    const revealTargets = document.querySelectorAll(
      "main > section:not(.hero), .skills > .card, .projects > .project, .certs > .cert, .timeline > li"
    );
    revealTargets.forEach((target) => {
      target.classList.add("reveal");
      if (target.matches(".skills > .card, .projects > .project, .certs > .cert")) {
        const index = Array.from(target.parentElement.children).indexOf(target);
        target.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
      }
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -48px 0px" });
    revealTargets.forEach((target) => revealObserver.observe(target));
  }

  // ---- Project-card ripple ---------------------------------------
  document.querySelectorAll(".project").forEach((card) => {
    card.addEventListener("pointerenter", (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--ripple-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--ripple-y", `${event.clientY - bounds.top}px`);
    });
  });

  // ---- Typing effect ---------------------------------------------
  const typed = document.querySelector(".typed");
  if (typed && !reduceMotion) {
    const lines = (typed.dataset.taglines || "")
      .split("|").map((s) => s.trim()).filter(Boolean);
    const out = typed.querySelector(".typed-text");
    if (lines.length && out) {
      let line = 0, pos = lines[0].length, deleting = true;
      const tick = () => {
        if (deleting) {
          pos--;
          if (pos <= 0) { deleting = false; line = (line + 1) % lines.length; }
        } else {
          pos++;
          if (pos >= lines[line].length) { deleting = true; }
        }
        out.textContent = lines[line].slice(0, Math.max(pos, 0));
        const atEnd = !deleting && pos === 0;
        const fullyTyped = deleting && pos === lines[line].length;
        setTimeout(tick, fullyTyped ? 2200 : atEnd ? 400 : deleting ? 28 : 55);
      };
      // Show the first line fully before starting to cycle.
      setTimeout(tick, 2600);
    }
  }

  // ---- Highlight the nav link for the section in view --------------
  const links = Array.from(document.querySelectorAll('.bar nav a[href^="#"]'));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((s) => observer.observe(s));
  }

  // ---- Footer year -------------------------------------------------
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ---- Copy email --------------------------------------------------
  document.querySelectorAll(".copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        btn.textContent = "copied!";
      } catch (e) {
        btn.textContent = "press Ctrl+C";
      }
      setTimeout(() => { btn.textContent = "copy"; }, 1800);
    });
  });
})();
