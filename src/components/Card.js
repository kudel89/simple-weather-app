import { useState, useEffect } from "react";
import { getForecast } from '../api/Forecast'

export const Card = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataWeather, setDataWeather] = useState({});

  useEffect(() => {
    showForecast(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showForecast = async (forecast) => {
    setIsLoading(true);
    const data = await getForecast(forecast)
    setIsLoading(false);
    setDataWeather({
      ...dataWeather,
      ...data,
    })
  }

  return (
    <div className="card">
      <div className="card-top-section">
        <h2>{dataWeather.city?.toUpperCase()}</h2>
        <div className="buttons-section">
          <button className="forecast-button" onClick={() => showForecast(1)}>Today</button>
          <button className="forecast-button" onClick={() => showForecast(2)}>Tomorrow</button>
          <button className="forecast-button" onClick={() => showForecast(3)}>Day After Tomorrow</button>
        </div>
      </div>
      <div className="info-section">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <img src={dataWeather.icon_url} alt={dataWeather.city} />
            <div className="info-section-temperature">
              <p className="text-temperature">{dataWeather.mintemp_c}<br /><span>Min</span></p>
              {dataWeather.forecast === 1 ?
                <p className="text-temperature text-temperature-big">{dataWeather.temp_current}<br /><span>Current</span></p> :
                <p className="text-temperature text-temperature-big">{dataWeather.temp_avg}<br /><span>Average</span></p>
              }
              <p className="text-temperature">{dataWeather.maxtemp_c}<br /><span>Max</span></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
