import React, { Component } from 'react'
import { Segment, Form, Header } from 'semantic-ui-react'
import {  } from 'react-router-dom'
import TodoList from './TodoList'

class TodosComponent extends Component {

  constructor(props) {
    super(props)

    this.state={
      headers: {'Authorization':'Bearer ' + this.props.apiKey},
      title: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteTodoFN = this.deleteTodoFN.bind(this)
  }

  componentWillMount() {

    if(Date.now() - this.props.lastUpdated > 60000) {
      console.log('requesting todos')

      const init = {
        method: 'GET',
        headers: this.state.headers
      }

      this.props.getTodos()
      fetch('/todos', init)
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            this.props.getTodosFailure(data.message)
          } else {
            this.props.getTodosSuccess(data)
          }
        })
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    let params = encodeURI(this.state.title)

    this.props.postTodo()

    fetch(`/todos?title=${params}`, {
      method: 'post',
      headers: this.state.headers
    })
      .then(response => response.json())
      .then(data => {console.log(data)
        if(data.message) {
          this.props.postTodoFailure(data.message)
        } else {
          this.props.postTodoSuccess(data)
        }
      })

    this.setState({title: ''})
  }

  handleChange(e, {name, value}) {
    this.setState({[name]: value})
  }

  deleteTodoFN(id) {
    let params = encodeURI(id)

    fetch(`/todos/${params}`, {
      method: 'delete',
      headers: this.state.headers
    })
      .then(response => response)
      .then(data => {
        if(!data.ok) {
          this.props.delTodoFailure(data.status)
        } else {
          this.props.delTodoSuccess(id)
        }
      })
  }

  render() {
    const { title, } = this.state
    const { todos, loading, posting } = this.props

    const todoListStyle = {
      maxWidth: '80%',
      margin: 'auto',
      marginTop: '5rem'
    }

    return (
      <div style={todoListStyle}>
        <Segment>
          <Form
            loading={loading}
            onSubmit={this.handleSubmit}
          >
            <Header>
              Add a todo list
            </Header>
            <Form.Input
              required
              name='title'
              value={title}
              placeholder='title'
              onChange={this.handleChange}
            />
            <Form.Button>
              Submit
            </Form.Button>
          </Form>
        </Segment>
        <TodoList todos={this.props.todos} deleteTodoFN={this.deleteTodoFN}/>
      </div>
    )
  }
}

export default TodosComponent
