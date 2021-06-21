import React from 'react';

import Weather from '@/pages/Weather';
import Loading from '@/components/Loading';
import Toast from '@/components/Toast';
import '@/assets/styles/base.scss';

const App = () => (
  <div id="app">
    <Weather />
    <Loading />
    <Toast />
  </div>
);

export default App;
