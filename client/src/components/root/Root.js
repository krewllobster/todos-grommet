import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Menu, Container } from 'semantic-ui-react'
import App from '../app/App'
import Register from '../register/Register'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Menu widths={3}>
          <Menu.Item >
            Logo
          </Menu.Item>
          <Menu.Item as={Link} to='/'>
            Home
          </Menu.Item>
          <Menu.Item as={Link} to='/register'>
            Register
          </Menu.Item>
        </Menu>
        <Route exact path="/" component={App} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
