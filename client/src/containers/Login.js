import { connect } from 'react-redux'
import LoginComponent from '../components/login/LoginComponent'
import {
  fetchLogin
} from '../actions/loginActions.js'

const mapStateToProps = (state, ownProps) => ({
  authError: state.auth.authError,
  authErrorMessage: state.auth.authErrorMessage,
  loading: state.auth.loading,
  apiKey: state.auth.apiKey,
})

const mapDispatchToProps = ({
  fetchLogin: fetchLogin,
})

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)

export default Login
