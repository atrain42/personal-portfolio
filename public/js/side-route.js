// Render a loading page that disappears once all elements of the page are loaded in
const loader = document.querySelector(".loader__outer");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 1000);
});

import { HamburgerClass } from "./hamburgerAnimation.js";

// if on /about route, remove the anchor link below the text
const aboutRoute = window.location.href;
const buttonFlip = document.querySelector(".btn-flip");

if (aboutRoute.includes("/about")) {
  buttonFlip.style.display = "none";
}
