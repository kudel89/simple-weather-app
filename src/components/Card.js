import React, { useState, useEffect } from "react";
import { getForecast } from '../api/Forecast'
import moment from 'moment';

export const Card = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState('Одесса');
  const [dataWeather, setDataWeather] = useState({});

  const showForecast = async (city) => {
    setIsLoading(true);
    const data = await getForecast(city)
    setIsLoading(false);
    setDataWeather({
      dataWeather,
      ...data,
    })
  }

  const getDay = (date) => {
    const day = moment(date).format('dddd')
    return day
  }

  useEffect(() => {
    showForecast(city)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    showForecast(city)
  }

  return (
    <div className="card">
      <div className="card-top-section">
        <h2>{dataWeather?.location?.name.toUpperCase()}</h2>
        <form className="form">
          <input className="form-input" onChange={handleChange} value={city} />
          <button className="form-search-btn" onClick={onSubmit}>Search</button>
        </form>
      </div>
      <div className="days-section">
        {dataWeather.error && <p>Incorrect request. Please, enter the correct city name.</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          dataWeather?.forecast?.forecastday?.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="info-section">
                  <div className="info-section-day">
                    {index === 0 ? <p>Today</p> : <p>{getDay(item.date)}</p>}
                    <img src={item.day.condition.icon} alt={item.day.condition.text} />
                  </div>
                  <div className="info-section-temperature">
                    <p className="text-temperature">{item.day.mintemp_c}<br /><span>Min</span></p>
                    {index === 0 ?
                      <p className="text-temperature text-temperature-big">{dataWeather.current.temp_c}<br /><span>Current</span></p> :
                      <p className="text-temperature text-temperature-big">{item.day.avgtemp_c}<br /><span>Average</span></p>
                    }
                    <p className="text-temperature">{item.day.maxtemp_c}<br /><span>Max</span></p>
                  </div>
                </div>
              </React.Fragment>
            )
          })
        )}
      </div>
    </div>
  );
};
