import { Box } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Shell } from '#shared/Shell/Shell.js';
import { Navigation } from './Navigation.js';

const meta: Meta<typeof Navigation> = {
  title: 'Main/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: [],
};

export default meta;
export type Story = StoryObj<typeof meta>;

export const WithTenant: Story = {
  render() {
    return (
      <Shell
        main={<Box p='lg'>Main content area</Box>}
        sidebar={() => (
          <Navigation
            tenant={{
              id: 'kpGeRg0hhsnO1VEaU_ytB',
              name: 'A Big Company',
              description: 'Tenant Description',
            }}
          />
        )}
      />
    );
  },
};

export const EmptyShell: Story = {
  render() {
    return (
      <Shell
        main={<Box p='lg'>Main content area</Box>}
        sidebar={() => <Navigation />}
      />
    );
  },
};
