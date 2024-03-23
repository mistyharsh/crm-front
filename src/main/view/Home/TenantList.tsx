import type { Tenant } from '../../../gen/Api';

export type TenantListProps = {
  tenants: Tenant[];
};

export function TenantList(props: TenantListProps) {
  const { tenants } = props;

  return (
    <div>
      <h1>Tenants</h1>
      <ul>
        {tenants.map((tenant) => (
          <li key={tenant.id}>{tenant.name}</li>
        ))}
      </ul>
    </div>
  );
}
