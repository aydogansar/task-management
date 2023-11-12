import { createServices } from '.';

interface GetWorkspacesResponse {
  id: number;
  created_at: string;
  name: string;
  description: string | null;
  user_id: string;
  order: number;
}

const workspaceServices = createServices(builder => ({
  getWorkspaces: builder<GetWorkspacesResponse, void>({
    url: '/workspaces',
  }),
}));

export const { getWorkspaces } = workspaceServices;
