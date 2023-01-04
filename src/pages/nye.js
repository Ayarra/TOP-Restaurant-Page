import { createElm } from "../helpers";

import { eventInfo } from "../data";

export let nye = createElm("div", ["nye"], null, null, null);
let poster = createElm("div", ["poster"], null, null, nye);
let posterText = createElm("div", ["poster-text"], null, null, nye);
let posterTitle = createElm("h1", [], null, "NYE 2023", posterText);
let posterInfo = createElm("p", [], null, eventInfo, posterText);
