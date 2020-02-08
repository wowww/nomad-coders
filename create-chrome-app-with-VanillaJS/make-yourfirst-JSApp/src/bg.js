const body = document.querySelector("body");

const IMG_NUMBER = 3;

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const rendomNumber = getRandom();
}

init();