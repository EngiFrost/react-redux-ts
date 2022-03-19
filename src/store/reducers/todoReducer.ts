import { Todo } from "../../models/Todo"

enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
}

interface TodoAction {
  type: TodoActionTypes
  payload?: any
}

interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: []
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      state.todos.push(action.payload as Todo)
      return { ...state, todos: state.todos }
    case TodoActionTypes.REMOVE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.id === action.payload) }
    default:
      return state
  }
}