import { useActiveTenant, useTenantList } from './Data/UseTenant.js';
import { AppShell } from './Shell/AppShell.js';

export function MainApp() {
  const { data } = useTenantList();
  const tenant = useActiveTenant();

  return <AppShell tenants={data} tenant={tenant} />;
}
