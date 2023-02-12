import { Draggable } from 'react-beautiful-dnd';

interface Props {
  id: string;
  index: number;
  title: string;
}

function Task({ id, index, title }: Props) {
  return (
    <Draggable
      key={id}
      draggableId={id}
      index={index}
    >
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>{title}</div>
        </div>
      )}
    </Draggable>
  );
}
export default Task;
