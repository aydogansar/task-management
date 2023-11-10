import { User } from 'types/User';

import api from './api';

interface SignUpParams {
  email: string;
  password: string;
}

interface SignInParams {
  email: string;
  password: string;
}

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<User, SignUpParams>({
      query: body => ({
        url: 'signUp',
        method: 'POST',
        body,
      }),
    }),
    signIn: builder.mutation<User, SignInParams>({
      query: body => ({
        url: '/signIn',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
  overrideExisting: true,
});
