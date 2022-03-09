import React, { useState } from 'react';
import { Todo } from '../../models/Todo';
import AddTodoForm from '../AddTodoForm';
import Flex from '../layout/Flex';
import Text from '../layout/Text';
import TodoCard from '../TodoCard';
import todoBoardStyles from './styles';

const TodoBoard: React.FC = (props) => {
  const styles = todoBoardStyles;

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    const newTodoArray: Todo[] = [...todos];
    newTodoArray.push(todo);
    setTodos(newTodoArray);
  };

  return (
    <Flex styles={styles.rootContainer}>
      <Flex column styles={styles.contentContainer}>
        <Flex wrap>
          {todos.length ? (
            todos.map((todo: Todo) => {
              return <TodoCard content={todo.content} />;
            })
          ) : (
            <Text content={'There are no todos yet!'} size={'24px'} />
          )}
        </Flex>
        <AddTodoForm addTodo={addTodo} />
      </Flex>
    </Flex>
  );
};

export default TodoBoard;
