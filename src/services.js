const weather_APIKEY = "2c4a3124aa23088902cc0b7afdefa123";


export async function getWeather(city) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_APIKEY}&units=metric`);
    let data = await response.json();

    return data;
}

export async function getCity() {
    try {
        let response = await fetch("http://ip-api.com/json/");
        let data = await response.json();

        return data.city;
    } catch {
        return "Moscow";
    }
}
