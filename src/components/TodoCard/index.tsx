import { Card } from '@mui/material';
import Text from '../layout/Text';
import React from 'react';
import todoCardStyles from './styles';
import { Todo } from '../../models/Todo';
import Flex from '../layout/Flex';

interface ITodoProps {
  todo: Todo;
}

const TodoCard: React.FC<ITodoProps> = (props) => {
  const styles = todoCardStyles;
  const { todo } = props;

  return (
    <Card variant='outlined' style={styles.card}>
      <Flex column hAlign='center' vAlign='center' styles={styles.cardContentWrapper}>
        <Text align='center' content={todo.title} fluid styles={styles.cardContent} fontWeight='bold' size='24px' />
        <Text align='center' content={todo.content} fluid styles={styles.cardContent} />
      </Flex>
    </Card>
  );
};

export default TodoCard;
