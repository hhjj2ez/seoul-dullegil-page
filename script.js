const chips = document.querySelectorAll(".chip");
const courses = document.querySelectorAll(".course");
const navLinks = document.querySelectorAll(".bottom-nav a");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;

    chips.forEach((item) => {
      item.classList.toggle("active", item === chip);
      item.setAttribute("aria-selected", String(item === chip));
    });

    courses.forEach((course) => {
      const shouldHide = filter !== "all" && course.dataset.level !== filter;
      course.classList.toggle("hide", shouldHide);
    });
  });
});

const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const activateNav = () => {
  const current = sections.reduce((active, section) => {
    const top = section.getBoundingClientRect().top;
    return top < 170 ? section : active;
  }, sections[0]);

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
};

window.addEventListener("scroll", activateNav, { passive: true });
activateNav();
