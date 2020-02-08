const COORDS = 'coords';

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadCoords === null) {
    askForCoords();
  } else {
    // getWeather
  }
}

function init() {
  loadCoords();
}

init();