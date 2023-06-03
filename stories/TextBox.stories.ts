import type { Meta, StoryObj } from '@storybook/react';

import { TexBox } from '../src/components';

const meta = {
  title: 'Example/TextBox',
  component: TexBox,
  tags: ['autodocs'],
} satisfies Meta<typeof TexBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Input'
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Input',
    disabled: true,
  },
};