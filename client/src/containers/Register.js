import { connect } from 'react-redux'
import {
  fetchRegister
} from '../actions/registerActions.js'

import RegisterComponent from '../components/register/RegisterComponent'

const mapStateToProps = (state, ownProps) => ({
  authError: state.auth.authError,
  authErrorMessage: state.auth.authErrorMessage,
  apiKey: state.auth.apiKey,
  loading: state.auth.loading,
})

const mapDispatchToProps = ({
  fetchRegister: fetchRegister,
})

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)

export default Register
