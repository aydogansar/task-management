import { DropResult } from 'react-beautiful-dnd';

import { DroppableIds } from 'constant';
import { useDispatch, useSelector } from 'hooks';
import { setFolders, setSelectedTasks, setTasksByFolder } from 'store/workspaces';
import { reorder } from 'utils';

function useDnd() {
  const dispatch = useDispatch();

  const folders = useSelector(state => state.workspaces.folders);
  const selected = useSelector(state => state.workspaces.selected);

  const tasks = selected?.tasks;

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    const sourceId = source.droppableId;

    if (!destination) {
      return;
    }

    const destinationId = destination.droppableId;

    //task move to folders
    if (sourceId === DroppableIds.TASKS && destinationId.includes(`${DroppableIds.FOLDER}-`)) {
      const selectedFolderKey = destinationId.split('-')[1];

      // task already in there
      if (selectedFolderKey === selected?.key) {
        return;
      }

      if (tasks) {
        dispatch(setSelectedTasks(tasks?.filter(item => item.key !== result.draggableId)));

        const selectedTask = tasks.find(item => item.key === result.draggableId);

        if (selectedTask) {
          dispatch(setTasksByFolder({ selected: selectedFolderKey, addTask: selectedTask }));
        }
      }
    }

    //workspace folders reorder
    if (sourceId === DroppableIds.WORKSPACE && destinationId === DroppableIds.WORKSPACE) {
      const reorderedFolders = reorder(folders, source.index, destination.index);

      return dispatch(setFolders(reorderedFolders));
    }

    //tasks reorder
    if (sourceId === DroppableIds.TASKS && destinationId === DroppableIds.TASKS) {
      if (tasks && selected) {
        const reorderedTasks = reorder(tasks, source.index, destination.index);

        return dispatch(setSelectedTasks(reorderedTasks));
      }
    }
  };

  return {
    onDragEnd,
  };
}
export default useDnd;
