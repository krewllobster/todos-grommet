import { connect } from 'react-redux'
import LoginComponent from '../components/login/LoginComponent'
import {
  submitLogin,
  submitLoginSuccess,
  submitLoginFailure
} from '../actions/authActions.js'

const mapStateToProps = (state, ownProps) => ({
  authError: state.auth.authError,
  authErrorMessage: state.auth.authErrorMessage,
  loading: state.auth.loading,
  apiKey: state.auth.apiKey,
})

const mapDispatchToProps = ({
  submitLogin: submitLogin,
  submitLoginSuccess: submitLoginSuccess,
  submitLoginFailure: submitLoginFailure,
})

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)

export default Login
