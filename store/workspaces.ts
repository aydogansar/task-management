import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Workspace, Todo } from 'types';

interface States {
  folders: Workspace[];
}

const initialState: States = {
  folders: [
    {
      key: 'folder1',
      label: 'Folder 1',
      todos: [],
    },
    {
      key: 'folder2',
      label: 'Folder 2',
      todos: [],
    },
    {
      key: 'folder3',
      label: 'Folder 3',
      todos: [],
    },
    {
      key: 'folder4',
      label: 'Folder 5',
      todos: [],
    },
  ],
};

interface SetTodosByFolderParams {
  selected: string;
  todos: Todo[];
}

export const workspacesSlice = createSlice({
  name: 'workspaces',
  initialState,
  reducers: {
    setFolders: (state, action: PayloadAction<Workspace[]>) => {
      state.folders = action.payload;
    },
    setTodosByFolder: (state, action: PayloadAction<SetTodosByFolderParams>) => {
      const idx = state.folders.findIndex(item => item.key === action.payload.selected);

      state.folders[idx].todos = action.payload.todos;
    },
  },
});

export const { setFolders, setTodosByFolder } = workspacesSlice.actions;

export default workspacesSlice.reducer;
