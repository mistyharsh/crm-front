import type { IconProps } from '@adobe/react-spectrum';
import type { Meta, StoryObj } from '@storybook/react';

import { LApple, LCamera } from '../Icons.js';
import type { FC } from 'react';

const meta = {
  title: 'Icon/Playground',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  args: {
    size: 'XL',
  },
  argTypes: {
    size: {
      options: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
      control: 'radio',
    },
  },
} satisfies Meta<typeof LCamera>;

export default meta;
export type Story = StoryObj<typeof LCamera>;

function factory(Icon: FC<Partial<IconProps>>): Story {
  return {
    args: {
      size: 'XXL',
    },
    render: (props) => <Icon {...props} />,
  };
}

export const Primary: Story = {
  args: {
    size: 'XXL',
  },
  render: (props) => <LCamera {...props} />,
  tags: ['dev', 'autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Apple = factory(LApple);
export const Camera = factory(LCamera);
