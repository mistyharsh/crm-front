import { AppShell, Button, Group, ScrollArea, Stack } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';
import { Camera, LayoutDashboard, Menu } from 'lucide-react';

import { Shell } from './Shell.js';

const meta = {
  title: 'Shell/Shell',
  component: Shell,
  parameters: {
    layout: 'fullscreen',
  },
  tags: [],
} satisfies Meta<typeof Shell>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
  args: {},
  render: ShellExample,
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {},
  render: ShellExample,
};

function ShellExample() {
  return (
    <Shell
      header={(_isOpen, open) => (
        <Group p='sm'>
          <Button
            hiddenFrom='md'
            variant='outline'
            onClick={open}
            leftSection={<Menu size={16} />}
            children='Menu'
          />
        </Group>
      )}
      main={<div>Content</div>}
      sidebar={(_isOpen, _open, close) => (
        <>
          <AppShell.Section grow component={ScrollArea} p={'sm'}>
            <Stack p='sm'>
              <Button
                component='a'
                justify='start'
                href='/dashboard'
                leftSection={<LayoutDashboard size={16} />}
                children='Home'
              />
              <Button
                component='a'
                justify='start'
                href='/camera'
                leftSection={<Camera size={16} />}
                children='Camera'
              />
            </Stack>
          </AppShell.Section>
          <AppShell.Section p={'sm'}>
            <Button onClick={close} children='Close' />
          </AppShell.Section>
        </>
      )}
    />
  );
}
