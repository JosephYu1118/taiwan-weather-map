import { weather } from '@/lib/actionTypes';

const { FETCH_WEATHER_DATA_SUCCESS, FETCH_WEATHER_DATA_FAILURE } = weather;

const initState = {
  weatherData: null,
  period: null,
  lastQueryTime: '',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA_SUCCESS: {
      const locationDataList = action.payload.records.location;
      const weatherData = {};
      const period = {};
      locationDataList.forEach(({ locationName, weatherElement }) => {
        const weatherElementInfo = weatherElement.reduce((previousResult, { elementName, time }) => {
          const currentResult = { ...previousResult };
          const { startTime, endTime, parameter: { parameterName } } = time[0];
          if (!period.startTime) {
            period.startTime = startTime;
          }
          if (!period.endTime) {
            period.endTime = endTime;
          }
          currentResult[elementName] = parameterName;
          return currentResult;
        }, {});
        weatherData[locationName] = weatherElementInfo;
      });

      return {
        ...state,
        weatherData,
        period,
        lastQueryTime: Date.now(),
      };
    }
    case FETCH_WEATHER_DATA_FAILURE: {
      return {
        ...state,
        weatherData: initState.weatherData,
        period: initState.period,
        lastQueryTime: initState.lastQueryTime,
      };
    }
    default:
      return state;
  }
};

export default reducer;
