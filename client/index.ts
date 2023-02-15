import { tasksApi } from './tasks';
import { userApi } from './user';

// User Methods
export const { useSignUpMutation, useSignInMutation, useGetCurrentUserQuery, useLazyGetCurrentUserQuery } = userApi;

export const { useGetTasksQuery, useLazyGetTasksQuery } = tasksApi;
