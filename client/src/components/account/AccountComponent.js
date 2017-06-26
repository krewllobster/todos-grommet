import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import { Container, Sidebar, Menu, Icon, Segment, Form, Input } from 'semantic-ui-react'
import TodoList from '../todos/TodoList'
import User from '../../containers/User'
import SingleTodo from '../todos/SingleTodo'

class AccountComponent extends Component {

  constructor(props) {
    super(props)

    this.state={
      visible: true,
    }

    this.toggleVisible = this.toggleVisible.bind(this)
  }

  toggleVisible() {
    this.setState({visible: !this.state.visible})
  }

  render() {

    const { apiKey, logout, todos, match } = this.props
    const { visible } = this.state

    const botMenuStyle = {
      position: 'absolute',
      bottom: '0',
      width: '100%'
    }

    if (apiKey === null) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        <Sidebar.Pushable
          style={{height: '100vh'}}
          onBlur={this.toggleVisible}
          as={Segment}
        >
          <Sidebar as={Segment.Group}
            visible={visible}
            animation='push'
            width='wide'
            color='teal'
          >
            <Segment.Group horizontal>
              <Segment color='teal' inverted as={Form} >
                <Form.Field>
                  <Input size='large' type='text' icon='plus' />
                </Form.Field>
              </Segment>
              {todos.map(todo => {
                return (
                  <Segment fluid color='teal' inverted key={todo.id}
                    as={Link}
                    to={`/account/todos/${todo.id}`}
                  >
                    {todo.title}
                  </Segment>
                )
              })}
            </Segment.Group>
            <Segment.Group style={botMenuStyle} horizontal>
              <Segment size='large' as={Link} to={{pathname: '/account/settings'}}>
                <Icon name='options'/>
                Settings
              </Segment>
              <Segment size='large' as={Link} to='/login' onClick={() => logout()}>
                <Icon name='sign out'/>
                Signout
              </Segment>
            </Segment.Group>
          </Sidebar>
          <Sidebar.Pusher
            as={Container}
            style={{maxHeight: '100vh', overflow: 'scroll', width: '100%' }} fluid>
            <Menu icon>
              <Menu.Item onClick={this.toggleVisible}>
                <Icon color='teal' size='large' name='list layout' />
              </Menu.Item>
            </Menu>
            <Container fluid>
              <Switch>
                <Redirect exact from='/account' to='/account/todos' />
                <Route exact path="/account/todos" component={TodoList} />
                <Route exact path="/account/settings" component={User} />
                <Route path="/account/todos/:id" component={SingleTodo} />
              </Switch>
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

AccountComponent.PropTypes = {
  apiKey: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
  logout: PropTypes.func.isRequired,
}

export default AccountComponent;
