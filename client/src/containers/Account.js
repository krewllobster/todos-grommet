import { connect } from 'react-redux'
import { logout } from '../actions/loginActions.js'
import { withRouter } from 'react-router-dom'
import AccountComponent from '../components/account/AccountComponent'

const mapStateToProps = (state, ownProps) => ({
  apiKey: state.auth.apiKey,
  todos: state.todos.todos,
})

const mapDispatchToProps = ({
  logout: logout,
})

const Account = withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountComponent))

export default Account
