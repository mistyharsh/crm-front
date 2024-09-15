import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ForgotForm } from './ForgotForm.js';

const meta = {
  title: 'Authentication/ForgotForm',
  component: ForgotForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ForgotForm>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    inProgress: false,
    onSubmit: fn(),
  },
};
