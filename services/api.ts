import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query/react';

import { Error } from 'types';

const baseQuery = fetchBaseQuery({
  baseUrl: `/api`,
}) as BaseQueryFn<string | FetchArgs, unknown, Error>;

const api = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    return result;
  },

  tagTypes: ['User', 'Workspaces', 'Tasks'],
  endpoints: () => ({}),
});
export default api;
