// import { combineReducers } from 'redux';
import { combineReducers as myCombineReducers } from '../lib/myRedux';
import { addLabelReducer, addCardReducer, addFilterReducer } from './reducers';
import { ADD_LABEL_ACTION_CREATOR, ADD_CARD_ACTION_CREATOR, ADD_FILTER_ACTION_CREATOR } from './actions';


export const myReducers = myCombineReducers({
  label: addLabelReducer,
  card: addCardReducer,
  filter: addFilterReducer,
});

export const ACTION_CREATORS = {
  ADD_LABEL_ACTION_CREATOR,
  ADD_CARD_ACTION_CREATOR,
  ADD_FILTER_ACTION_CREATOR,
};
