import "../index.css";
import img from "../images/weather.jpg";

const Result = ({ data }) => {
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  const isData = (val) => {
    return data ? val : 0;
  };

  return (
    <>
      {data !== "" ? (
        <div className='container'>
          <div className='row d-flex justify-content-center  text-center'>
            <div className='col-6'>
              <div className='col-12'>
                <h1 className=''>{data.name}</h1>
              </div>
              <div className='d-flex justify-content-around'>
                <div className='col-7 '>
                  <h2 className='display-4 fw-light'>{Math.round(kelvinToCelsius(isData(data.main.temp)))}° c</h2>
                </div>
                <div className='col-5 '>
                  <span className='d-block'>{data.weather[0].description}</span>
                  <span className='d-block'>Max. {Math.round(kelvinToCelsius(isData(data.main.temp_max)))}° c</span>
                  <span className='d-block'>Min. {Math.round(kelvinToCelsius(isData(data.main.temp_min)))}° c</span>
                </div>
              </div>
              <div className='d-flex justify-content-around'>
                <img src={img} className='wthrImg' />
              </div>

              <div className='d-flex justify-content-between'>
                <div className='col-7'>
                  <span className='d-block'>
                    Wind speed <br />
                    {isData(data.wind.speed)} KM/h
                  </span>
                </div>
                <div className='col-5'>
                  <span className='d-block'>
                    Humidity
                    <br />
                    {isData(data.main.humidity)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='d-flex justify-content-around mt-5 text-secondary'>Find Weather according to your location</div>
      )}

      {/* <div className='container'>
        <div className='row w-50'>
          <div className='col-md-6 mt-4 '>
            <div className='card cardTop'>
              <div className='card_body'>
                <h5>Pressure</h5>
                <p className='card-text'>{data.pressure}</p>
              </div>
            </div>
          </div>

          <div className='col-md-6 mt-4 '>
            <div className='card cardTop'>
              <div className='card_body'>
                <h5>Temperature</h5>
                <p className='card-text'>{data.temp}</p>
              </div>
            </div>
          </div>

          <div className='col-md-6 mt-4 '>
            <div className='card cardTop'>
              <div className='card_body'>
                <h5>Humidity</h5>
                <p className='card-text'>{data.humidity}</p>
              </div>
            </div>
          </div>

          <div className='col-md-6 mt-4 '>
            <div className='card cardTop'>
              <div className='card_body'>
                <h5>Wind</h5>
                <p className='card-text'>{data.wind}</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Result;
