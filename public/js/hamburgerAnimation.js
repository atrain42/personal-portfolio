/* Show menu on hamburger button press */
const menuBtn = document.querySelector(".fancy-burger");
const hamburgerMenu = document.querySelector(".menu__container");
const overlay = document.querySelector(".overlay");
const hamburgerLinks = document.querySelectorAll(".doink");
const body = document.querySelector("body");

export class HamburgerClass {
  constructor() {
    menuBtn.addEventListener("click", this._toggleHidden);
    overlay.addEventListener("click", this._toggleHidden);
    hamburgerLinks.forEach((link) => {
      link.addEventListener("click", this._toggleHidden);
    });
  }

  _toggleHidden() {
    menuBtn
      .querySelectorAll("span")
      .forEach((span) => span.classList.toggle("open"));
    hamburgerMenu.classList.toggle("hidden-menu");
    overlay.classList.toggle("hide-overlay");
    body.classList.toggle("hide-overflow");
  }
}
const app = new HamburgerClass();
