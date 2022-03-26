import React, { useState } from 'react';
import { IconButton, Card } from '@mui/material';
import Flex from '../layout/Flex';
import Text from '../layout/Text';
import { Todo } from '../../models/Todo';
import TodoDetailsDialog from '../TodoDetailsDialog';
import todoCardStyles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeTodoAction } from '../../store/action-creators/todoActions';

interface ITodoProps {
  todo: Todo;
}

const TodoCard: React.FC<ITodoProps> = (props) => {
  const styles = todoCardStyles;
  const { todo } = props;

  const [showDetails, setShowDetails] = useState<boolean>(false);
  const dispatch = useDispatch();
  const removeCardHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(removeTodoAction(todo.id));
  };

  return (
    <>
      <Card variant='outlined' style={styles.card} onClick={() => setShowDetails(true)}>
        <Flex column hAlign='center' vAlign='center' styles={styles.cardDataWrapper}>
          <IconButton onClick={(event: React.MouseEvent) => removeCardHandler(event)} style={styles.removeButton}>
            <FontAwesomeIcon icon={faXmark} style={styles.removeIcon} />
          </IconButton>

          <Text align='center' content={todo.title} fluid styles={styles.cardTitle} fontWeight='bold' />
          <Text align='center' content={todo.content} fluid styles={styles.cardContent} />
        </Flex>
      </Card>
      {showDetails && <TodoDetailsDialog todo={todo} isOpen={showDetails} handleClose={() => setShowDetails(false)} />}
    </>
  );
};

export default TodoCard;
