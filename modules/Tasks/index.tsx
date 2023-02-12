import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { DroppableIds } from 'constant';
import { useDroppable, useSelector } from 'hooks';

import Task from './Task';

function Tasks() {
  const tasks = useSelector(state => state.workspaces.selectedTasks);

  const { enabled } = useDroppable();

  if (!enabled) {
    return null;
  }

  return (
    <Droppable droppableId={DroppableIds.TASKS}>
      {provided => (
        <Wrapper
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {tasks?.map((item, i) => (
            <Task
              key={item.key}
              id={item.key}
              index={i}
              title={item.title}
            />
          ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}
export default Tasks;

const Wrapper = styled.div`
  padding: 1rem;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;
