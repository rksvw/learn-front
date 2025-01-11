let apiKey = secretKey();
let apiUrl = weatherUrl();

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

const checkWeather = async (city) => {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

  var data = await res.json();

  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.scr == "../img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "../img/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "../img/rain.png.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "../img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "../img/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "../img/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }

};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
