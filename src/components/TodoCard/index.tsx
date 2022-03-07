import { Card } from '@mui/material';
import Text from '../layout/Text';
import React from 'react';

interface ITodoProps {
  content: string;
}

const TodoCard: React.FC<ITodoProps> = (props) => {
  const { content } = props;

  return <Card children={<Text content={content} />} />;
};

export default TodoCard;
