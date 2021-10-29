import { useState, useEffect } from "react";
import { forecastDaily } from '../api/Forecast'

const today = 'today'
const tomorrow = 'tomorrow'
const dayAfterTomorrow = 'day after tomorrow'

export const Card = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState({
    forecast: '',
    city: "",
    temp_current: "",
    temp_avg: "",
    mintemp_c: "",
    maxtemp_c: "",
    icon_url: "",
  });

  useEffect(() => {
    getWeather(today)
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
        <h2>{state.city.toUpperCase()}</h2>
        <div className="buttons-section">
          <button className="forecast-button" onClick={() => getWeather(today)}>Today</button>
          <button className="forecast-button" onClick={() => getWeather(tomorrow)}>Tomorrow</button>
          <button className="forecast-button" onClick={() => getWeather(dayAfterTomorrow)}>Day After Tomorrow</button>
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
              {state.forecast === today ?
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
