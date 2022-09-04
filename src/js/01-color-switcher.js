const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let interval = '';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
start.addEventListener('click', () => {
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  start.disabled = true;
});
stop.addEventListener('click', () => {
  clearInterval(interval);
  start.disabled = false;
});
