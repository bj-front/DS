import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Démonstration des design tokens du système. Utilisez les contrôles Brand et Mode dans la toolbar pour voir l\'adaptation automatique des couleurs.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Colors: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px; min-height: 100vh;">
        <h1 style="color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); margin-bottom: 32px;">
          🎨 Design Tokens - Couleurs
        </h1>
        
        <!-- Couleurs primaires -->
        <section style="margin-bottom: 40px;">
          <h2 style="color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); margin-bottom: 16px;">
            Couleurs Primaires
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
            <div style="text-align: center;">
              <div style="width: 100%; height: 80px; background-color: var(--theme-colors-primary-50); border: 1px solid var(--theme-colors-border-default); border-radius: 8px; margin-bottom: 8px;"></div>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">primary-50</code>
            </div>
            <div style="text-align: center;">
              <div style="width: 100%; height: 80px; background-color: var(--theme-colors-primary-100); border: 1px solid var(--theme-colors-border-default); border-radius: 8px; margin-bottom: 8px;"></div>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">primary-100</code>
            </div>
            <div style="text-align: center;">
              <div style="width: 100%; height: 80px; background-color: var(--theme-colors-primary-200); border: 1px solid var(--theme-colors-border-default); border-radius: 8px; margin-bottom: 8px;"></div>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">primary-200</code>
            </div>
            <div style="text-align: center;">
              <div style="width: 100%; height: 80px; background-color: var(--theme-colors-primary-300); border: 1px solid var(--theme-colors-border-default); border-radius: 8px; margin-bottom: 8px;"></div>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">primary-300</code>
            </div>
            <div style="text-align: center;">
              <div style="width: 100%; height: 80px; background-color: var(--theme-colors-primary-400); border: 1px solid var(--theme-colors-border-default); border-radius: 8px; margin-bottom: 8px;"></div>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">primary-400</code>
            </div>
            <div style="text-align: center;">
              <div style="width: 100%; height: 80px; background-color: var(--theme-colors-primary-500); border: 1px solid var(--theme-colors-border-default); border-radius: 8px; margin-bottom: 8px;"></div>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">primary-500</code>
            </div>
            <div style="text-align: center;">
              <div style="width: 100%; height: 80px; background-color: var(--theme-colors-primary-600); border: 1px solid var(--theme-colors-border-default); border-radius: 8px; margin-bottom: 8px;"></div>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">primary-600</code>
            </div>
            <div style="text-align: center;">
              <div style="width: 100%; height: 80px; background-color: var(--theme-colors-primary-700); border: 1px solid var(--theme-colors-border-default); border-radius: 8px; margin-bottom: 8px;"></div>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">primary-700</code>
            </div>
            <div style="text-align: center;">
              <div style="width: 100%; height: 80px; background-color: var(--theme-colors-primary-800); border: 1px solid var(--theme-colors-border-default); border-radius: 8px; margin-bottom: 8px;"></div>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">primary-800</code>
            </div>
            <div style="text-align: center;">
              <div style="width: 100%; height: 80px; background-color: var(--theme-colors-primary-900); border: 1px solid var(--theme-colors-border-default); border-radius: 8px; margin-bottom: 8px;"></div>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">primary-900</code>
            </div>
          </div>
        </section>

        <!-- Couleurs de texte -->
        <section style="margin-bottom: 40px;">
          <h2 style="color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); margin-bottom: 16px;">
            Couleurs de Texte
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
            <div style="padding: 16px; background-color: var(--theme-colors-surface-card); border: 1px solid var(--theme-colors-border-default); border-radius: 8px;">
              <p style="color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); margin-bottom: 4px;">Texte Principal</p>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--theme-colors-text-primary</code>
            </div>
            <div style="padding: 16px; background-color: var(--theme-colors-surface-card); border: 1px solid var(--theme-colors-border-default); border-radius: 8px;">
              <p style="color: var(--theme-colors-text-secondary); font-family: var(--font-family-sans); margin-bottom: 4px;">Texte Secondaire</p>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--theme-colors-text-secondary</code>
            </div>
            <div style="padding: 16px; background-color: var(--theme-colors-surface-card); border: 1px solid var(--theme-colors-border-default); border-radius: 8px;">
              <p style="color: var(--theme-colors-text-muted); font-family: var(--font-family-sans); margin-bottom: 4px;">Texte Atténué</p>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--theme-colors-text-muted</code>
            </div>
            <div style="padding: 16px; background-color: var(--theme-colors-primary-500); border: 1px solid var(--theme-colors-border-default); border-radius: 8px;">
              <p style="color: var(--theme-colors-text-inverse); font-family: var(--font-family-sans); margin-bottom: 4px;">Texte Inverse</p>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-inverse); opacity: 0.7;">--theme-colors-text-inverse</code>
            </div>
          </div>
        </section>

        <!-- Instructions -->
        <section style="padding: 24px; background-color: var(--theme-colors-primary-50); border: 1px solid var(--theme-colors-primary-200); border-radius: 12px;">
          <h3 style="color: var(--theme-colors-primary-700); font-family: var(--font-family-sans); margin-bottom: 12px;">
            🔄 Comment tester l'adaptation des thèmes
          </h3>
          <ol style="color: var(--theme-colors-primary-700); font-family: var(--font-family-sans); line-height: 1.6;">
            <li>Utilisez le contrôle <strong>Brand</strong> dans la toolbar pour basculer entre Club Employés (bleu) et Gifteo (rouge)</li>
            <li>Utilisez le contrôle <strong>Mode</strong> pour basculer entre Light et Dark</li>
            <li>Observez comment les couleurs s'adaptent automatiquement</li>
            <li>Les variables CSS restent les mêmes, seules leurs valeurs changent</li>
          </ol>
        </section>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Palette de couleurs adaptative. Les couleurs changent automatiquement selon la marque et le mode sélectionnés dans la toolbar.',
      },
    },
  },
}

