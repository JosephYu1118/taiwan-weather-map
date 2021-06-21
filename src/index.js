import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import initAxios from '@/config/initAxios';
import store from '@/redux/store';
import App from '@/App';

initAxios(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
