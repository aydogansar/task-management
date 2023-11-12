import { User, UserSession } from 'types/User';

import api from './api';

interface SignUpParams {
  email: string;
  password: string;
}

interface SignInParams {
  email: string;
  password: string;
}

interface SignInResponse {
  data: UserSession;
}

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<SignInResponse, SignUpParams>({
      query: body => ({
        url: 'signUp',
        method: 'POST',
        body,
      }),
      extraOptions: {
        nextApi: true,
      },
    }),
    signIn: builder.mutation<SignInResponse, SignInParams>({
      query: body => ({
        url: '/signIn',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
      extraOptions: {
        nextApi: true,
      },
    }),
  }),
  overrideExisting: true,
});
