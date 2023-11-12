import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query/react';
import { getCookies } from 'cookies-next';

import { ACCESS_TOKEN_KEY } from 'constant';
import { Error } from 'types';

interface ExtraOptions {
  nextApi?: boolean;
}

const baseQueryNextApi = fetchBaseQuery({
  baseUrl: `/api`,
}) as BaseQueryFn<string | FetchArgs, unknown, Error>;

const baseQueryRestApi = fetchBaseQuery({
  prepareHeaders: async headers => {
    const { [ACCESS_TOKEN_KEY]: accessToken } = getCookies();

    headers.set('Authorization', `Bearer ${accessToken}`);
    headers.set('apikey', `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`);

    return headers;
  },
  baseUrl: `${process.env.NEXT_PUBLIC_REST_API}`,
}) as BaseQueryFn<string | FetchArgs, unknown, Error>;

const api = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions?: ExtraOptions) => {
    const baseQuery = extraOptions?.nextApi ? baseQueryNextApi : baseQueryRestApi;

    const result = await baseQuery(args, api, extraOptions);

    return result;
  },

  tagTypes: ['User', 'Workspaces', 'Tasks'],
  endpoints: () => ({}),
});
export default api;
