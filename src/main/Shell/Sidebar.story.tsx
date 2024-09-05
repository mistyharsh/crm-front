import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation.js';

const meta = {
  title: 'Shell/SidebarMain',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
