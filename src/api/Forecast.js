import axios from "axios";

const API_KEY = "12a20f85151e42448cb175826212010";
const city = "Odessa,ua";
const url = 'https://api.weatherapi.com/v1/forecast.json?key='

const forecastDaily = async (forecast) => {
    const today = 'today'
    const tomorrow = 'tomorrow'
    const dayAfterTomorrow = 'day after tomorrow'
    let days;
    switch (forecast) {
        case today:
            days = 1
            break;
        case tomorrow:
            days = 2
            break;
        case dayAfterTomorrow:
            days = 3
            break;
        default:
            days = 1
            break;
    }
    const fetchURL = `${url}${API_KEY}&q=}${city}&days=${days}`
    const response = await axios(fetchURL)
    const data = await response.data
    console.log('data ==> ', data)
    const forecastday = days - 1;
    const { avgtemp_c, mintemp_c, maxtemp_c } = data.forecast.forecastday[forecastday].day
    const icon_url = data.forecast.forecastday[forecastday].day.condition.icon

    const newData = {
        forecast: forecast,
        city: data.location.name,
        temp_current: data.current.temp_c,
        temp_avg: avgtemp_c,
        mintemp_c: mintemp_c,
        maxtemp_c: maxtemp_c,
        icon_url: icon_url,
    };
    return newData;
}

export { forecastDaily }
