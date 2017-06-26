
export const FETCH_REGISTER_REQUEST = 'FETCH_REGISTER_REQUEST'
export const FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS'
export const FETCH_REGISTER_FAILURE = 'FETCH_REGISTER_FAILURE'


export const fetchRegisterRequest = () => ({
  type: FETCH_REGISTER_REQUEST
})

export const fetchRegisterSuccess = (apiKey) => ({
  type: FETCH_REGISTER_SUCCESS,
  apiKey,
})

export const fetchRegisterFailure = (authErrorMessage) => ({
  type: FETCH_REGISTER_FAILURE,
  authErrorMessage,
})

export const fetchRegister = (urlQueryParams) => {
  return (dispatch) => {
    dispatch(fetchRegisterRequest())

    return fetch(`/register?${urlQueryParams}`, {
      method: 'post',
    })
    .then(
      response => response.json()
    )
    .then(json => {
      if (json.auth_token) {
        dispatch(fetchRegisterSuccess(json.auth_token))
      } else {
        dispatch(fetchRegisterFailure(json.message))
      }
    })
  }
}
