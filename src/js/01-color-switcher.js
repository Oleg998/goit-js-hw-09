const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector("body");
let timerId;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  start.addEventListener("click" , onClick) ;
  stop.addEventListener("click" , offClick);

  function onClick(evt) {
    let randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    const timerId =setInterval(onClick , 1000);
   
  }

  function offClick (evt) {
    clearInterval(timerId);
  }