import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

// Import direct depuis les fichiers sources
import InputText from '../../../../packages/utopia/src/components/atoms/InputText/InputText.vue'

const meta: Meta<typeof InputText> = {
  title: 'Atoms/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant InputText atomique avec support des actions d\'icônes. Permet de positionner une icône à gauche ou droite et de la rendre cliquable.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Type de l\'input',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position de l\'icône',
    },
    iconClickable: {
      control: 'boolean',
      description: 'Rend l\'icône cliquable',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'valid', 'incomplete', 'completed'],
      description: 'État de validation',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Taille de l\'input',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactiver l\'input',
    },
    readonly: {
      control: 'boolean',
      description: 'Input en lecture seule',
    },
    icon: {
      control: 'text',
      description: 'Nom de l\'icône',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
  render: (args: any) => ({
    components: { InputText },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<InputText v-model="value" v-bind="args" />',
  }),
}

export const PasswordWithToggle: Story = {
  render: () => ({
    components: { InputText },
    setup() {
      const password = ref('')
      const showPassword = ref(false)
      
      const togglePasswordVisibility = () => {
        showPassword.value = !showPassword.value
      }
      
      return {
        password,
        showPassword,
        togglePasswordVisibility
      }
    },
    template: `
      <div style="width: 300px;">
        <InputText
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Mot de passe"
          :icon="showPassword ? 'Eye-off' : 'Eye'"
          icon-position="right"
          icon-clickable
          placeholder="Entrez votre mot de passe"
          @icon-click="togglePasswordVisibility"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Exemple d\'un input password avec toggle show/hide. Cliquez sur l\'icône pour basculer la visibilité du mot de passe.',
      },
    },
  },
}

export const SearchWithIconLeft: Story = {
  render: () => ({
    components: { InputText },
    setup() {
      const searchQuery = ref('')
      
      const performSearch = () => {
        console.log('Recherche:', searchQuery.value)
        alert(`Recherche: ${searchQuery.value}`)
      }
      
      return {
        searchQuery,
        performSearch
      }
    },
    template: `
      <div style="width: 300px;">
        <InputText
          v-model="searchQuery"
          type="text"
          label="Rechercher"
          icon="Search"
          icon-position="left"
          icon-clickable
          placeholder="Tapez votre recherche..."
          @icon-click="performSearch"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Input avec icône de recherche à gauche. Cliquez sur l\'icône pour déclencher la recherche.',
      },
    },
  },
}

export const EmailWithVerification: Story = {
  render: () => ({
    components: { InputText },
    setup() {
      const email = ref('')
      
      const sendVerification = () => {
        if (email.value) {
          console.log('Envoi de vérification à:', email.value)
          alert(`Vérification envoyée à: ${email.value}`)
        } else {
          alert('Veuillez saisir un email')
        }
      }
      
      return {
        email,
        sendVerification
      }
    },
    template: `
      <div style="width: 300px;">
        <InputText
          v-model="email"
          type="email"
          label="Email"
          icon="Mail"
          icon-position="right"
          icon-clickable
          placeholder="votre@email.com"
          @icon-click="sendVerification"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Input email avec icône d\'action. Cliquez sur l\'icône pour envoyer une vérification.',
      },
    },
  },
}

export const AllIconPositions: Story = {
  render: () => ({
    components: { InputText },
    setup() {
      const leftValue = ref('')
      const rightValue = ref('')
      
      const handleIconClick = (position: string) => {
        alert(`Clic sur l'icône ${position}`)
      }
      
      return {
        leftValue,
        rightValue,
        handleIconClick
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <InputText
          v-model="leftValue"
          label="Icône à gauche"
          icon="Search"
          icon-position="left"
          icon-clickable
          placeholder="Icône à gauche"
          @icon-click="() => handleIconClick('gauche')"
        />
        
        <InputText
          v-model="rightValue"
          label="Icône à droite"
          icon="Search"
          icon-position="right"
          icon-clickable
          placeholder="Icône à droite"
          @icon-click="() => handleIconClick('droite')"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparaison des positions d\'icônes. Les icônes peuvent être positionnées à gauche ou à droite.',
      },
    },
  },
}

export const StatesWithIcons: Story = {
  render: () => ({
    components: { InputText },
    setup() {
      const errorValue = ref('')
      const validValue = ref('')
      
      const handleIconClick = (state: string) => {
        alert(`Action sur l'état ${state}`)
      }
      
      return {
        errorValue,
        validValue,
        handleIconClick
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <InputText
          v-model="errorValue"
          label="État erreur"
          state="error"
          icon-clickable
          placeholder="Input avec erreur"
          message="Erreur de validation"
          @icon-click="() => handleIconClick('erreur')"
        />
        
        <InputText
          v-model="validValue"
          label="État valide"
          state="valid"
          icon-clickable
          placeholder="Input valide"
          message="Validation réussie"
          @icon-click="() => handleIconClick('valide')"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Input avec états de validation et icônes cliquables. Les icônes d\'état (erreur/valid) sont également cliquables.',
      },
    },
  },
}
