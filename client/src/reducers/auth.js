import {
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
} from '../actions/registerActions'

import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  LOGOUT,
} from '../actions/loginActions.js'

const saveJWT = (JWT) => {
  localStorage.setItem('todo_auth_token', JSON.stringify(JWT))
}

const removeJWT = () => {
  localStorage.removeItem('todo_auth_token')
}

const auth = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REGISTER_REQUEST:
      return {...state, loading: true}
    case FETCH_REGISTER_SUCCESS:
      saveJWT(action.apiKey)
      return {
        ...state,
        loading: false,
        authError: false,
        authErrorMessage: '',
        apiKey: action.apiKey,
      }
    case FETCH_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        authError: true,
        authErrorMessage: action.authErrorMessage,
      }
    case FETCH_LOGIN_REQUEST:
      return {
        ...state, loading: true
      }
    case FETCH_LOGIN_SUCCESS:
      saveJWT(action.apiKey)
      return {
        ...state,
        loading: false,
        authError: false,
        authErrorMessage: '',
        apiKey: action.apiKey,
      }
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        authError: true,
        authErrorMessage: action.authErrorMessage,
      }
    case LOGOUT:
      removeJWT()
      return undefined
    default:
      return state
  }
}

export default auth;
