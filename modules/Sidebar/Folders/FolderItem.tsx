import { ReactNode } from 'react';

import { Draggable, Droppable } from 'react-beautiful-dnd';
import { AiFillFolder } from 'react-icons/ai';
import { RxDragHandleDots2 } from 'react-icons/rx';
import styled, { css } from 'styled-components';

import { DroppableIds } from 'constant';
import { useDispatch, useSelector } from 'hooks';
import { setSelectedFolder } from 'store/workspaces';
import { getVerticalDragStyles } from 'utils';

interface Props {
  id: string;
  index: number;
  children: ReactNode;
}

function FolderItem({ id, index, children }: Props) {
  const dispatch = useDispatch();

  const selected = useSelector(state => state.workspaces.selected);

  return (
    <Draggable
      key={id}
      draggableId={id}
      index={index}
    >
      {(provided, snapshot) => (
        <Droppable droppableId={`${DroppableIds.FOLDER}-${id}`}>
          {(dropProvided, dropSnapshot) => (
            <Wrapper
              ref={provided.innerRef}
              {...provided.draggableProps}
              style={getVerticalDragStyles({ provided, snapshot })}
              onClick={() => dispatch(setSelectedFolder(id))}
            >
              <InnerContent
                {...dropProvided.droppableProps}
                ref={dropProvided.innerRef}
                isDragging={snapshot.isDragging}
                isHover={dropSnapshot.isDraggingOver}
                active={selected?.key === id}
              >
                <div>
                  <Info>
                    <AiFillFolder />
                    {children}
                  </Info>

                  <div {...provided.dragHandleProps}>
                    <RxDragHandleDots2 />
                  </div>
                </div>
                {dropProvided.placeholder}
              </InnerContent>
            </Wrapper>
          )}
        </Droppable>
      )}
    </Draggable>
  );
}
export default FolderItem;

interface WrapperProps {
  isDragging: boolean;
  active: boolean;
  isHover: boolean;
}

const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  height: 2.18rem;
  overflow: hidden;
  }
`;

const InnerContent = styled.div<WrapperProps>`
  & > div {
    ${({ theme }) => theme.utils.dFlex('space-between')};
    transition: all 0.3s ease-in-out;
    width: 100%;
    user-select: none;
    padding: 0.5rem 0.3rem;
    max-width: 100%;

    //dragging
    ${({ theme, isDragging }) =>
      isDragging &&
      css`
        color: ${theme.colors.hoverColor};
        background: ${theme.colors.darkPurple};
        opacity: 0.7;
      `};
    ${({ theme, isHover }) =>
      isHover &&
      css`
        color: ${theme.colors.hoverColor};
        background: ${theme.colors.darkPurple};
        opacity: 0.7;
      `};

    //active
    color: ${({ theme, active }) => active && theme.colors.hoverColor};
    background: ${({ theme, active }) => active && theme.colors.lightGray};

    &:hover {
      color: ${({ theme }) => theme.colors.hoverColor};
    }
  }
`;

const Info = styled.div`
  ${({ theme }) => theme.utils.dFlex()};
  gap: 0.5rem;
`;
