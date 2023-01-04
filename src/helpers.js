export function createElm(type, classes, id, text, parent) {
  let elm = document.createElement(type);
  if (classes) classes.forEach((test) => elm.classList.add(test));
  elm.setAttribute("id", id);
  elm.innerHTML = text;
  if (parent) parent.appendChild(elm);
  return elm;
}
