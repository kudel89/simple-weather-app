import axios from "axios";
import { API_KEY, API_BASE_URL, DAYS_3 } from './config'

const getForecast = async (city) => {
    const fetchURL = `${API_BASE_URL}${API_KEY}&q=${city}&days=${DAYS_3}`
    try {
        const response = await axios(fetchURL)
        const data = await response.data
        // console.log('data ==> ', data)
        return data
    }
    catch {
        return { error: true }
    }
}

export { getForecast }
