import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import tableApp from './reducers/index';
import './index.css';


let store = createStore(tableApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
