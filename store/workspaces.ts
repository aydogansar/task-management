import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Workspace, Task } from 'types';

interface States {
  selected: null | Workspace;
  selectedTasks: null | Task[];
  folders: Workspace[];
}

const initialState: States = {
  selected: null,
  selectedTasks: null,
  folders: [
    {
      key: 'folder1',
      label: 'Folder 1',
      tasks: [
        {
          key: 'task11',
          title: 'Task 1 title',
        },
        {
          key: 'task12',
          title: 'Task 2 title',
        },
      ],
    },
    {
      key: 'folder2',
      label: 'Folder 2',
      tasks: [
        {
          key: 'task21',
          title: 'Task 1 title',
        },
        {
          key: 'task22',
          title: 'Task 2 title',
        },
      ],
    },
    {
      key: 'folder3',
      label: 'Folder 3',
      tasks: [
        {
          key: 'task31',
          title: 'Task 1 title',
        },
        {
          key: 'task32',
          title: 'Task 2 title',
        },
      ],
    },
    {
      key: 'folder4',
      label: 'Folder 5',
      tasks: [
        {
          key: 'task41',
          title: 'Task 1 title',
        },
        {
          key: 'task42',
          title: 'Task 2 title',
        },
      ],
    },
  ],
};

interface SetTasksByFolderParams {
  selected: string;
  tasks?: Task[];
  addTask?: Task;
  removeTask?: string;
}

export const workspacesSlice = createSlice({
  name: 'workspaces',
  initialState,
  reducers: {
    setSelectedFolder: (state, action: PayloadAction<string>) => {
      if (state.folders.map(item => item.key).includes(action.payload)) {
        const selected = state.folders.find(item => item.key === action.payload);

        if (selected) {
          state.selected = selected;
          state.selectedTasks = selected?.tasks;
        }
      } else {
        throw new Error('setSelectedFolder parameter must be one of folders state key');
      }
    },
    setFolders: (state, action: PayloadAction<Workspace[]>) => {
      state.folders = action.payload;
    },
    setTasksByFolder: (state, action: PayloadAction<SetTasksByFolderParams>) => {
      const { selected, tasks, addTask, removeTask } = action.payload;

      const idx = state.folders.findIndex(item => item.key === selected);

      if (idx === -1) {
        throw new Error('selected key must be one of folders state key');
      }

      if (tasks) {
        state.folders[idx].tasks = tasks;
        return;
      }

      if (addTask) {
        state.folders[idx].tasks.push(addTask);
        return;
      }

      if (removeTask) {
        state.folders[idx].tasks = state.folders[idx].tasks.filter(item => item.key !== removeTask);
        return;
      }
    },
    setSelectedTasks: (state, action: PayloadAction<Task[]>) => {
      const idx = state.folders.findIndex(item => item.key === state.selected?.key);

      state.selectedTasks = action.payload;
      state.folders[idx].tasks = action.payload;
      state.selected = { ...state.folders[idx], tasks: action.payload };
    },
  },
});

export const { setFolders, setTasksByFolder, setSelectedFolder, setSelectedTasks } = workspacesSlice.actions;

export default workspacesSlice.reducer;
