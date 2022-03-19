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
      return state
    case TodoActionTypes.REMOVE_TODO:
      return state
    default:
      return state
  }
}