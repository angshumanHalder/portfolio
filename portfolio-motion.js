const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

if (!reducedMotion.matches && "IntersectionObserver" in window) {
  const elements = document.querySelectorAll(
    ".feature > div, .story, .project, .principles article, .role, .toolkit, blockquote, .contact > div"
  );

  document.body.classList.add("motion-ready");
  elements.forEach((element, index) => {
    element.classList.add("scroll-reveal");
    element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
  });

  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }),
    { rootMargin: "0px 0px -12%", threshold: 0.12 }
  );

  elements.forEach(element => observer.observe(element));
}
