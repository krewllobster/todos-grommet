import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from '../loginActions'
import {
  FETCH_LOGIN_REQUEST,
  LOGOUT,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_SUCCESS,
} from '../loginActions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockResultSuccess = {
  auth_token: 'asdf'
}

const mockResultFailure = {
  message: 'boo'
}

const urlQueryParams = 'email=test@test.com&password=test'

describe('async-actions', () => {
  it('calls login request and success action if response was successful', () => {

    fetchMock.postOnce(
      `auth/login?${urlQueryParams}`,
      mockResultSuccess
    )

    const expectedActions = [
      { type: FETCH_LOGIN_REQUEST },
      { type: FETCH_LOGIN_SUCCESS, apiKey: 'asdf' }
    ]

    const store = mockStore({ auth: { apiKey: null} })

    return store.dispatch(actions.fetchLogin(urlQueryParams))
      .then((data) => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('calls login request and failure action if response was unsuccessful', () => {

    fetchMock.postOnce(
      `auth/login?${urlQueryParams}`,
      mockResultFailure
    )

    const expectedActions = [
      { type: FETCH_LOGIN_REQUEST },
      { type: FETCH_LOGIN_FAILURE, authErrorMessage: 'boo'}
    ]

    const store = mockStore({ auth: { authErrorMessage: ''} })

    return store.dispatch(actions.fetchLogin(urlQueryParams))
      .then((data) => {
        expect(store.getActions()).toEqual(expectedActions)
      })

  })
})

describe('actions', () => {
  const store=mockStore({})
  expect(store.dispatch(actions.fetchLoginRequest())).toMatchSnapshot()
  expect(store.dispatch(actions.fetchLoginSuccess('fake_auth_token'))).toMatchSnapshot()
  expect(store.dispatch(actions.fetchLoginFailure('fake_auth_error_message'))).toMatchSnapshot()
  expect(store.dispatch(actions.logout())).toMatchSnapshot()
})