export const Typography: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px; background-color: var(--theme-colors-surface-background); min-height: 100vh;">
        <h1 style="color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); margin-bottom: 32px;">
          📝 Design Tokens - Typographie
        </h1>
        
        <!-- Tailles de polices -->
        <section style="margin-bottom: 40px;">
          <h2 style="color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); margin-bottom: 16px; font-size: var(--font-size-2xl);">
            Tailles de Police
          </h2>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; align-items: baseline; gap: 16px;">
              <span style="font-size: var(--font-size-xs); color: var(--theme-colors-text-primary); font-family: var(--font-family-sans);">Texte XS (12px)</span>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--font-size-xs</code>
            </div>
            <div style="display: flex; align-items: baseline; gap: 16px;">
              <span style="font-size: var(--font-size-sm); color: var(--theme-colors-text-primary); font-family: var(--font-family-sans);">Texte SM (14px)</span>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--font-size-sm</code>
            </div>
            <div style="display: flex; align-items: baseline; gap: 16px;">
              <span style="font-size: var(--font-size-base); color: var(--theme-colors-text-primary); font-family: var(--font-family-sans);">Texte Base (16px)</span>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--font-size-base</code>
            </div>
            <div style="display: flex; align-items: baseline; gap: 16px;">
              <span style="font-size: var(--font-size-lg); color: var(--theme-colors-text-primary); font-family: var(--font-family-sans);">Texte LG (18px)</span>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--font-size-lg</code>
            </div>
            <div style="display: flex; align-items: baseline; gap: 16px;">
              <span style="font-size: var(--font-size-xl); color: var(--theme-colors-text-primary); font-family: var(--font-family-sans);">Texte XL (20px)</span>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--font-size-xl</code>
            </div>
            <div style="display: flex; align-items: baseline; gap: 16px;">
              <span style="font-size: var(--font-size-2xl); color: var(--theme-colors-text-primary); font-family: var(--font-family-sans);">Texte 2XL (24px)</span>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--font-size-2xl</code>
            </div>
            <div style="display: flex; align-items: baseline; gap: 16px;">
              <span style="font-size: var(--font-size-3xl); color: var(--theme-colors-text-primary); font-family: var(--font-family-sans);">Texte 3XL (30px)</span>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--font-size-3xl</code>
            </div>
          </div>
        </section>

        <!-- Poids de polices -->
        <section style="margin-bottom: 40px;">
          <h2 style="color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); margin-bottom: 16px; font-size: var(--font-size-2xl);">
            Poids de Police
          </h2>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; align-items: baseline; gap: 16px;">
              <span style="font-weight: var(--font-weight-light); color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); font-size: var(--font-size-lg);">Texte Light (300)</span>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--font-weight-light</code>
            </div>
            <div style="display: flex; align-items: baseline; gap: 16px;">
              <span style="font-weight: var(--font-weight-normal); color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); font-size: var(--font-size-lg);">Texte Normal (400)</span>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--font-weight-normal</code>
            </div>
            <div style="display: flex; align-items: baseline; gap: 16px;">
              <span style="font-weight: var(--font-weight-medium); color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); font-size: var(--font-size-lg);">Texte Medium (500)</span>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--font-weight-medium</code>
            </div>
            <div style="display: flex; align-items: baseline; gap: 16px;">
              <span style="font-weight: var(--font-weight-semibold); color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); font-size: var(--font-size-lg);">Texte Semibold (600)</span>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--font-weight-semibold</code>
            </div>
            <div style="display: flex; align-items: baseline; gap: 16px;">
              <span style="font-weight: var(--font-weight-bold); color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); font-size: var(--font-size-lg);">Texte Bold (700)</span>
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--font-weight-bold</code>
            </div>
          </div>
        </section>
      </div>
    `,
  }),
} 