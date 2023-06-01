import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../src/components';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    childrend: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    childrend: 'Button',
    disabled: true,
  },
};