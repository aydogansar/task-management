import { ReactNode } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';

import useDnd from './useDnd';

interface Props {
  children: ReactNode;
}

function DndProvider({ children }: Props) {
  const { onDragEnd } = useDnd();

  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
}
export default DndProvider;
