import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { InvitationForm } from './InvitationForm.js';

const meta = {
  title: 'Authentication/InvitationForm',
  component: InvitationForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InvitationForm>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    code: '123456',
    name: 'John Doe',
    onSubmit: fn(),
  },
};
