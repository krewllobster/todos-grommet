import { connect } from 'react-redux'
import {
  submitRegister,
  submitRegisterSuccess,
  submitRegisterFailure
} from '../actions/authActions.js'

import RegisterComponent from '../components/register/RegisterComponent'

const mapStateToProps = (state, ownProps) => ({
  authError: state.auth.authError,
  authErrorMessage: state.auth.authErrorMessage,
  apiKey: state.auth.apiKey,
  loading: state.auth.loading,
})

const mapDispatchToProps = ({
  submitRegister: submitRegister,
  submitRegisterSuccess: submitRegisterSuccess,
  submitRegisterFailure: submitRegisterFailure,
})

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)

export default Register
