export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST'
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS'
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const logout = () => ({
  type: LOGOUT,
})

export const fetchLoginRequest = () => ({
  type: FETCH_LOGIN_REQUEST,
})

export const fetchLoginSuccess = (apiKey) => ({
  type: FETCH_LOGIN_SUCCESS,
  apiKey,
})

export const fetchLoginFailure = (authErrorMessage) => ({
  type: FETCH_LOGIN_FAILURE,
  authErrorMessage,
})

export const fetchLogin = (urlQueryParams) => {
  return (dispatch) => {
    dispatch(fetchLoginRequest())

    return fetch(`/auth/login?${urlQueryParams}`, {
      method: 'post',
    })
    .then(
      response => response.json()
    )
    .then(json => {
      if (json.auth_token) {
        dispatch(fetchLoginSuccess(json.auth_token))
      } else {
        dispatch(fetchLoginFailure(json.message))
      }
    })
  }
}
