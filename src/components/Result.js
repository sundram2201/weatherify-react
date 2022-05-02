import React from "react";
import "../index.css";

const Result = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4 ">
            <div className="card cardTop">
              <div className="card_body">
                <h5>Pressure</h5>
                <p className="card-text">{data.pressure}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 ">
            <div className="card cardTop">
              <div className="card_body">
                <h5>Temperature</h5>
                <p className="card-text">{data.temp}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 ">
            <div className="card cardTop">
              <div className="card_body">
                <h5>Humidity</h5>
                <p className="card-text">{data.humidity}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 ">
            <div className="card cardTop">
              <div className="card_body">
                <h5>Wind</h5>
                <p className="card-text">{data.wind}</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Result;
