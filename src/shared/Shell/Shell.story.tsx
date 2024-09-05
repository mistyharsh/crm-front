import { ActionButton, Flex, Text, View } from '@adobe/react-spectrum';
import type { Meta, StoryObj } from '@storybook/react';
import { type ReactNode } from 'react';

import { LCamera, LLayoutDashboard, LMenu } from '../Icons.js';
import { ButtonAsLink } from '../Spectrum/ButtonAsLink.js';
import { Shell } from './Shell.js';


function Link(props: { href: string, children: ReactNode }) {
  return (
    <ButtonAsLink variant={'primary'} {...props} />
  );
};


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
    }
  },
  args: {},
  render: ShellExample,
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    }
  },
  args: {},
  render: ShellExample,
};

function ShellExample() {
  return (
    <Shell
      header={(_isOpen, open) => (
        <View padding={'size-200'}>
          <ActionButton onPress={open} isHidden={{ M: true }}>
            <Text>Menu</Text>
            <LMenu color='informative' />
          </ActionButton>
        </View>
      )}
      main={<div>Content</div>}
      sidebar={(_isOpen, _open, close) => (
        <Flex direction={'column'} data-cl='SidebarExample' gap={'size-200'}>
          <Link href='/dashboard'>
            <LLayoutDashboard />
            <Text>Home</Text>
          </Link>
          <Link href='/camera'>
            <LCamera />
            <Text>Camera</Text>
          </Link>
          <ActionButton onPress={close}>
            <Text>Close</Text>
          </ActionButton>
        </Flex>
      )}
    />
  );
}
