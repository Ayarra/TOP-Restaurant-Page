import { createElm } from "../helpers";

import Logo from "../img/logo.png";

import { headerLinks as linksTexts } from "../data.js";

import { nye } from "../pages/nye";
import { dateNtime } from "../pages/datetime";
import { menu } from "./menu";
import { tour } from "./tour";
import { home } from "./home";

//  Export Header
export let header = createElm("div", ["header"], null, null, null);
let headerInfo = createElm(
  "div",
  ["header-info"],
  0,
  "65 4th street, Jersey City, NJ 07000 (000) 000-0000",
  header
);
let headerImg = createElm("div", ["header-img"], null, null, header);
let headerLogo = createElm("img", ["header-logo"], null, null, headerImg);
headerLogo.setAttribute("src", Logo);
headerLogo.addEventListener("click", () => {
  main.removeChild(main.childNodes[0]);
  main.appendChild(home);
});

let headerLinks = createElm("div", ["header-links"], null, null, header);

// Export Main Content
export let main = createElm("div", ["main"], null, null, null);

linksTexts.forEach((link) => {
  let button = createElm("button", ["header-link"], null, link, headerLinks);
  button.addEventListener("click", () => {
    main.removeChild(main.childNodes[0]);
    if (link === "NYE 2023") main.appendChild(nye);
    if (link === "Hours & Location") main.appendChild(dateNtime);
    if (link === "Menu") main.appendChild(menu);
    if (link === "Restaurant Tour") main.appendChild(tour);
  });
});
