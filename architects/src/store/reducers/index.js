import { combineReducers } from 'redux';
import { architectsReducer } from './architects';
import { pageReducer } from './page';


export const rootReducer = combineReducers({
  architects: architectsReducer,
  page: pageReducer,
});
