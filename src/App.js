import "./App.css";
import { useState } from "react";

const api = {
  key: "e53a80e51b0b7da8d4565ecf59b74afa",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result)
        //console.log(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>LOCATION: {weather.name}</p>

            {/* Temperature Celsius  */}
            <p>TEMPERATURE: {weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>CONDITION: {weather.weather[0].main}</p>
            <p>CONDITION DESCRIPTION: ({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}