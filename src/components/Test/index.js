import React from 'react';

import './index.scoped.scss';

const Test = () => (
  <div className="image-test">
    <img className="logo-react" src={require('@/assets/images/logo-react.png')} alt="" />
    <div className="logo-webpack" />
    <p className="text">文字字體測試</p>
  </div>
);

export default Test;
