import { createElm } from "../helpers";

import { tourSites as site } from "../data";
import Lounge from "../img/lounge.jpeg";
import Main from "../img/main.jpeg";
import Stage from "../img/stage.jpeg";
import Henry from "../img/henry.jpeg";
import Terrace from "../img/terrace.jpeg";

let images = [Lounge, Main, Stage, Henry, Terrace];

export let tour = createElm("div", ["tour"], null, null, null);

site.map((elem, index) => {
  let tourCard = createElm("div", ["card"], null, null, tour);
  let img = createElm("img", ["site-image"], null, null, tourCard);

  img.src = images[index];
  createElm("h4", [], null, elem.name, tourCard);
  createElm("p", [], null, elem.description, tourCard);
});
