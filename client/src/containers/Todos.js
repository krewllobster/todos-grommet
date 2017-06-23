import { connect } from 'react-redux'
import TodosComponent from '../components/todos/TodosComponent'
import {
  getTodos,
  getTodosSuccess,
  getTodosFailure,
  postTodo,
  postTodoSuccess,
  postTodoFailure,
  delTodo,
  delTodoSuccess,
  delTodoFailure,
} from '../actions/todoActions.js'

const mapStateToProps = (state, ownProps) => ({
  apiKey: state.auth.apiKey,
  lastUpdated: state.todos.lastUpdated,
  todos: state.todos.todos,
  loading: state.todos.loading,
  posting: state.todos.posting,
})

const mapDispatchToProps = ({
  getTodos,
  getTodosSuccess,
  getTodosFailure,
  postTodo,
  postTodoSuccess,
  postTodoFailure,
  delTodo,
  delTodoSuccess,
  delTodoFailure,
})

const Todos = connect(mapStateToProps, mapDispatchToProps)(TodosComponent)

export default Todos
