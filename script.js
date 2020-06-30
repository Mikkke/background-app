const btn = document.querySelector(".btn");
const body = document.body;
const color = ["yellow", "green", "red", "black", "purple", "gray"];
btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * color.length);

  body.style.backgroundColor = color[random];
});
