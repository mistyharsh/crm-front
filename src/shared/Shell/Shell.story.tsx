import { ActionButton, Flex, Text, View } from '@adobe/react-spectrum';
import type { Meta, StoryObj } from '@storybook/react';

import { LCamera, LLayoutDashboard, LMenu } from '../Icons.js';
import { withButtonStyles } from '../Spectrum/WithButton.js';
import { Shell } from './Shell.js';


const Link = withButtonStyles(function Inner(props, ref) {
  return (
    <a ref={ref} {...props} />
  );
});


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
          <Link variant='primary' href='/hello'>
            <LLayoutDashboard />
            <Text>Home</Text>
          </Link>
          <Link variant='primary' href='/hello'>
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
