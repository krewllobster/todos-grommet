export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE'
export const POST_TODO_REQUEST = 'POST_TODOS_REQUEST'
export const POST_TODO_SUCCESS = 'POST_TODOS_SUCCESS'
export const POST_TODO_FAILURE = 'POST_TODOS_FAILURE'
export const DEL_TODO_REQUEST = 'DEL_TODO_REQUEST'
export const DEL_TODO_SUCCESS = 'DEL_TODO_SUCCESS'
export const DEL_TODO_FAILURE = 'DEL_TODO_FAILURE'
export const PUT_TODO_REQUEST = 'PUT_TODO_REQUEST'
export const PUT_TODO_SUCCESS = 'PUT_TODO_SUCCESS'
export const PUT_TODO_FAILURE = 'PUT_TODO_FAILURE'

export const putTodoRequst = () => ({
  type: PUT_TODO_REQUEST,
})

export const putTodoFailure = (status) => ({
  type: PUT_TODO_FAILURE,
})

export const putTodoSuccess = (id) => ({
  type: PUT_TODO_SUCCESS,
  id,
})

export const delTodoRequest = () => ({
  type: DEL_TODO_REQUEST,
})

export const delTodoSuccess = (id) => ({
  type: DEL_TODO_SUCCESS,
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

export const putTodo = ({apiKey, id, title}) => {
  return (dispatch) => {
    dispatch(delTodoRequest())

    return fetch(`/todos/${id}?title=${title}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }
}

export const delTodo = ({apiKey, id}) => {
  return (dispatch) => {
    dispatch(delTodoRequest())

    return fetch(`/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
      .then(response => response.text())
      .then(data => {
        console.log(data)
        if (!data) {
          dispatch(delTodoSuccess(id))
        } else {
          dispatch(delTodoFailure(data))
        }
      })
  }
}

export const postTodo = ({apiKey, title}) => {
  return async (dispatch) => {
    dispatch(postTodoRequest())
    const data = await fetch(`/todos?title=${title}`,{
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
    const response = await data.json()
    response.message ?
        dispatch(postTodoFailure(response.message))
      : dispatch(postTodoSuccess(response))
  }
}

export const getTodos = (apiKey) => {
  return async (dispatch) => {
    dispatch(getTodosRequest())

    const data = await fetch('/todos', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
    const response = await data.json()
    response.message ?
      dispatch(getTodosFailure(response.error))
      : dispatch(getTodosSuccess(response))
  }
}
