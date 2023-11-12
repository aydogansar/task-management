export { default as api } from './api';

import { userApi } from './user';
import { workspacesApi } from './workspaces';

export const { useSignInMutation, useSignUpMutation } = userApi;
export const { useGetWorkspacesQuery } = workspacesApi;
