import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers'
import request from '../reducers/request'
import { createStore, combineReducers, applyMiddleware } from 'redux';

const store = createStore(
  combineReducers({app: reducer, request: request}),
  applyMiddleware(thunkMiddleware)
)

export default store