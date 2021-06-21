import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import middleware from '@/redux/middleware';
import rootReducer from '@/redux/reducers';

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk, middleware));

export default createStore(rootReducer, enhancer);
