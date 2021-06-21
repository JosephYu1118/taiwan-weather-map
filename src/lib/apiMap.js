const openWeatherDataApiKey = process.env.OPEN_WEATHER_DATA_API_KEY;

const apiMap = {
  fetchWeatherData: `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${openWeatherDataApiKey}`,
};

export default apiMap;
