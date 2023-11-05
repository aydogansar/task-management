import api from './api';

export const tasksApi = api.injectEndpoints({
  endpoints: builder => ({
    getTasks: builder.query<void, void>({
      query: () => ({
        url: 'tasks',
      }),
      providesTags: ['Tasks'],
    }),
  }),
  overrideExisting: true,
});
