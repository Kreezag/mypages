
export const actionCreator = (type, actionFactory = () => {}) => {
  if (typeof actionFactory !== 'function') {
    console.warn(`action factory as ${actionFactory} in not a function`);
    return;
  }

  if (typeof type === 'function') {
    console.warn(`type as ${type} in must be not a function`);

    return;
  }

  return ({
    type,
    payload: actionFactory(),
  });
};

export const createReducer = (initialState, action) => {
  const prevState = initialState || {};

  if (action.type) {
    return Object.assign(prevState, action.payload);
  }

  return initialState;
};
