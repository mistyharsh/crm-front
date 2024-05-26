import { createRoute } from '@tanstack/react-router';

import { workspaceRoute } from '../Workspace/WorkspaceRoute.js';
import { OrgContactForm } from './OrgContactForm.js';

export type NewContactProps = {};

export const newContactRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/new-contact',
  component: NewContact,
});

export function NewContact(_props: NewContactProps) {
  return (
    <div>
      <OrgContactForm />
    </div>
  );
}
