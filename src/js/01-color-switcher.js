const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector("body");
let timerId;
stop.setAttribute("disabled" , "")
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

start.addEventListener("click", onClick);
stop.addEventListener("click", offClick);

function updateColor() {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
}

function onClick() {
  updateColor()
  stop.removeAttribute("disabled" , "")
  start.setAttribute("disabled" , "")
  timerId = setInterval(updateColor, 1000);
}


function offClick() {
  stop.setAttribute("disabled" , "")
  start.removeAttribute("disabled")
  clearInterval(timerId);
}