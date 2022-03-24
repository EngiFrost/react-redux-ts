import { Todo } from "../../models/Todo"
import { TodoActionTypes } from "../../types/todoTypes"

export const addTodoAction = (payload: Todo) => {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload
  }
}

export const removeTodoAction = (payload: string) => {
  return {
    type: TodoActionTypes.REMOVE_TODO,
    payload
  }
}

export const fetchTodosAction = (payload: Todo[]) => {
  return {
    type: TodoActionTypes.FETCH_TODOS,
    payload
  }
}