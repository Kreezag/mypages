'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import { reducers } from './src/store'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducers, {});





render((
  <Provider store={store}>
    <App/>
  </Provider>
  ),
  document.getElementById('react-root')
);
