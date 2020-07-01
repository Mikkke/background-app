const hexColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorParaHex__span = document.querySelector(".colorParaHex__span");
const btnHex = document.querySelector("#btnHex");
const container = document.querySelector(".containerHex");
const body = document.body;

btnHex.addEventListener("click", function() {
  let hexDies = "#";
  for (let i = 0; i < 6; i++) {
    hexDies += hexColor[getRandomNumber()];
  }
  body.style.backgroundColor = hexDies;
  colorParaHex__span.textContent = `the hex color is ${hexDies}`;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hexColor.length);
};
