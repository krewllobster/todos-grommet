import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import { Segment, Button } from 'semantic-ui-react'

class TodoMenuItem extends Component {

  render() {

    const { todo, handleDelete } = this.props

    return (
      <Segment.Group horizontal>
        <Segment
          key={todo.id}
          color='teal' inverted
          as={Link}
          to={`/account/todos/${todo.id}`}
          size='small'
          verticalAlign='center'
        >
          <div style={{float: 'left'}}>
            {todo.title}
          </div>
          <Button floated='right' icon='close' size='mini'
            negative compact
            as={Link}
            to='/account/todos'
            value={todo.id}
            onClick={() => handleDelete(todo.id)}
          />
        </Segment>
      </Segment.Group>
    )
  }
}

TodoMenuItem.PropTypes = {
  todo: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default TodoMenuItem
