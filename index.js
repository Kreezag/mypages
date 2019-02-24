'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import { myReducers } from './src/store'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const myStore = createStore(myReducers);

console.log(myStore.getState());

// myStore.subscribe(() => console.log(myStore.getState()));


render((
  <Provider store={myStore}>
    <App/>
  </Provider>
  ),
  document.getElementById('react-root')
);
