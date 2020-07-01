const btn = document.querySelector(".btn");
const body = document.body;
const colorPara__span = document.querySelector(".colorPara__span");
const color = [
  "yellow",
  "green",
  "red",
  "brown",
  "purple",
  "gray",
  "pink",
  "orange"
];
btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * color.length);

  body.style.backgroundColor = color[random];
  colorPara__span.textContent = `the color is ${color[random]}`;
});
