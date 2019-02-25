'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import { myReducers, ACTION_CREATORS } from './src/store'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const myStore = createStore(myReducers);


myStore.subscribe(() => console.log(myStore.getState()));



const testAction = ACTION_CREATORS.ADD_LABEL_ACTION_CREATOR('test');


console.log(myStore.dispatch(testAction));

console.log(myStore.getState());


render((
  <Provider store={myStore}>
    <App/>
  </Provider>
  ),
  document.getElementById('react-root')
);
