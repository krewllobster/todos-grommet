import {
  SUBMIT_REGISTER,
  SUBMIT_REGISTER_SUCCESS,
  SUBMIT_REGISTER_FAILURE,
  SUBMIT_LOGIN,
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGIN_FAILURE,
  LOGOUT,
} from '../actions/authActions.js'


const saveJWT = (JWT) => {
  localStorage.setItem('todo_auth_token', JSON.stringify(JWT))
}

const removeJWT = () => {
  localStorage.removeItem('todo_auth_token')
}

const auth = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_REGISTER:
      return {...state, loading: true}
    case SUBMIT_REGISTER_SUCCESS:
      saveJWT(action.apiKey)
      return {
        ...state,
        loading: false,
        authError: false,
        authErrorMessage: '',
        apiKey: action.apiKey,
      }
    case SUBMIT_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        authError: true,
        authErrorMessage: action.authErrorMessage,
      }
    case SUBMIT_LOGIN:
      return {
        ...state, loading: true
      }
    case SUBMIT_LOGIN_SUCCESS:
      saveJWT(action.apiKey)
      return {
        ...state,
        loading: false,
        authError: false,
        authErrorMessage: '',
        apiKey: action.apiKey,
      }
    case SUBMIT_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        authError: true,
        authErrorMessage: action.message,
      }
    case LOGOUT:
      removeJWT()
      return {
        ...state,
        loading: false,
        authError: false,
        apiKey: null,
      }
    default:
      return state
  }
}

export default auth;
