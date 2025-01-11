let apiKey = secretKey();
let apiUrl = weatherUrl();
const checkWeather = async () => {
    const res = await fetch(apiUrl +`&appid=${apiKey}`);
    var data = await res.json();
    console.log(data);
}

checkWeather();