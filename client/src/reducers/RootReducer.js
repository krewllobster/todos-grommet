import { combineReducers } from 'redux'
import auth from './auth.js'
import todos from './todos.js'
import user from './user.js'

const rootReducer = combineReducers({auth, todos, user})

export default rootReducer
