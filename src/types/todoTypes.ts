import { Todo } from "../models/Todo"

export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
}

export interface TodoAction {
  type: TodoActionTypes
  payload?: any
}

export interface TodoState {
  todos: Todo[]
}
