import { createElm } from "../helpers";

import { mainText } from "../data";

export let home = createElm("div", ["home"], null, null, null);
let heroMainImg = createElm("div", ["hero-clm", "hero-img"], null, null, home);

let heroText = createElm("div", ["hero-clm", "hero-text"], null, null, home);
let heroQuestion = createElm("h1", [], null, "Who Are We?", heroText);
let heroPara = createElm("p", [], null, mainText, heroText);
