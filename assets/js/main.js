const root = document.documentElement;

// TOC scrollspy: highlight the heading currently in view.
const tocLinks = document.querySelectorAll("#TableOfContents a");
if (tocLinks.length) {
  const byId = new Map();
  tocLinks.forEach((a) => {
    const id = decodeURIComponent((a.hash || "").slice(1));
    if (id) byId.set(id, a);
  });
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const active = byId.get(e.target.id);
        if (!active) return;
        tocLinks.forEach((a) => a.classList.remove("active"));
        active.classList.add("active");
      });
    },
    { rootMargin: "0px 0px -75% 0px", threshold: 0 }
  );
  document.querySelectorAll(".prose h2, .prose h3").forEach((h) => {
    if (h.id) spy.observe(h);
  });
}

// Hero fills the viewport below the top chrome (banner + sticky header).
const hero = document.querySelector(".hero");
if (hero) {
  const setChrome = () => root.style.setProperty("--chrome", hero.offsetTop + "px");
  setChrome();
  addEventListener("resize", setChrome);
}

// Mobile nav
const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
