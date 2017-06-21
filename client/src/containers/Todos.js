import { connect } from 'react-redux'
import TodosComponent from '../components/todos/TodosComponent'
import {

} from '../actions/authActions.js'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = ({

})

const Todos = connect(mapStateToProps, mapDispatchToProps)(TodosComponent)

export default Todos
