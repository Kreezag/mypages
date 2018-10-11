
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
    payload: actionFactory()
  })

};

export const createReducer = (initialState, action) => () => {
  let state = {};

  if (action.type) {
    state = Object.assign(initialState, action.payload);
  }

  return state || initialState;
};

