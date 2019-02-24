import { combineReducers } from 'redux';
import { combineReducers as myCombineReducers } from '../lib/myRedux';
import { addLabelReducer, addCardReducer, addFilterReducer } from './reducers';


export const myReducers = myCombineReducers({
  label: addLabelReducer,
  card: addCardReducer,
  filter: addFilterReducer,
});
