import type { Meta, StoryObj } from '@storybook/react';

import { TenantList } from './TenantList.js';

const meta = {
  title: 'Workspace/TenantList',
  component: TenantList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TenantList>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tenants: [
      {
        id: '1',
        name: 'Abc Shipping',
        description: 'Hellow world',
      },
    ],
  },
};
