import { createRoute } from '@tanstack/react-router';

import { workspaceRoute } from '../Workspace/workspaceRoute';
import { OrgContactForm } from './OrgContactForm';

export type NewContactProps = {};

export const newContactRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/new-contact',
  component: NewContact,
});

export function NewContact(props: NewContactProps) {
  return (
    <div>
      <OrgContactForm />
    </div>
  );
}
