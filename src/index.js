import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import App from './App';

ReactDOM.render(
  <Router>
    <Provider store={configureStore}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);
