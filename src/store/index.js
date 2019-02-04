import { combineReducers } from 'redux';
import { addLabelReducer, addCardReducer, addFilterReducer } from './reducers';
import { ADD_LABEL, ADD_CARD, ADD_FILTER } from './actions';


export const reducers = combineReducers({
  addLabelReducer,
  addCardReducer,
  addFilterReducer,
});
