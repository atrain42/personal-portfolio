// Display loading screen when link is pressed
const anchors = document.querySelectorAll(".anchor-site");
const articleLoader = document.querySelector(".article__loader-outer");

export const anchorAnimation = function () {
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function () {
      articleLoader.classList.remove("hide-load");
    });
  });
};

export const windowAnimation = function () {
  window.addEventListener("pageshow", function () {
    articleLoader.classList.add("hide-load");
  });
};
