import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";
import "../index.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    pressure: "~",
    temp: "~",
    humidity: "~",
    wind: "~",
  });

  const handleClick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45a2b8c81476f7330fe9dc14bad4e978`
      )
      .then((response) => {
        if (city === "") {
          alert("hey");
        } else {
          setData({
            pressure: response.data.main.pressure,
            temp: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
          });
        }
      })
      .catch((noResponse) => {
        setData({
          pressure: "No Records",
          temp: "No Records",
          humidity: "No Records",
          wind: "No Records",
        });
      });
  };

  return (
    <>
      <div className="container2">
        <div className="tempBox">
          <h1>Search Weather</h1>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleClick}
            className="btn btn-primary tempBtn"
          >
            Get temp
          </button>
        </div>
      </div>
      <Result data={data} />
    </>
  );
};

export default Weather;
