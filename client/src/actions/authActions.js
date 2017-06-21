export const SUBMIT_REGISTER = 'SUBMIT_REGISTER'
export const SUBMIT_REGISTER_SUCCESS = 'SUBMIT_REGISTER_SUCCESS'
export const SUBMIT_REGISTER_FAILURE = 'SUBMIT_REGISTER_FAILURE'
export const LOGOUT = 'LOGOUT'
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN'
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS'
export const SUBMIT_LOGIN_FAILURE = 'SUBMIT_LOGIN_FAILURE'

export const submitRegister = () => ({
  type: SUBMIT_REGISTER
})

export const submitRegisterSuccess = (apiKey) => ({
  type: SUBMIT_REGISTER_SUCCESS,
  apiKey,
})

export const submitRegisterFailure = (authErrorMessage) => ({
  type: SUBMIT_REGISTER_FAILURE,
  authErrorMessage,
})

export const logout = () => ({
  type: LOGOUT,
})

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
})

export const submitLoginSuccess = (apiKey) => ({
  type: SUBMIT_LOGIN_SUCCESS,
  apiKey,
})

export const submitLoginFailure = (message) => ({
  type: SUBMIT_LOGIN_FAILURE,
  message,
})
