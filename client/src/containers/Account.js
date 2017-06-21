import { connect } from 'react-redux'
import { logout } from '../actions/authActions.js'
import { withRouter } from 'react-router-dom'
import AccountComponent from '../components/account/AccountComponent'

const mapStateToProps = (state, ownProps) => ({
  apiKey: state.auth.apiKey,
  todos: state.todos,
})

const mapDispatchToProps = ({
  logout: logout,
})

const Account = withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountComponent))

export default Account
