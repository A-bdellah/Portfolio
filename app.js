// Cache the DOM elements
let btnLanguage = document.querySelector(".language");
let languageList = document.querySelector(".language-list");
let headerMenu = document.querySelector(".header-menu");
let navMobile = document.querySelector(".nav-mobile");

// Toggle language list visibility and hide header menu
btnLanguage.addEventListener("click", () => {
  languageList.classList.toggle("hidden");
  headerMenu.classList.remove("block");
});

// Toggle header menu visibility and hide language list
navMobile.addEventListener("click", () => {
  headerMenu.classList.toggle("block");
  languageList.classList.add("hidden");
});

const elements = document.querySelectorAll(".skills-lvl > div");
elements.forEach((element) => {
  const name = element.getAttribute("data-name");
  const level = element.getAttribute("data-lvl");
  const color = element.getAttribute("data-color");
  const innerBar = element.querySelector(".inner-bar");

  element.style.setProperty("--name-content", `"${name}"`);
  element.style.setProperty("--lvl-content", `"${level}"`);
  element.style.color = color;
  innerBar.style.width = level;
  innerBar.style.backgroundColor = color;
});

document.querySelector("a").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
});
