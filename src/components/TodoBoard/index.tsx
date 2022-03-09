import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Todo } from '../../models/Todo';
import Flex from '../layout/Flex';
import Text from '../layout/Text';
import TodoCard from '../TodoCard';
import todoBoardStyles from './styles';

const TodoBoard: React.FC = (props) => {
  const styles = todoBoardStyles;

  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setValue(event.target.value);
  };

  const addTodoHandler = (content: string) => {
    const newTodoArray: Todo[] = todos;
    newTodoArray.push({ content });
    setTodos(newTodoArray);
    setValue('');
  };

  return (
    <Flex styles={styles.rootContainer}>
      <Flex column styles={styles.contentContainer}>
        <Flex wrap>
          {todos ? (
            todos.map((todo: Todo) => {
              return <TodoCard content={todo.content} />;
            })
          ) : (
            <Text content={'There are no todos yet!'} size={'24px'} />
          )}
        </Flex>
        <Flex column>
          <TextField label='Todo content' multiline maxRows={4} value={value} onChange={handleChange} />
          <Button variant='outlined' onClick={() => addTodoHandler(value)}>
            Add
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TodoBoard;
