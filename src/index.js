import "./style.css";

import { headerLinks as linksTexts } from "./data";

import { createElm } from "./helpers";

// Exporting Pages
import { header, main } from "./pages/header";
import { home } from "./pages/home";
import { nye } from "./pages/nye";
import { dateNtime } from "./pages/datetime";
import { menu } from "./pages/menu";
import { tour } from "./pages/tour";

let content = document.querySelector(".content");

// Header Part
content.appendChild(header);

// Main Part
content.appendChild(main);
main.appendChild(home);

// Footer Part

let footer = createElm(
  "div",
  ["footer"],
  null,
  "The Odin Project 2022",
  content
);
