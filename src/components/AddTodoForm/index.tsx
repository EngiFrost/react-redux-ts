import { Button, TextField } from '@mui/material';
import Flex from '../layout/Flex';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import addTodoFormStyles from './styles';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../../store/action-creators/todoActions';
import { fetchTodos } from '../../asyncActions/todo';

interface IAddTodoFormProps {
  styles?: React.CSSProperties;
}

const AddTodoForm: React.FC<IAddTodoFormProps> = (props) => {
  const styles = { ...addTodoFormStyles, root: props.styles };
  const dispatch = useDispatch();

  const addTodoHandler = (title: string, content: string): void => {
    if (title === '' || content === '') {
      window.alert('All fields are required!!!');
      return;
    }

    dispatch(addTodoAction({ id: uuidv4(), title, content }));

    setTitleValue('');
    setContentValue('');
  };

  const fetchTodosHandler = (): void => {
    dispatch(fetchTodos(4));
  };

  const [titleValue, setTitleValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');

  const handleTitleInput = (event: { target: { value: React.SetStateAction<string> } }) => {
    setTitleValue(event.target.value);
  };

  const handleContentInput = (event: { target: { value: React.SetStateAction<string> } }) => {
    setContentValue(event.target.value);
  };

  return (
    <Flex column fill styles={styles.root}>
      <TextField style={styles.input} label='Todo title' value={titleValue} onChange={handleTitleInput} />
      <TextField style={styles.input} label='Todo content' multiline maxRows={4} value={contentValue} onChange={handleContentInput} />
      <Button variant='outlined' onClick={() => addTodoHandler(titleValue, contentValue)}>
        Add
      </Button>
      <div style={styles.buttonDivider}></div>
      <Button variant='outlined' onClick={() => fetchTodosHandler()}>
        Fetch todos
      </Button>
    </Flex>
  );
};

export default AddTodoForm;
