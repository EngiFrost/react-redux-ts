import React, { useState } from 'react';
import { Todo } from '../../../models/Todo';
import AddTodoForm from '../../AddTodoForm';
import Flex from '../../layout/Flex';
import TodoBoard from '../../TodoBoard';
import todoViewStyles from './styles';

const TodoView: React.FC = (props) => {
  const styles = todoViewStyles;

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo): void => {
    if (Object.values(todo).filter((item) => item).length !== Object.values(todo).length) {
      window.alert('All fields are required!!!');
      return;
    }

    const newTodoArray: Todo[] = [...todos];
    newTodoArray.push(todo);
    setTodos(newTodoArray);
  };

  return (
    <Flex fill hAlign='center' vAlign='center' styles={styles.rootContainer}>
      <Flex fill column gap='gap.medium' hAlign='center' styles={styles.contentContainer}>
        <TodoBoard todos={todos} />
        <AddTodoForm addTodo={addTodo} styles={styles.form} />
      </Flex>
    </Flex>
  );
};

export default TodoView;
