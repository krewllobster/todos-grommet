import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  POST_TODO,
  POST_TODO_SUCCESS,
  POST_TODO_FAILURE,
  DEL_TODO,
  DEL_TODO_SUCCESS,
  DEL_TODO_FAILURE,
} from '../actions/todoActions.js'

const removeTodo = (id, items) => {
  const pos = items.indexOf(id)
  return [...items].splice(pos, 1)
}

const todos = (state = {
  loading: false,
  posting: false,
  todos: [],
  status: null,
  lastUpdated: 0,
}, action) => {
  switch (action.type) {
    case DEL_TODO:
      return {...state, posting: true}
    case DEL_TODO_SUCCESS:
      return {
        ...state,
        posting: false,
        status: action.status,
        todos: removeTodo(action.id, state.todos)
      }
    case DEL_TODO_FAILURE:
      return {
        ...state,
        posting: false,
        status: action.status,
      }
    case GET_TODOS:
      return {...state, loading: true}
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.todoList,
        lastUpdated: Date.now(),
      }
    case GET_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        status: action.status,
      }
    case POST_TODO:
      return {...state, posting: true}
    case POST_TODO_SUCCESS:
      return {
        ...state,
        posting: false,
        todos: [...state.todos, action.todo],
      }
    case POST_TODO_FAILURE:
      return {
        ...state,
        posting: false,
        status: action.status
      }
    default:
      return state
  }
}

export default todos;
