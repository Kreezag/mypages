import isFunction from 'lodash/isFunction';



export const actionCreator = (type, payloadFactory = () => {}) => {
  if (typeof payloadFactory !== 'function') {
    console.warn(`action factory as ${payloadFactory} in not a function`);
    return;
  }

  if (typeof type === 'function') {
    console.warn(`type as ${type} in must be not a function`);

    return;
  }

  return (...args) => ({
    type,
    payload: payloadFactory(...args),
  });
};

export const createReducer = (initialState, action) => {
  const prevState = initialState || {};
  let payload = action.payload;

  if (action.type) {
    if (isFunction(action.payload)) {
      payload = action.payload();
    }

    return Object.assign(prevState, payload);
  }

  return initialState;
};
