import React, { useEffect, useState } from "react";
import { getWeather, getCity } from "../../services";
import Header from "../header/header";
import HumidityIcon from "../svgs/humidityIcon";
import WindIcon from "../svgs/windIcon";
import Preloader from "../preloader/preloader";

import "./app.css";


export default function App() {

    let [currentWeather, setCurrentWeather] = useState(null);
    let [currentCity, setCurrentCity] = useState("");
    let [isLoading, setIsLoading] = useState(true);
    let [isIncorrect, setIsIncorrect] = useState(false);


    useEffect(() => {
        getCity().then(city => setCurrentCity(city));
    }, []);

    useEffect(() => {
        if (!currentCity) return;
        setIsLoading(true);
        getWeather(currentCity).then(data => {
            if (data["cod"] === "404") {
                setIsIncorrect(true);
                setTimeout(() => setIsIncorrect(false), 3000);
            } else {
                setCurrentWeather(data);
            }
            setIsLoading(false);
        });
    }, [currentCity]);


    return (
        <div className="app">
            {!isLoading ? 
                <>
                    <Header setCurrentCity={setCurrentCity} isIncorrect={isIncorrect} />
                    <div className="main">
                        <div className="main__image">
                            <img src={`https://openweathermap.org/img/wn/${currentWeather["weather"][0]["icon"]}@4x.png`} alt="" />
                        </div>
                        <div className="main__temperature">{`${Math.round(currentWeather["main"]["temp"])}°C`}</div>
                        <div className="main__city">{currentWeather["name"]}</div>
                    </div>
                    <div className="footer">
                        <div className="footer__humidity">
                            <HumidityIcon />
                            <div>
                                <span>{`${currentWeather["main"]["humidity"]}%`}</span>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className="footer__wind-speed">
                            <WindIcon />
                            <div>
                                <span>{`${currentWeather["wind"]["speed"]} km/h`}</span>
                                <span>Wind speed</span>
                            </div>
                        </div>
                    </div>
                </>
                :
                <Preloader />
            }
        </div>
    );

}
