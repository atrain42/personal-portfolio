// Render a loading page that disappears once all elements of the page are loaded in
const loader = document.querySelector(".loader__outer");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 1000);
});

import { HamburgerClass } from "./hamburgerAnimation.js";

import { anchorAnimation, windowAnimation } from "./ArticleLoadAnimation.js";
anchorAnimation();
windowAnimation();
