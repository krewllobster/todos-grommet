import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import { Container, Sidebar, Menu, Icon, Segment, Form, Button } from 'semantic-ui-react'
import TodoList from '../todos/TodoList'
import User from '../../containers/User'
import SingleTodo from '../todos/SingleTodo'
import TodoMenuItem from './TodoMenuItem'

class AccountComponent extends Component {

  constructor(props) {
    super(props)

    this.state={
      visible: true,
      title: '',
    }

    this.toggleVisible = this.toggleVisible.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentWillMount() {
    this.props.fetchTodos(this.props.apiKey)
  }

  componentWillReceiveUpdate(nextProps) {
    console.log(nextProps)
  }

  toggleVisible() {
    this.setState({visible: !this.state.visible})
  }

  handleChange(e, {name, value}) {
    this.setState({[name]: value})
  }

  handleDelete(id) {
    this.props.delTodo({
      apiKey: this.props.apiKey,
      id,
    })
  }

  handleSubmit(e) {

    e.preventDefault()

    this.props.postTodo({
      apiKey: this.props.apiKey,
      title: this.state.title,
    })

    this.setState({title: ''})
  }

  render() {
    const { authError, logout, todos } = this.props
    const { visible, title } = this.state

    const botMenuStyle = {
      position: 'absolute',
      bottom: '0',
      width: '100%',
    }

    if (authError) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        <Sidebar.Pushable
          style={{height: '100vh'}}
          as={Segment}
        >
          <Sidebar as={Segment.Group}
            visible={visible}
            animation='push'
            width='wide'
            color='teal'
            style={{maxHeight: '100vh'}}
          >
            <Segment.Group horizontal>
              <Segment color='teal' inverted as={Form}
                onSubmit = {this.handleSubmit}
                style={{height: '7%'}}
              >
                <Form.Input
                  required
                  size='large' type='text' icon='plus'
                  name='title'
                  value={title}
                  placeholder='todo title'
                  onChange={this.handleChange}
                  maxLength='35'
                />
              </Segment>
            </Segment.Group>

            <div
              style={{maxHeight: '84%', overflow: 'scroll'}}
            >
              <Segment.Group>
                {todos.map(todo => {
                  return (
                    <TodoMenuItem
                      key={todo.id}
                      todo={todo}
                      handleDelete={this.handleDelete}
                    />
                  )
                })}
              </Segment.Group>
            </div>

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
                <Route path="/account/todos/:id" component={SingleTodo} />
                <Route path="/account/todos" component={TodoList} />
                <Route path="/account/settings" component={User} />
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
