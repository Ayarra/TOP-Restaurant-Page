let content = document.querySelector(".content");

let contactHeader = document.createElement("div");
contactHeader.innerHTML = "65 4th street, Jersey City, NJ 07000 (000) 000-0000";

console.log(contactHeader);
console.log(content);

content.appendChild(contactHeader);
