export function addObserver() {
  const targets = document.querySelectorAll(".hidden");
  const targetsNoDisplay = document.querySelectorAll(".hidden-nodisplay");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-element");
        observer.unobserve(entry.target);
      }
    });
  }, ({root: null, rootMargin: "0px", threshold: 0.25}));

  targets.forEach(target => {
    observer.observe(target);
  });

  targetsNoDisplay.forEach(target => {
    target.classList.remove("hidden-nodisplay");
  });
}