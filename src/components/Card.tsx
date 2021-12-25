import React, { useState, useEffect } from "react"
import { getForecast } from '../api/Forecast'
import { DateTime } from 'luxon'

interface IDataWeather{
  [key: string]:any
}

export const Card = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [city, setCity] = useState('Одесса');
  const [dataWeather, setDataWeather] = useState<IDataWeather>({});

  useEffect(() => {
    showForecast(city)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showForecast = async (city: any) => {
    setIsLoading(true);
    const data:any = await getForecast(city)
    setIsLoading(false);
    setDataWeather({
      ...dataWeather,
      ...data,
    })
  }

  const getWeekDay = (date:any) => DateTime.fromISO(date).setLocale('en').toLocaleString({ weekday: 'long' })
  const handleChange = (e:any) => setCity(e.target.value)
  const onSubmit = (e:any) => {
    e.preventDefault()
    showForecast(city)
  }

  return (
    <div className="card">
      <div className="card-top-section">
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
          dataWeather?.forecast?.forecastday?.map((item:any, index:any) => {
            return (
              <React.Fragment key={index}>
                <div className="info-section">
                  <div className="info-section-day">
                    {index === 0 ? <p>Today</p> : <p>{getWeekDay(item.date)}</p>}
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
