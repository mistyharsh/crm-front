import { Avatar, Group, Stack, Text } from '@mantine/core';

import type { Tenant } from '#api/Operation.js';
import { ButtonAsLink } from '../../Link.js';

export type TenantListProps = {
  tenants: Tenant[];
};

export function TenantList(props: TenantListProps) {
  const { tenants } = props;

  return (
    <Stack gap={'md'}>
      {tenants.map((t) => (
        <TenantListItem key={t.id} tenant={t} />
      ))}
    </Stack>
  );
}

export type TenantListItemProps = {
  tenant: Tenant;
};

export function TenantListItem(props: TenantListItemProps) {
  const { tenant } = props;
  const { id, name, description } = tenant;

  return (
    <ButtonAsLink
      to='/workspaces/$tenantId'
      params={{ tenantId: id }}
      h={'auto'}
      variant='subtle'
      color={'gray.7'}
      justify='start'
      style={{ textAlign: 'left' }}
    >
      <Group>
        <Avatar radius={'sm'} color='initials' name={name} />
        <Stack gap={'xs'}>
          <Text fw={'bold'}>{name}</Text>
          <Text size='sm'>{description}</Text>
        </Stack>
      </Group>
    </ButtonAsLink>
  );
}
