import { Todo } from "../models/Todo"

export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  FETCH_TODOS = 'FETCH_TODOS',
}

export interface TodoAction {
  type: TodoActionTypes
  payload?: Todo | Todo[] | string
}

export interface TodoState {
  todos: Todo[]
}

export interface fetchedTodos {
  userId: number
  id: number
  title: string
  completed: boolean
}
