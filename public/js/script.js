import { HamburgerClass } from "./hamburgerAnimation.js";

// Render a loading page that disappears once all elements of the page are loaded in
const loader = document.querySelector(".loader__outer");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//portfolio containers slide in on scroll
const inLeft = document.querySelector(".in-left");
const inRight = document.querySelector(".in-right");

const portfolioObserver = new IntersectionObserver(
  function (entries, portfolioObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.isIntersecting) {
        entry.target.classList.add("mergeLeft");
        entry.target.classList.add("mergeRight");
        portfolioObserver.unobserve(entry.target);
        return;
      }
    });
  },
  {
    threshold: 0.5,
  }
);

portfolioObserver.observe(inLeft);
portfolioObserver.observe(inRight);

// Load in skills percent progress on user scroll
const skillPercentageStatus = document.querySelectorAll(
  ".container__percent-progress"
);

const skillsPercentObserver = new IntersectionObserver(
  function (entries, skillsPercentObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.isIntersecting) {
        entry.target.classList.add("percent-animate");
        skillsPercentObserver.unobserve(entry.target);
        return;
      }
    });
  },
  {
    threshold: 1,
  }
);

skillPercentageStatus.forEach((bar) => {
  skillsPercentObserver.observe(bar);
});

// Display loading screen when link is pressed
const anchors = document.querySelectorAll(".anchor-site");
const articleLoader = document.querySelector(".article__loader-outer");

anchors.forEach((anchor) => {
  anchor.addEventListener("click", function () {
    articleLoader.classList.remove("hide-load");
  });
});

window.addEventListener("pageshow", function () {
  articleLoader.classList.add("hide-load");
});
