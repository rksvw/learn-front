let apiKey = secretKey();
let apiUrl = weatherUrl();

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const checkWeather = async (city) => {
    const res = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await res.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})