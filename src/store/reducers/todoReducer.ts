import { Todo } from "../../models/Todo"
import { TodoAction, TodoActionTypes, TodoState } from "../../types/todoTypes"

const initialState: TodoState = {
  todos: []
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return { ...state, ...action.payload };
    case TodoActionTypes.REMOVE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) }
    default:
      return state
  }
}