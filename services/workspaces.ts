import api from './api';

export const workspacesApi = api.injectEndpoints({
  endpoints: builder => ({
    getWorkspaces: builder.query<void, void>({
      query: () => ({
        url: 'workspaces',
      }),
      providesTags: ['Workspaces'],
    }),
  }),
  overrideExisting: true,
});
