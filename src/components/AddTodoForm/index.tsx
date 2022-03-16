import { Button, TextField } from '@mui/material';
import Flex from '../layout/Flex';
import React, { useState } from 'react';
import { Todo } from '../../models/Todo';

interface IAddTodoFormProps {
  addTodo: (todo: Todo) => void;
  styles?: React.CSSProperties;
}

const AddTodoForm: React.FC<IAddTodoFormProps> = (props) => {
  const { addTodo, styles } = props;

  const [titleValue, setTitleValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');

  const handleTitleInput = (event: { target: { value: React.SetStateAction<string> } }) => {
    setTitleValue(event.target.value);
  };

  const handleContentInput = (event: { target: { value: React.SetStateAction<string> } }) => {
    setContentValue(event.target.value);
  };

  const addTodoHandler = (title: string, content: string) => {
    addTodo({ title, content });
    setTitleValue('');
    setContentValue('');
  };

  return (
    <Flex column fill styles={styles}>
      <TextField label='Todo title' value={titleValue} onChange={handleTitleInput} />
      <TextField label='Todo content' multiline maxRows={4} value={contentValue} onChange={handleContentInput} />
      <Button variant='outlined' onClick={() => addTodoHandler(titleValue, contentValue)}>
        Add
      </Button>
    </Flex>
  );
};

export default AddTodoForm;
