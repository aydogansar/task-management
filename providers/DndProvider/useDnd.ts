import { DropResult } from 'react-beautiful-dnd';

import { useDispatch, useSelector } from 'hooks';
import { setFolders } from 'store/workspaces';
import { reorder } from 'utils';

function useDnd() {
  const dispatch = useDispatch();

  const folders = useSelector(state => state.workspaces.folders);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const reorderedFolders = reorder(folders, result.source.index, result.destination.index);

    dispatch(setFolders(reorderedFolders));
  };

  return {
    onDragEnd,
  };
}
export default useDnd;
