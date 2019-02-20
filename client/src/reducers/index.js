// @flow

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

const appReducer = combineReducers({
  router,
});

export default (state: State | void, action: Action): State => {
  

  return appReducer(state, action);
};