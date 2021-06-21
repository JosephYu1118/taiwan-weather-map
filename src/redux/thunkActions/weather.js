import apiMap from '@/lib/apiMap';
import fetch from '@/redux/fetch';
import actionCreators from '@/redux/actions/weather';

const { fetchWeatherDataSuccess, fetchWeatherDataFailure } = actionCreators;

const thunkActionCreators = {
  fetchWeatherData: fetch(
    apiMap.fetchWeatherData,
    [fetchWeatherDataSuccess, fetchWeatherDataFailure],
    'get',
  ),
};

export default thunkActionCreators;
