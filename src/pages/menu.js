import { createElm } from "../helpers";

import { cocktails, desserts, menuLinks as linksTexts } from "../data";
import { lunch } from "../data";

export let menu = createElm("div", ["menu"], null, null, null);
let menuLinks = createElm("div", ["menu-links"], null, null, menu);

let lunchMenu = createElm("div", [], null, null, menu);
lunch.map((elem) => {
  createElm("h3", [], null, elem.item, lunchMenu);
  createElm("p", [], null, elem.description, lunchMenu);
  createElm("p", ["menu-price"], null, elem.price, lunchMenu);
});

let cocktailMenu = createElm("div", [], null, null, null);
cocktails.map((elem) => {
  createElm("h3", [], null, elem.item, cocktailMenu);
  createElm("p", [], null, elem.description, cocktailMenu);
  createElm("p", ["menu-price"], null, elem.price, cocktailMenu);
});

let dessertsMenu = createElm("div", [], null, null, null);
desserts.map((elem) => {
  createElm("h3", [], null, elem.item, dessertsMenu);
  createElm("p", [], null, elem.description, dessertsMenu);
  createElm("p", ["menu-price"], null, elem.price, dessertsMenu);
});

linksTexts.forEach((link) => {
  let button = createElm("button", ["menu-buttons"], null, link, menuLinks);
  button.addEventListener("click", () => {
    menu.removeChild(menu.childNodes[1]);
    if (link === "lunch") menu.appendChild(lunchMenu);
    if (link === "cocktails") menu.appendChild(cocktailMenu);
    if (link === "desserts") menu.appendChild(dessertsMenu);
  });
});
