import React from 'react';

import './index.scoped.scss';

const WeatherElementInfo = ({
  locationName,
  CI,
  MaxT,
  MinT,
  PoP,
  Wx,
}) => (
  <div className="weather-element-info">
    <h3 className="location-name">{locationName}</h3>
    <div className="row">
      <p className="title">氣候概況：</p>
      <p className="weather-description">{Wx}</p>
    </div>
    <div className="row">
      <p className="title">氣溫：</p>
      {(MinT && MaxT) && (
        <p className="temperature">
          {MinT}
          ℃~
          {MaxT}
          ℃
        </p>
      )}
    </div>
    <div className="row">
      <p className="title">舒適度：</p>
      <p className="comfort-index">{CI}</p>
    </div>
    <div className="row">
      <p className="title">降雨機率：</p>
      {PoP && (
        <p className="probability-of-precipitation">
          {PoP}
          %
        </p>
      )}
    </div>
  </div>
);

export default WeatherElementInfo;
