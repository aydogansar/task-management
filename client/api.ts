import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query/react';

export interface Error {
  status: number;
  data: {
    message: string;
  };
}

const baseQuery = fetchBaseQuery({
  baseUrl: `/api`,
}) as BaseQueryFn<string | FetchArgs, unknown, Error>;

const api = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery({ ...args, ...(args.body && { body: JSON.stringify(args.body) }) }, api, extraOptions);

    return result;
  },

  tagTypes: ['User', 'Workspaces', 'Tasks'],
  endpoints: () => ({}),
});
export default api;
