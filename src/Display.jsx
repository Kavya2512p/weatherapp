import React from "react";

export default function Display({ weatherData }) {
    if (!weatherData) {
        return <div className=" mt-4 p-2 fs-3 text-center fst-italic"></div>;
    }
    if (weatherData.cod == 404) {
        return <div className=" mt-4  fs-3 text-center text-danger fw-bold">City not found.</div>;
    }

    return (
        <div className=" mt-2">

            <Details source={weatherData.weather[0].icon} wind={weatherData.wind.speed} description={weatherData.weather[0].description} humidity={weatherData.main.humidity} temperature={weatherData.main.temp} cityName={weatherData.name} feelsLike={weatherData.main.feels_like} />

        </div>
    );
}

function Details({ source, wind, description, humidity, temperature, cityName, feelsLike }) {
    return (
        <div>
            <div className="fs-2 fw-bold text-center  font-color mt-5">
                {cityName}
            </div>
            <div className="d-flex justify-content-center">
                <img className="" src={`https://openweathermap.org/img/wn/${source}@2x.png`} />

            </div>
            <div className="d-flex justify-content-evenly colors fs-5">
                <div>
                    <p>Weather: {description}</p>
                    <p>Humidity: {humidity}%</p>
                    <p>Wind Speed: {wind} m/s</p>
                </div>
                <div>
                    <p>Temperature: {temperature}°C</p>
                    <p>Feels Like: {feelsLike}°C</p>
                </div>
            </div>

        </div>
    )
}



