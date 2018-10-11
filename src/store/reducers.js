import { createReducer } from './lib.js';
import { ADD_LABEL, ADD_CARD, ADD_FILTER } from './actions';


export const addLabelReducer = (initialState) => createReducer(initialState, ADD_LABEL);
export const addCardReducer = (initialState) => createReducer(initialState, ADD_CARD);
export const addFilterReducer = (initialState) => createReducer(initialState, ADD_FILTER);
