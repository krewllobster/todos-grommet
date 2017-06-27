import { connect } from 'react-redux'
import { logout } from '../actions/loginActions'
import { getTodos, postTodo, delTodo } from '../actions/todoActions'
import { withRouter } from 'react-router-dom'
import AccountComponent from '../components/account/AccountComponent'

const mapStateToProps = (state, ownProps) => ({
  apiKey: state.auth.apiKey,
  todos: state.todos.todos,
  authError: state.auth.authError,
  authErrorMessage: state.auth.authErrorMessage,
})

const mapDispatchToProps = ({
  fetchTodos: getTodos,
  postTodo: postTodo,
  delTodo: delTodo,
  logout: logout,
})

const Account = withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountComponent))

export default Account
