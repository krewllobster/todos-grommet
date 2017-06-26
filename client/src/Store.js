import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducer'

let auth_token = JSON.parse(localStorage.getItem('todo_auth_token'))

const loggerMiddleware = createLogger()

const buildStore = {
  auth: {
    authError: false,
    authErrorMessage: '',
    apiKey: auth_token,
    loading: false,
  }
}

const store = createStore(
  rootReducer,
  buildStore,
  applyMiddleware(
    thunk,
    loggerMiddleware
  )
)

export default store;
