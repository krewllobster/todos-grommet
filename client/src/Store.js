import { createStore } from 'redux';
import rootReducer from './reducers/RootReducer'

let auth_token = JSON.parse(localStorage.getItem('todo_auth_token'))

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
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
