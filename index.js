'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import { myReducers, ACTION_CREATORS } from './src/store'
import { Provider } from 'react-redux';
import Store from './src/lib/myRedux';

const myStore = new Store(myReducers);


myStore.subscribe(() => console.log(myStore.getState()));



const testAction = ACTION_CREATORS.ADD_LABEL_ACTION_CREATOR({ name: 'test' });


console.log('+', myStore.dispatch(testAction));

console.log(myStore.getState());


render((
  <Provider store={myStore}>
    <App/>
  </Provider>
  ),
  document.getElementById('react-root')
);
