import type { Meta, StoryObj } from '@storybook/vue3'

// Import direct depuis les fichiers sources
import Button from '../../../../packages/utopia/src/components/atoms/Button/Button.vue'
import Icon from '../../../../packages/utopia/src/components/atoms/Icon/Icon.vue'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant Button atomique utilisant les tokens de design. S\'adapte automatiquement aux thèmes Club Employés et Gifteo.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Style du bouton',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Taille du bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactiver le bouton',
    },
    loading: {
      control: 'boolean',
      description: 'État de chargement',
    },
    block: {
      control: 'boolean',
      description: 'Bouton pleine largeur',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args: any) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Primary Button</Button>',
  }),
  parameters: {
    layout: 'centered', // Force le centrage
  },
}

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; max-width: 800px;">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Tous les variants du bouton. Utilisez les contrôles globaux Brand et Mode pour voir comment ils s\'adaptent aux différents thèmes.',
      },
    },
  },
}

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { Button, Icon },
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <Button>
          <template #icon>
            <Icon name="plus" />
          </template>
          Ajouter
        </Button>

        <Button variant="outline">
          Télécharger
          <template #iconAfter>
            <Icon name="download" />
          </template>
        </Button>

        <Button variant="ghost" size="sm">
          <template #icon>
            <Icon name="heart" />
          </template>
        </Button>
      </div>
    `,
  }),
}
