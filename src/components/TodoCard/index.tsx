import { Card } from '@mui/material';
import Text from '../layout/Text';
import React from 'react';
import todoCardStyles from './styles';

interface ITodoProps {
  content: string;
}

const TodoCard: React.FC<ITodoProps> = (props) => {
  const styles = todoCardStyles;
  const { content } = props;

  return (
    <Card variant='outlined' style={styles.card}>
      <Text align='center' content={content} fluid styles={styles.cardContent} />
    </Card>
  );
};

export default TodoCard;
