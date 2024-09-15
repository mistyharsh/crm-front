import { Stack, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { createRoute } from '@tanstack/react-router';

import { execute } from '#api/Client.js';
import { workspaceRoute } from '../Workspace/WorkspaceRoute.js';
import { UserList } from './UserList.js';
import { UserListFailure } from './UsersListStatus.js';

export const userListRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/users',
  component: TenantUsers,
});

function useGetUserQuery(tenantId: string) {
  return useQuery({
    queryKey: ['users', tenantId],
    queryFn: () =>
      execute('GetUsers', { tenantId }).then((data) => data.getUsers),
  });
}

export function TenantUsers() {
  const { tenantId } = userListRoute.useParams();

  const users = useGetUserQuery(tenantId);

  const render = () => {
    if (users.isLoading) {
      return <Title order={2}>Loading....</Title>;
    } else if (users.isError) {
      return <UserListFailure />;
    } else if (users.isSuccess) {
      return <UserList users={users.data} />;
    }
  };

  return (
    <Stack className='TenantUsers' gap={'md'}>
      <Title order={2} children='Users' />
      {render()}
    </Stack>
  );
}
