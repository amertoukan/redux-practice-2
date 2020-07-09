import {createStore, applyMiddleware} from 'redux'
import {createLogger as logger} from 'redux-logger'
import rootReducers from '../reducers/index'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
const myLogger = (store) => next => action => {
    console.log('Action: ', action)
    next(action)
  }
const store = createStore(rootReducers, {}, applyMiddleware(logger(), thunk, promise));

export default (store)