import React, { Component } from 'react'
import { NavLink, Link, Redirect, Route, Switch } from 'react-router-dom'
import { Container, Sidebar, Menu, Icon, Dropdown, Segment, Dimmer, List, Form, Input } from 'semantic-ui-react'
import TodoList from '../todos/TodoList'
import User from '../../containers/User'
import SingleTodo from '../todos/SingleTodo'

class AccountComponent extends Component {

  constructor(props) {
    super(props)

    this.state={
      visible: false,
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
          fluid
          fitted
        >
          <Sidebar as={Segment.Group}
            visible={visible}
            animation='push'
            width='wide'
            color='teal'
          >
            <Segment.Group horizontal>
              <Segment horizontal color='teal' inverted as={Form} >
                <Form.Field>
                  <Input size='large' type='text' icon='plus' iconposition='right' />
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
            width={'mobile only'}
            style={{maxHeight: '100vh', overflow: 'scroll', width: '100%'}} fluid>
            <Menu icon>
              <Menu.Item onClick={this.toggleVisible}>
                <Icon color='teal' size='large' name='list layout' />
              </Menu.Item>
            </Menu>
            <Container fluid>
              <Switch>
                <Route path="/account/todos" component={TodoList} />
                <Route path={`${match.url}/:id`} component={SingleTodo} />
              </Switch>
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default AccountComponent;
