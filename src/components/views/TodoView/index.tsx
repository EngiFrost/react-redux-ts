import React from 'react';
import AddTodoForm from '../../AddTodoForm';
import Flex from '../../layout/Flex';
import TodoBoard from '../../TodoBoard';
import todoViewStyles from './styles';

const TodoView: React.FC = (props) => {
  const styles = todoViewStyles;

  return (
    <Flex fill column gap='gap.medium' hAlign='center' styles={styles.contentContainer}>
      <TodoBoard />
      <AddTodoForm />
    </Flex>
  );
};

export default TodoView;
