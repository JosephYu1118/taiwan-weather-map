import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import thunkActionCreators from '@/redux/thunkActions/weather';
import WeatherElementInfo from '@/components/WeatherElementInfo';
import TaiwanMap from '@/components/TaiwanMap';

import './index.scoped.scss';

const getTimeFormat = (source, type = 'time') => {
  if (!source || !source.length) return '';
  const [date, tempTime] = source.split(' ');
  const time = tempTime.split(':');

  if (type === 'date') return date;

  return `${time[0]}:${time[1]}`;
};

const Weather = () => {
  const dispatch = useDispatch();

  const weatherData = useSelector((state) => state.weather.weatherData);
  const period = useSelector((state) => state.weather.period);
  const lastQueryTime = useSelector((state) => state.weather.lastQueryTime);

  const [currentLocation, setCurrentLocation] = useState('');
  const [weatherElementInfo, setWeatherElementInfo] = useState({
    CI: '',
    MaxT: '',
    MinT: '',
    PoP: '',
    Wx: '',
  });
  const [formattedPeriod, setFormattedPeriod] = useState({
    date: '',
    time: '',
  });

  useEffect(() => {
    const currentTime = Date.now();
    const timeDifference = (currentTime - lastQueryTime) / (1000 * 60);
    if (timeDifference > 1) {
      dispatch(thunkActionCreators.fetchWeatherData());
    }
  }, [dispatch, lastQueryTime, currentLocation]);

  useEffect(() => {
    if (!weatherData || !currentLocation) return;
    setWeatherElementInfo(weatherData[currentLocation]);
  }, [weatherData, currentLocation]);

  useEffect(() => {
    if (!period) return;
    const date = getTimeFormat(period.startTime, 'date');
    const startTime = getTimeFormat(period.startTime);
    const endTime = getTimeFormat(period.endTime);
    setFormattedPeriod({
      date,
      time: `${startTime}~${endTime}`,
    });
  }, [period]);

  return (
    <div className="weather">
      <h1>
        Taiwan
        <br />
        Weather Map
      </h1>
      <div className="time-block">
        <p className="date">{formattedPeriod.date}</p>
        <p>{formattedPeriod.time}</p>
      </div>
      <WeatherElementInfo
        locationName={currentLocation || '請選取城市'}
        CI={weatherElementInfo.CI}
        MaxT={weatherElementInfo.MaxT}
        MinT={weatherElementInfo.MinT}
        PoP={weatherElementInfo.PoP}
        Wx={weatherElementInfo.Wx}
      />
      <TaiwanMap setCurrentLocation={setCurrentLocation} />
    </div>
  );
};

export default Weather;
