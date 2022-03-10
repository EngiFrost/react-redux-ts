import { Button, TextField } from '@mui/material';
import Flex from '../layout/Flex';
import React, { useState } from 'react';
import { Todo } from '../../models/Todo';

interface IAddTodoFormProps {
  addTodo: (todo: Todo) => void;
}

const AddTodoForm: React.FC<IAddTodoFormProps> = (props) => {
  const { addTodo } = props;

  const [value, setValue] = useState<string>('');

  const handleInput = (event: { target: { value: React.SetStateAction<string> } }) => {
    setValue(event.target.value);
  };

  const addTodoHandler = (content: string) => {
    addTodo({ content });
    setValue('');
  };

  return (
    <Flex column fill>
      <TextField label='Todo content' multiline maxRows={4} value={value} onChange={handleInput} />
      <Button variant='outlined' onClick={() => addTodoHandler(value)}>
        Add
      </Button>
    </Flex>
  );
};

export default AddTodoForm;
