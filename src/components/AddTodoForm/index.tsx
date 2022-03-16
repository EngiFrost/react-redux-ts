import { Button, TextField } from '@mui/material';
import Flex from '../layout/Flex';
import React, { useState } from 'react';
import { Todo } from '../../models/Todo';
import addTodoFormStyles from './styles';

interface IAddTodoFormProps {
  addTodo: (todo: Todo) => void;
  styles?: React.CSSProperties;
}

const AddTodoForm: React.FC<IAddTodoFormProps> = (props) => {
  const { addTodo } = props;
  const styles = { ...addTodoFormStyles, root: props.styles };

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
    <Flex column fill styles={styles.root}>
      <TextField style={styles.input} label='Todo title' value={titleValue} onChange={handleTitleInput} />
      <TextField style={styles.input} label='Todo content' multiline maxRows={4} value={contentValue} onChange={handleContentInput} />
      <Button variant='outlined' onClick={() => addTodoHandler(titleValue, contentValue)}>
        Add
      </Button>
    </Flex>
  );
};

export default AddTodoForm;
