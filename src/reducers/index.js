import { combineReducers } from 'redux';

import authReducer from './AuthReducer';
//this is where we will import the main reducer

const reducers = combineReducers({
  auth: authReducer
});

export default reducers;
