import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux';

const store = createStore(
  combineReducers({reducer}),
  applyMiddleware(thunkMiddleware)
)

export default store