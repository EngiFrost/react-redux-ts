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
    <Flex fill hAlign='center' vAlign='center' styles={styles.rootContainer}>
      <Flex fill column gap='gap.medium' hAlign='center' styles={styles.contentContainer}>
        <TodoBoard todos={todos} />
        <AddTodoForm addTodo={addTodo} styles={styles.form} />
      </Flex>
    </Flex>
  );
};

export default TodoView;
