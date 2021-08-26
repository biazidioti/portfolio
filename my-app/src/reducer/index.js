import { combineReducers } from 'redux';
import search from './search';
import cardGrid from './cardGrid';

const rootReducer = combineReducers({ search, cardGrid });

export default rootReducer;