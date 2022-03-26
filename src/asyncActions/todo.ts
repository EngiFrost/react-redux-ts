import { fetchTodosAction } from "../store/action-creators/todoActions"
import { Dispatch } from 'redux';
import { fetchedTodos } from "../types/todoTypes";
import { Todo } from "../models/Todo";
import { v4 as uuidv4 } from 'uuid';

export const fetchTodos = (amount: number) => {
  return (dispatch: Dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then((json: fetchedTodos[]) => {
        const todos: Todo[] = json.map((fetchedTodo: fetchedTodos) => {
          return {
            id: uuidv4(),
            title: fetchedTodo.title,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        }).slice(0, amount < 200 ? amount : 200)

        dispatch(fetchTodosAction(todos))
      })
  }
}