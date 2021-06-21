import { combineReducers } from 'redux';

import view from './view';
import weather from './weather';

const rootReducer = combineReducers({
  view,
  weather,
});

export default rootReducer;
