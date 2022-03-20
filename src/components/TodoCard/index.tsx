import React, { useState } from 'react';
import { Card } from '@mui/material';
import Flex from '../layout/Flex';
import Text from '../layout/Text';
import { Todo } from '../../models/Todo';
import TodoDetailsDialog from '../TodoDetailsDialog';
import todoCardStyles from './styles';

interface ITodoProps {
  todo: Todo;
}

const TodoCard: React.FC<ITodoProps> = (props) => {
  const styles = todoCardStyles;
  const { todo } = props;

  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <>
      <Card variant='outlined' style={styles.card} onClick={() => setShowDetails(true)}>
        <Flex column hAlign='center' vAlign='center' styles={styles.cardContentWrapper}>
          <Text align='center' content={todo.title} fluid styles={styles.cardContent} fontWeight='bold' size='24px' />
          <Text align='center' content={todo.content} fluid styles={styles.cardContent} />
        </Flex>
      </Card>
      {showDetails && <TodoDetailsDialog todo={todo} isOpen={showDetails} handleClose={() => setShowDetails(false)} />}
    </>
  );
};

export default TodoCard;
