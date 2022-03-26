import React from 'react';
import Flex from '../layout/Flex';
import TodoView from '../views/TodoView';
import appStyles from './styles';

const App: React.FC = () => {
  const styles = appStyles;

  return (
    <Flex fill hAlign='center' vAlign='center' styles={styles.rootContainer}>
      <TodoView />
    </Flex>
  );
};

export default App;
