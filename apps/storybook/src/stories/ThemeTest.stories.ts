import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Design System/Theme Test',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Test des changements de thèmes dans Storybook. Utilisez les contrôles Brand et Mode dans la toolbar.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const ThemeSwitchTest: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px; min-height: 100vh; background-color: var(--theme-colors-surface-background); color: var(--theme-colors-text-primary);">
        <h1 style="color: var(--theme-colors-text-primary); font-family: var(--font-family-sans); margin-bottom: 32px;">
          🧪 Test du Switch de Thèmes
        </h1>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-bottom: 32px;">
          <!-- Surface Background -->
          <div style="padding: 16px; background-color: var(--theme-colors-surface-background); border: 2px solid var(--theme-colors-border-default); border-radius: 12px;">
            <h3 style="color: var(--theme-colors-text-primary); margin-bottom: 8px;">Surface Background</h3>
            <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--theme-colors-surface-background</code>
          </div>

          <!-- Surface Card -->
          <div style="padding: 16px; background-color: var(--theme-colors-surface-card); border: 2px solid var(--theme-colors-border-default); border-radius: 12px;">
            <h3 style="color: var(--theme-colors-text-primary); margin-bottom: 8px;">Surface Card</h3>
            <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted);">--theme-colors-surface-card</code>
          </div>

          <!-- Primary Color -->
          <div style="padding: 16px; background-color: var(--theme-colors-primary-500); color: var(--theme-colors-text-inverse); border-radius: 12px;">
            <h3 style="margin-bottom: 8px;">Primary 500</h3>
            <code style="font-family: var(--font-family-mono); font-size: 12px; opacity: 0.8;">--theme-colors-primary-500</code>
          </div>
        </div>

        <!-- Text Colors -->
        <section style="margin-bottom: 32px;">
          <h2 style="color: var(--theme-colors-text-primary); margin-bottom: 16px;">Couleurs de Texte</h2>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <p style="color: var(--theme-colors-text-primary); font-size: 18px;">
              ✅ Texte Principal - doit être bien contrasté
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted); margin-left: 16px;">--theme-colors-text-primary</code>
            </p>
            <p style="color: var(--theme-colors-text-secondary); font-size: 16px;">
              ✅ Texte Secondaire - moins contrasté
              <code style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-muted); margin-left: 16px;">--theme-colors-text-secondary</code>
            </p>
            <p style="color: var(--theme-colors-text-muted); font-size: 14px;">
              ✅ Texte Atténué - discret
              <code style="font-family: var(--font-family-mono); font-size: 12px; margin-left: 16px;">--theme-colors-text-muted</code>
            </p>
          </div>
        </section>

        <!-- Instructions -->
        <section style="padding: 20px; background-color: var(--theme-colors-primary-50); border: 1px solid var(--theme-colors-primary-200); border-radius: 12px;">
          <h3 style="color: var(--theme-colors-primary-700); margin-bottom: 12px;">
            🔄 Instructions de Test
          </h3>
          <ol style="color: var(--theme-colors-primary-700); line-height: 1.6;">
            <li><strong>Brand :</strong> Cliquez sur "Club Employés" vs "Gifteo" dans la toolbar</li>
            <li><strong>Mode :</strong> Cliquez sur "Light" vs "Dark" dans la toolbar</li>
            <li><strong>Vérifiez :</strong> Les fonds et textes doivent s'inverser en mode dark</li>
            <li><strong>Couleurs :</strong> Club Employés = bleu, Gifteo = rouge/orange</li>
          </ol>
        </section>

        <!-- Debug Info -->
        <section style="margin-top: 32px; padding: 16px; background-color: var(--theme-colors-border-muted); border-radius: 8px;">
          <h4 style="color: var(--theme-colors-text-primary); margin-bottom: 12px;">🐛 Debug CSS Variables</h4>
          <div style="font-family: var(--font-family-mono); font-size: 12px; color: var(--theme-colors-text-secondary); line-height: 1.6;">
            <div>Background: <span id="bg-debug">voir console</span></div>
            <div>Text Primary: <span id="text-debug">voir console</span></div>
            <div>Primary 500: <span id="primary-debug">voir console</span></div>
          </div>
        </section>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Story de test pour vérifier que les thèmes changent correctement dans Storybook. Regardez la console pour les logs de debug.',
      },
    },
  },
}

export const SimpleColorTest: Story = {
  render: () => ({
    template: `
      <div style="padding: 40px; background-color: var(--theme-colors-surface-background); min-height: 100vh;">
        <h1 style="color: var(--theme-colors-text-primary); text-align: center; margin-bottom: 40px;">
          Simple Color Test
        </h1>

        <div style="max-width: 600px; margin: 0 auto;">
          <!-- Card de test -->
          <div style="
            background-color: var(--theme-colors-surface-card);
            border: 1px solid var(--theme-colors-border-default);
            border-radius: 12px;
            padding: 32px;
            text-align: center;
            box-shadow: var(--shadow-lg);
          ">
            <h2 style="color: var(--theme-colors-text-primary); margin-bottom: 16px;">
              Card de Test
            </h2>
            <p style="color: var(--theme-colors-text-secondary); margin-bottom: 24px;">
              Ce texte doit être lisible dans tous les modes
            </p>

            <!-- Bouton simulé -->
            <div style="
              display: inline-block;
              background-color: var(--theme-colors-primary-500);
              color: var(--theme-colors-text-inverse);
              padding: 12px 24px;
              border-radius: 8px;
              font-weight: 500;
              margin-bottom: 16px;
            ">
              Bouton Primaire
            </div>

            <p style="color: var(--theme-colors-text-muted); font-size: 14px;">
              Texte atténué pour informations secondaires
            </p>
          </div>
        </div>
      </div>
    `,
  }),
}
