import React, { useState } from 'react';
import { Todo } from '../../../models/Todo';
import AddTodoForm from '../../AddTodoForm';
import Flex from '../../layout/Flex';
import TodoBoard from '../../TodoBoard';
import todoViewStyles from './styles';

const TodoView: React.FC = (props) => {
  const styles = todoViewStyles;

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    const newTodoArray: Todo[] = [...todos];
    newTodoArray.push(todo);
    setTodos(newTodoArray);
  };

  return (
    <Flex styles={styles.rootContainer}>
      <Flex column styles={styles.contentContainer}>
        <TodoBoard todos={todos} />
        <AddTodoForm addTodo={addTodo} />
      </Flex>
    </Flex>
  );
};

export default TodoView;
