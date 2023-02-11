import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { useSelector, useDroppable } from 'hooks';

import FolderItem from './FolderItem';

function Folders() {
  const folders = useSelector(state => state.workspaces.folders);

  const { enabled } = useDroppable();

  if (!enabled) {
    return null;
  }

  return (
    <Droppable droppableId="workspace">
      {provided => (
        <Wrapper
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {folders.map((item, i) => (
            <FolderItem
              key={item.key}
              id={item.key}
              index={i}
            >
              {item.label}
            </FolderItem>
          ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}
export default Folders;

const Wrapper = styled.div`
  ${({ theme }) => theme.utils.dFlex('flex-start', 'flex-start')};
  flex-direction: column;
`;
