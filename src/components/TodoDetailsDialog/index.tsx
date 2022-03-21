import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Todo } from '../../models/Todo';
import { useDispatch } from 'react-redux';
import { removeTodoAction } from '../../store/action-creators/todoActions';

interface ITodoDetailsDialogProps {
  todo: Todo;
  isOpen: boolean;
  handleClose: () => void;
}

const TodoDetailsDialog: React.FC<ITodoDetailsDialogProps> = (props) => {
  const { todo, isOpen, handleClose } = props;
  const dispatch = useDispatch();

  const removeTodoHandler = () => {
    dispatch(removeTodoAction(todo.id));

    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
      <DialogTitle>{todo.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{todo.content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={removeTodoHandler}>Remove</Button>
        <Button onClick={handleClose}>Back</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoDetailsDialog;
