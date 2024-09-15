import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ResetForm } from './ResetForm.js';

const meta = {
  title: 'Authentication/ResetForm',
  component: ResetForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResetForm>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    token: 'token',
    inProgress: false,
    onSubmit: fn(),
  },
};
