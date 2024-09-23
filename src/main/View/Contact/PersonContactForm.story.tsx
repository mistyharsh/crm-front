import type { Meta, StoryObj } from '@storybook/react';

import { PersonContactForm } from './PersonContactForm.js';
import { usePersonContactForm } from './UsePersonContactForm.js';

const meta = {
  title: 'Contacts/PersonContactForm',
  component: PersonContactForm,
  tags: [],
} satisfies Meta<typeof PersonContactForm>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Primary: StoryObj = {
  render: () => <FormWithHook />,
};

function FormWithHook() {
  const form = usePersonContactForm(() => {});

  return <PersonContactForm form={form} />;
}
