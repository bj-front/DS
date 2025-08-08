import type { Meta, StoryObj } from '@storybook/vue3'
import { InputSelect } from '@club-employes/utopia'

const meta: Meta<typeof InputSelect> = {
  title: 'atoms/InputSelect',
  component: InputSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean'
    }
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    disabled: false
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'large',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    disabled: true,
  },
}