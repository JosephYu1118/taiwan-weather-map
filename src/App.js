import React from 'react';

import Test from '@/components/Test';
import Loading from '@/components/Loading';
import Toast from '@/components/Toast';
import '@/assets/styles/base.scss';

const App = () => (
  <div id="app">
    <Test />
    <Loading />
    <Toast />
  </div>
);

export default App;
