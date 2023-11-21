import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";
import "../index.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");

  const handleClick = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45a2b8c81476f7330fe9dc14bad4e978`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert("Location not found");
        console.log(err.message);
      });
  };

  return (
    <>
      <div className='container2'>
        <div className='tempBox'>
          <h1>Weatherify React</h1>
          <input type='text' value={city} onChange={(e) => setCity(e.target.value)} />
          <button type='submit' onClick={handleClick} className='btn btn-primary tempBtn'>
            Go
          </button>
        </div>
      </div>
      <Result data={data} />
    </>
  );
};

export default Weather;
