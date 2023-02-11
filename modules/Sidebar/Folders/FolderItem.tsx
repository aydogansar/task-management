import { ReactNode } from 'react';

import { Draggable } from 'react-beautiful-dnd';
import { AiFillFolder } from 'react-icons/ai';
import { RxDragHandleDots2 } from 'react-icons/rx';
import styled, { css } from 'styled-components';

interface Props {
  id: string;
  index: number;
  children: ReactNode;
}

function FolderItem({ id, index, children }: Props) {
  return (
    <Draggable
      key={id}
      draggableId={id}
      index={index}
    >
      {(provided, snapshot) => {
        let transform = provided.draggableProps.style?.transform;

        if (snapshot.isDragging && transform) {
          transform = transform.replace(/\(.+\,/, '(0,');
        }

        const style = {
          ...provided.draggableProps.style,
          transform,
        };

        return (
          <Wrapper
            ref={provided.innerRef}
            {...provided.draggableProps}
            style={style}
            isDragging={snapshot.isDragging}
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
          </Wrapper>
        );
      }}
    </Draggable>
  );
}
export default FolderItem;

interface WrapperProps {
  isDragging: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  gap: 0.5rem;
  cursor: pointer;
  width: 100%;
  margin-bottom: 0.2rem;

  & > div {
    ${({ theme }) => theme.utils.dFlex('space-between')};
    transition: all 0.3s ease-in-out;
    width: 100%;
    user-select: none;
    padding: 0.3rem;

    ${({ theme, isDragging }) =>
      isDragging &&
      css`
        color: ${theme.colors.hoverColor};
        background: ${theme.colors.darkPurple};
        opacity: 0.7;
      `};

    &:hover {
      color: ${({ theme }) => theme.colors.hoverColor};
    }
  }
`;

const Info = styled.div`
  ${({ theme }) => theme.utils.dFlex()};
  gap: 0.5rem;
`;
