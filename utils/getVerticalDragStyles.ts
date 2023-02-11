import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

interface Props {
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
}

function getVerticalDragStyles({ provided, snapshot }: Props) {
  let transform = provided.draggableProps.style?.transform;

  if (snapshot.isDragging && transform) {
    transform = transform.replace(/\(.+\,/, '(0,');
  }

  const style = {
    ...provided.draggableProps.style,
    transform,
  };

  return style;
}
export default getVerticalDragStyles;
