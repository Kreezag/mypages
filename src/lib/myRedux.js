import isFunction from 'lodash/isFunction';



class Store {
  constructor (reducer) {
    this.subscribers = [];
    this.store = {};
    this.reducer = reducer;
    this.dispatch({ type: '@@INIT' });
  }

  dispatch (action) {
    const result = this.reducer(this.store, action);

    if (this.subscribers.length) {
      this.subscribers.forEach((subscriber) => {
        subscriber();
      });
    }

    this.store = result;

    return action;
  }

  subscribe (subscriber) {
    this.subscribers.push(subscriber);
  }

  unSubscribe () {
    this.subscribers = [];
  }

  getState () {
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
