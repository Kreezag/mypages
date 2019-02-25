import { createReducer } from './lib.js';
import { ADD_LABEL_ACTION, ADD_CARD_ACTION, ADD_FILTER_ACTION } from './actions';


export const addLabelReducer = createReducer({ label: null }, {
  [ADD_LABEL_ACTION]: ({ state, action }) => Object.assign(state, action()),
});

export const addCardReducer = createReducer({ label: null }, {
  [ADD_CARD_ACTION]: ({ state, action }) => Object.assign(state, action()),
});

export const addFilterReducer = createReducer({ label: null }, {
  [ADD_FILTER_ACTION]: ({ state, action }) => Object.assign(state, action()),
});



// export const addLabelReducer = initialState => createReducer(initialState, ADD_LABEL);
// export const addCardReducer = initialState => createReducer(initialState, ADD_CARD);
// export const addFilterReducer = initialState => createReducer(initialState, ADD_FILTER);
