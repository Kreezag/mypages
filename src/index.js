import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { articlesReducer } from './reducers'



const store = configureStore(articlesReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
