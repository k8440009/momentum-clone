const weather = document.querySelector(".js-weather");

const API_KEY = "98fd1cbbdc6c6922b2b2f8832c5bedc0";
const CORDS = "cords";

function getWeather(lat, lon) {
  // fetch : 데이터를 받음, then : fetch가 완료 된 후 함수 실행
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      // body.json() : Response 스트림을 가져와 읽는다.
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}
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
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForcoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(CORDS);

  if (loadedCoords === null) {
    askForcoords();
  } else {
    // getWeather
    const parseCoords = JSON.parse(loadedCoords);
    console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
