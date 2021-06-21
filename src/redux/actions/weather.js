import { weather } from '@/lib/actionTypes';

const { FETCH_WEATHER_DATA_SUCCESS, FETCH_WEATHER_DATA_FAILURE } = weather;

const actionCreators = {
  fetchWeatherDataSuccess: (payload) => ({ type: FETCH_WEATHER_DATA_SUCCESS, payload }),
  fetchWeatherDataFailure: (payload) => ({ type: FETCH_WEATHER_DATA_FAILURE, payload }),
};

export default actionCreators;
