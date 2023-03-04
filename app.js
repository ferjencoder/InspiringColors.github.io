//<<<------ HEX GENERATOR ------------------------------------------------------
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const happyIcon = document.querySelector(".happyIcon");
const colorReply = document.querySelector(".msg-reply");

btn.addEventListener("click", function () {
  colorReply.textContent = "";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  color.style.color = hexColor;
  happyIcon.className = "d-none";
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

//<<<------ MSG ----------------------------------------------------------------
const btnCopy = document.getElementById("btnCopy");
const webHappyIcon = document.querySelector(".happyIcon");

btnCopy.addEventListener("click", function () {
  navigator.clipboard.writeText(color.textContent);
  colorReply.textContent = color.textContent + " copied to clipboard!";
  webHappyIcon.style = "--fa-animation-iteration-count: 3";
  webHappyIcon.className = "fa-brands fa-android fa-bounce happyIconSize";
});
