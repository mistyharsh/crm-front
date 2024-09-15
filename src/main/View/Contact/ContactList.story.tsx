import type { Meta, StoryObj } from '@storybook/react';

import { ContactList } from './ContactList.js';

const meta = {
  title: 'Contacts/ContactList',
  component: ContactList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactList>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    contacts: [{}],
  },
};
