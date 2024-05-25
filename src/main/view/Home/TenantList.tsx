import { Item, ListView, Text } from '@adobe/react-spectrum';
import SocialNetwork from '@spectrum-icons/workflow/SocialNetwork';
import { useRouter } from '@tanstack/react-router';

import type { Tenant } from '../../../gen/Api';

export type TenantListProps = {
  tenants: Tenant[];
};

export function TenantList(props: TenantListProps) {
  const { tenants } = props;

  const router = useRouter();

  return (
    <ListView
      items={tenants}
      selectionMode='none'
      // width={'size-5000'}
      aria-label='Select workspace'
      children={(t) => {
        const { href } = router.buildLocation({
          to: '/workspaces/$tenantId/',
          params: {
            tenantId: t.id.toString(),
          },
        });

        return (
          <Item key={t.id} textValue={t.id.toString()} href={href}>
            <TenantListItem tenant={t} />
          </Item>
        );
      }}
    />
  );
}

export type TenantListItemProps = {
  tenant: Tenant;
};

export const TenantListItem = (props: TenantListItemProps) => {
  const { tenant } = props;
  const { name, description } = tenant;

  return (
    <>
      <SocialNetwork slot='illustration' />
      <Text>{name}</Text>
      <Text slot='description'>{description}</Text>
    </>
  );
};
