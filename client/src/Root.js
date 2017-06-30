import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Account from './containers/Account'
import Register from './containers/Register'
import Login from './containers/Login'

const Root = ({ store }) => {
  const loggedIn = store.getState().auth.apiKey === localStorage.getItem('todo_auth_token')
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => (
              loggedIn ? (
                <Redirect to="/account/todos" />
              ) : (
                <Redirect to="/login" />
              )
            )}/>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
