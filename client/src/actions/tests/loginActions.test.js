import fetchMock from 'fetch-mock'
import * as actions from '../loginActions'
import mockStore from 'redux-mock-store'
import {
  FETCH_LOGIN_REQUEST,
  LOGOUT,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_SUCCESS,
} from '../loginActions'

describe('async-actions', () => {

  const params = 'email=test@test.com&password=test'

  afterEach(() => {
    fetchMock.restore()
  })

  it('should handle FETCH_LOGIN_FAILURE action', () => {
    const store = mockStore({auth: {authErrorMessage: null}})
    fetchMock.postOnce(
      `/auth/login?${params}`,
      { message: 'invalid credentials'}
    )
    return store.dispatch(actions.fetchLogin(params))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot()
      })
  })

  it('should handle FETCH_LOGIN_SUCCESS action', () => {
    const store = mockStore({auth: {apiKey: null}})
    fetchMock.postOnce(
      `/auth/login?${params}`,
      { auth_token: 'asdf'}
    )
    return store.dispatch(actions.fetchLogin(params))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot()
      })
  })
})

describe('actions', () => {
  it('creates fetch login request action', () => {
    expect(actions.fetchLoginRequest()).toMatchSnapshot()
  })

  it('creates fetch login success action', () => {
    expect(actions.fetchLoginSuccess('fake_apiKey')).toMatchSnapshot()
  })

  it('creates fetch login failure action', () => {
    expect(actions.fetchLoginFailure('fake_authErrorMessage')).toMatchSnapshot()
  })

  it('creates logout action', () => {
    expect(actions.logout()).toMatchSnapshot()
  })
})
