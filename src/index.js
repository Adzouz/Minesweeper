import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import './assets/stylesheets/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

serviceWorker.register();

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
