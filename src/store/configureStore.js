import { createStore, applyMiddleware } from 'redux'
import { articlesReducer } from '../reducers'



export default function configureStore(initialState) {
  const store = createStore(articlesReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
};