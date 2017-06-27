import fetchMock from 'fetch-mock'
import * as actions from '../registerActions'
import mockStore from 'redux-mock-store'
import {
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_FAILURE,
  FETCH_REGISTER_SUCCESS,

} from '../registerActions'

const mockResultSuccess = {
  auth_token: 'asdf'
}

const mockResultFailure = {
  message: 'boo'
}

const urlQueryParams = 'email=test@test.com&password=test'

describe('async-actions', () => {
  it('calls register request and success action if response was successful', () => {

    fetchMock.postOnce(
      `/register?${urlQueryParams}`,
      mockResultSuccess
    )

    const expectedActions = [
      { type: FETCH_REGISTER_REQUEST },
      { type: FETCH_REGISTER_SUCCESS, apiKey: 'asdf' }
    ]

    const store = mockStore({ auth: { apiKey: null} })

    return store.dispatch(actions.fetchRegister(urlQueryParams))
      .then((data) => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('calls register request and failure action if response was unsuccessful', () => {

    fetchMock.postOnce(
      `/register?${urlQueryParams}`,
      mockResultFailure
    )

    const expectedActions = [
      { type: FETCH_REGISTER_REQUEST },
      { type: FETCH_REGISTER_FAILURE, authErrorMessage: 'boo'}
    ]

    const store = mockStore({ auth: { authErrorMessage: ''} })

    return store.dispatch(actions.fetchRegister(urlQueryParams))
      .then((data) => {
        expect(store.getActions()).toEqual(expectedActions)
      })

  })
})


describe('actions', () => {
  it('should create an action to submit register info', () => {
    const expectedAction = {
      type: FETCH_REGISTER_REQUEST,
    }
    expect(actions.fetchRegisterRequest())
    .toEqual(expectedAction)
  })

  it('should create an action with an error message', () => {
    const expectedAction = {
      type: FETCH_REGISTER_FAILURE,
      authErrorMessage: 'there was an error'
    }
    expect(actions.fetchRegisterFailure('there was an error'))
    .toEqual(expectedAction)
  })

  it('should create an action with an apiKey', () => {
    const expectedAction = {
      type: FETCH_REGISTER_SUCCESS,
      apiKey: 'asdf'
    }
    expect(actions.fetchRegisterSuccess('asdf'))
    .toEqual(expectedAction)
  })
})
