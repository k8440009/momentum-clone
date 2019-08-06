const API_KEY = "98fd1cbbdc6c6922b2b2f8832c5bedc0";
const CORDS = "cords";

function saveCoords(coordsObj) {
  localStorage.setItem(CORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude, // latitue = latitude
    longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForcoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadedCords = localStorage.getItem(CORDS);

  if (loadedCords === null) {
    askForcoords();
  } else {
    // getWeather
  }
}

function init() {
  loadCoords();
}

init();
