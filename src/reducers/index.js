import {combineReducers} from 'redux'

import mathReducer from './mathReducer';
import userReducer from './userReducer';
import shoppingReducer from './shoppingReducer'

const rootReducers = combineReducers({
    mathReducer, 
    userReducer,
    shoppingReducer
  }) 

  export default rootReducers;