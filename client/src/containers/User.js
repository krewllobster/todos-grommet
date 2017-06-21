import { connect } from 'react-redux'
import UserComponent from '../components/user/UserComponent'
import {

} from '../actions/authActions.js'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = ({

})

const User = connect(mapStateToProps, mapDispatchToProps)(UserComponent)

export default UserComponent
