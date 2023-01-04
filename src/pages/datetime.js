import { createElm } from "../helpers";

export let dateNtime = createElm("div", ["date-time"], null, null, null);
let infoTitle = createElm("h1", ["info"], null, "Hours & Time", dateNtime);

let infoAddress = createElm(
  "p",
  [],
  null,
  "65 4th street, Jersey City, NJ 07000. (000) 000-0000",
  dateNtime
);

let infoNumber = createElm("p", [], null, "(000) 000-0000", dateNtime);

let infoKitchen = createElm(
  "h2",
  ["info-kitchen"],
  null,
  "Kitchen Hours",
  dateNtime
);

let infoKitchen1 = createElm(
  "p",
  [],
  null,
  "Sunday thru Thursday: Noon until 9:45 PM",
  dateNtime
);

let infoKitchen2 = createElm(
  "p",
  [],
  null,
  "Friday and Saturday: Noon until 10:45 PM",
  dateNtime
);

let infoBar = createElm(
  "h2",
  ["info-kitchen"],
  null,
  "Kitchen Hours",
  dateNtime
);

let infoBar1 = createElm(
  "p",
  [],
  null,
  "Sunday thru Thursday: Noon until 11:00 PM",
  dateNtime
);

let infoBar2 = createElm(
  "p",
  [],
  null,
  "Friday and Saturday: Noon until 2:00 AM",
  dateNtime
);
