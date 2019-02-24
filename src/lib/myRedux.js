import isFunction from 'lodash/isFunction';

// createStore(reducer, [preloadedState], [enhancer])
// combineReducers(reducers)
// applyMiddleware(...middlewares)
// bindActionCreators(actionCreators, dispatch)
// compose(...functions)



// Store
// getState()
// dispatch(action)
// subscribe(listener)
// replaceReducer(nextReducer)
// action = { type: TYPE, payload: *, meta: ** }


class Store {
  constructor (reducer = () => {}, initialState = {}) {
    this.reducer = reducer;
    this.store = initialState;
  }


  dispatch (action) {
    const result = this.reducer(this.store, action);

    console.log('result', result);

    this.store = result;
  }

  // subscribe () {}

  // replaceReducer () {}

  getState () {
    console.log('work this file');

    console.log(this.store);

    return this.store;
  }
}

const combineReducers = (reducers) => {
  const filteredReducersKeys = Object.keys(reducers).filter((key) => isFunction(reducers[key]));

  return (state = {}, action) => {

    const newState = state;

    for (let i = 0; i < filteredReducersKeys.length; i++) {
      const key = filteredReducersKeys[i];
      const currentReducer = reducers[key];

      if (isFunction(currentReducer)) {
        newState[key] = currentReducer(newState[key], action);
      }
    }

    return newState;
  };
};


export default Store;
export { combineReducers };
