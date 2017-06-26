export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE'
export const POST_TODO_REQUEST = 'POST_TODOS_REQUEST'
export const POST_TODO_SUCCESS = 'POST_TODOS_SUCCESS'
export const POST_TODO_FAILURE = 'POST_TODOS_FAILURE'
export const DEL_TODO_REQUEST = 'DEL_TODO_REQUEST'
export const DEL_TODO_SUCCESS = 'DEL_TODO_SUCCESS'
export const DEL_TODO_FAILURE = 'DEL_TODO_FAILURE'



export const delTodoRequest = (id) => ({
  type: DEL_TODO_REQUEST,
})

export const delTodoSuccess = (status, id) => ({
  type: DEL_TODO_SUCCESS,
  status,
  id,
})

export const delTodoFailure = (status) => ({
  type: DEL_TODO_FAILURE,
  status,
})

export const getTodosRequest = () => ({
  type: GET_TODOS_REQUEST,
})

export const getTodosSuccess = (todoList) => ({
  type: GET_TODOS_SUCCESS,
  todoList,
})

export const getTodosFailure = (status) => ({
  type: GET_TODOS_FAILURE,
  status,
})

export const postTodoRequest = () => ({
  type: POST_TODO_REQUEST,
})

export const postTodoSuccess = (todo) => ({
  type: POST_TODO_SUCCESS,
  todo,
})

export const postTodoFailure = (status) => ({
  type: POST_TODO_FAILURE,
  status,
})
