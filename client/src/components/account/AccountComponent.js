import React, { Component } from 'react'
import { NavLink, Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'
import Todos from '../../containers/Todos'
import User from '../../containers/User'

class AccountComponent extends Component {

  componentDidMount() {
    console.log('account mounted')
  }

  render() {

    const { apiKey, todos, logout } = this.props

    if (apiKey === null) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        <Menu color='teal' stackable textAlign='center'>
          <Menu.Item as={NavLink} to={{pathname: '/account/todos'}}>
            <Icon name='list layout' />
            Todos
          </Menu.Item>
          <Menu.Item as={NavLink} to={{pathname: '/account/settings'}}>
            <Icon name='user' />
            Settings
          </Menu.Item>
          <Menu.Item position='right' onClick={() => logout()}>
            Logout
          </Menu.Item>

        </Menu>
        <Route path="/account/settings" component={User} />
        <Route path="/account/todos" component={Todos} />
      </div>
    );
  }
}

export default AccountComponent;
