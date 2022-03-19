import React from 'react';
import AddTodoForm from '../../AddTodoForm';
import Flex from '../../layout/Flex';
import TodoBoard from '../../TodoBoard';
import todoViewStyles from './styles';

const TodoView: React.FC = (props) => {
  const styles = todoViewStyles;

  return (
    <Flex fill hAlign='center' vAlign='center' styles={styles.rootContainer}>
      <Flex fill column gap='gap.medium' hAlign='center' styles={styles.contentContainer}>
        <TodoBoard />
        <AddTodoForm styles={styles.form} />
      </Flex>
    </Flex>
  );
};

export default TodoView;
