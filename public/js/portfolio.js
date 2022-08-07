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

const react = document.querySelectorAll('[data-id="react"]');
const javascript = document.querySelectorAll('[data-id="javascript"]');
const reactBtn = document.querySelector("#react");
const javascriptBtn = document.querySelector("#javascript");
const allBtn = document.querySelector("#all");

reactBtn.addEventListener("click", () => {
  react.forEach((element) => (element.style.display = "inline"));
  javascript.forEach((element) => (element.style.display = "none"));
});

javascriptBtn.addEventListener("click", () => {
  javascript.forEach((element) => (element.style.display = "inline"));
  react.forEach((element) => (element.style.display = "none"));
});

allBtn.addEventListener("click", () => {
  react.forEach((element) => (element.style.display = "inline"));
  javascript.forEach((element) => (element.style.display = "inline"));
});
