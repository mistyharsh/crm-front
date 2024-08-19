import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { LoginForm } from './LoginForm.js';

const meta = {
  title: 'Authentication/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    inProgress: false,
    onSubmit: fn(),
  },
};
