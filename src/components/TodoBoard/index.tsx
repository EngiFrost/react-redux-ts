import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo } from '../../models/Todo';
import Flex from '../layout/Flex';
import Text from '../layout/Text';
import TodoCard from '../TodoCard';

const TodoBoard: React.FC = (props) => {
  const { todos } = useTypedSelector((state) => state.todo);

  return (
    <Flex fill gap='gap.medium' hAlign='center' wrap>
      {todos.length ? (
        todos.map((todo: Todo) => {
          return <TodoCard todo={todo} key={todo.id} />;
        })
      ) : (
        <Text content={'There are no todos yet!'} size={'20px'} />
      )}
    </Flex>
  );
};

export default TodoBoard;
