import { Todo } from "../../models/Todo"
import { TodoAction, TodoActionTypes, TodoState } from "../../types/todoTypes"

const initialState: TodoState = {
  todos: []
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload as Todo] };
    case TodoActionTypes.REMOVE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload as string) }
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, todos: [...state.todos, ...action.payload as Todo[]] }
    default:
      return state
  }
}