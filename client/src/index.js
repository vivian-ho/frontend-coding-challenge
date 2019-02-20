/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();*/




// @flow

import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
/* eslint-disable-next-line no-unused-vars */
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

// App
import App from './containers/App';
import reducer from './reducers';

// hash history object
const history = createHistory();

const middleware = [routerMiddleware(history), thunk];

const store = createStore(
  reducer,
  compose(applyMiddleware(...middleware)),
);

const root = document.getElementById('root');
if (root !== null) {
  render(
    (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={App} />
      </ConnectedRouter>
    </Provider>
    ), root,
  );
}
