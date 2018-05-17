import { FETCH_WEATHER } from '../constans/constans';
import axios from 'axios';

const API_KEY = '71431a725d2619880cf20bae7950fb28'
const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//q=London,us

export function fetchWeather(city){
  const url = `${WEATHER_ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('Request', request);
  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
