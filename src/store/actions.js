import { actionCreator } from './lib';


const ADD_LABEL = actionCreator('ADD_LABEL', label => label);
const ADD_CARD = actionCreator('ADD_CARD', card => card);
const ADD_FILTER = actionCreator('ADD_FILTER', filter => filter);


export { ADD_LABEL, ADD_CARD, ADD_FILTER };
