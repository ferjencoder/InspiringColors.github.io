const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const colorReply = document.querySelector(".color-reply");

btn.addEventListener("click", function () {
  colorReply.textContent = "";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  color.style.color = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

const btnCopy = document.getElementById("btnCopy");
const webColor = document.querySelector(".color");

btnCopy.addEventListener("click", function () {
  navigator.clipboard.writeText(color.textContent);
  colorReply.textContent = color.textContent + " copied to cloipboard!";
});
