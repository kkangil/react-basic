import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import reducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// redux 개발자도구를 사용하기
// https://github.com/zalmoxisus/redux-devtools-extension
const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers,reduxDev);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
);
