import { useState, useEffect } from "react";
import { forecastDaily } from '../api/Forecast'

export const Card = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState({});

  useEffect(() => {
    getWeather(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getWeather = async (forecast) => {
    setIsLoading(true);
    const data = await forecastDaily(forecast)
    setIsLoading(false);
    setState({
      ...state,
      ...data,
    })
  }

  return (
    <div className="card">
      <div className="card-top-section">
        <h2>{state.city?.toUpperCase()}</h2>
        <div className="buttons-section">
          <button className="forecast-button" onClick={() => getWeather(1)}>Today</button>
          <button className="forecast-button" onClick={() => getWeather(2)}>Tomorrow</button>
          <button className="forecast-button" onClick={() => getWeather(3)}>Day After Tomorrow</button>
        </div>
      </div>
      <div className="info-section">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <img src={state.icon_url} alt={state.city} />
            <div className="info-section-temperature">
              <p className="text-temperature">{state.mintemp_c}<br /><span>Min</span></p>
              {state.forecast === 1 ?
                <p className="text-temperature text-temperature-big">{state.temp_current}<br /><span>Current</span></p> :
                <p className="text-temperature text-temperature-big">{state.temp_avg}<br /><span>Average</span></p>
              }
              <p className="text-temperature">{state.maxtemp_c}<br /><span>Max</span></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
