import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  POST_TODO_FAILURE,
  DEL_TODO_REQUEST,
  DEL_TODO_SUCCESS,
  DEL_TODO_FAILURE,
  PUT_TODO_REQUEST,
  PUT_TODO_FAILURE,
  PUT_TODO_SUCCESS,
} from '../actions/todoActions.js'

const removeTodo = (id, items) => {
  return [...items.filter(item => item.id !== id)]
}

const todos = (state = {
  loading: false,
  todos: [],
  status: null,
  lastUpdated: 0,
}, action) => {
  switch (action.type) {
    case PUT_TODO_REQUEST:
    case POST_TODO_REQUEST:
    case DEL_TODO_REQUEST:
      return {...state, posting: true}
    case DEL_TODO_SUCCESS:
      return {
        ...state,
        posting: false,
        todos: removeTodo(action.id, state.todos)
      }
    case DEL_TODO_FAILURE:
      return {
        ...state,
        posting: false,
        status: action.status,
      }
    case GET_TODOS_REQUEST:
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
