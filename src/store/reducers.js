import { createReducer } from './lib.js';
import { ADD_LABEL_ACTION, ADD_CARD_ACTION, ADD_FILTER_ACTION } from './actions';


// export const addReducer = createReducer({ label: null }, {
//   [ADD_LABEL_ACTION]: ({ state, action }) => Object.assign(state, { label: action.payload() }),
//   [ADD_CARD_ACTION]: ({ state, action }) => Object.assign(state, { card: action.payload() }),
//   [ADD_FILTER_ACTION]: ({ state, action }) => Object.assign(state, { filter: action.payload() }),
// });


export const addLabelReducer = (state = {}, action) => {
  if (action.type === ADD_LABEL_ACTION) {
    return Object.assign(state, action.payload);
  }

  return state;
};


export const addCardReducer = (state = {}, action) => {
  if (action.type === ADD_CARD_ACTION) {
    return Object.assign(state, action.payload);
  }

  return state;
};


export const addFilterReducer = (state = {}, action) => {
  if (action.type === ADD_FILTER_ACTION) {
    return Object.assign(state, action.payload);
  }

  return state;
};
