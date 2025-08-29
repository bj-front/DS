<template>
  <AuthLayout
    :title="'Bienvenue'"
    :subtitle="'Veuillez entrer vos identifiants de connexion.'"
    :contact-info="{
      text: 'Vous pouvez nous joindre au',
      phone: '+33(0) 9 74 99 28 34',
      email: 'service.cartes@club-employes.com'
    }"
    :slides="[
      {
        title: `Vivez <span class='highlight'>l'expérience</span> Club Employés`,
        subtitle: 'Des milliers d\'avantages exclusifs',
        image: '/images/auth-experience.png',
        alt: 'Expérience Club Employés',
        tips: {
          title: 'Tips :',
          text: 'Pensez à utiliser votre plateforme Club Employés pour profiter jusqu\'à 20% de réduction !'
        }
      },
      {
        title: `Des <span class='highlight'>réductions</span> toute l'année`,
        subtitle: 'Dans vos enseignes préférées',
        image: '/images/auth-reductions.png',
        alt: 'Réductions exclusives',
        tips: {
          title: 'Astuce :',
          text: 'Cumulez vos avantages Club Employés avec les promotions en cours !'
        }
      },
      {
        title: `Votre carte <span class='highlight'>Mastercard</span>`,
        subtitle: 'Utilisable partout dans le monde',
        image: '/images/auth-mastercard.png',
        alt: 'Carte Mastercard',
        tips: {
          title: 'Bon à savoir :',
          text: 'Votre carte Club Employés est acceptée sur tout le réseau Mastercard.'
        }
      }
    ]"
  >
    <!-- Form content slot -->
    <form class="login-form">
      <div class="form-group">
        <label for="email" class="form-label">Adresse email</label>
        <input 
          type="email" 
          id="email" 
          class="form-input"
          placeholder="leon.marchand@jo2024.com"
          required
        />
      </div>
      
      <div class="form-group">
        <div class="form-label-wrapper">
          <label for="password" class="form-label">Mot de passe</label>
          <a href="#" class="forgot-password-link">Mot de passe oublié ?</a>
        </div>
        <input 
          type="password" 
          id="password" 
          class="form-input"
          required
        />
      </div>
      
      <button type="submit" class="submit-button">
        Continuer
      </button>
    </form>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from './AuthLayout.vue';
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.form-label-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-label {
  font-size: var(--theme-font-size-sm);
  font-weight: var(--theme-font-weight-medium);
  color: var(--theme-colors-text);
}

.forgot-password-link {
  font-size: var(--theme-font-size-sm);
  color: var(--theme-colors-primary);
  text-decoration: none;
}

.forgot-password-link:hover {
  text-decoration: underline;
}

.form-input {
  width: 100%;
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--theme-font-size-base);
  border: 1px solid var(--theme-colors-border);
  border-radius: var(--theme-radius-md);
  background-color: var(--theme-colors-surface);
  color: var(--theme-colors-text);
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--theme-colors-primary);
  box-shadow: 0 0 0 3px rgba(var(--theme-colors-primary-rgb), 0.1);
}

.form-input::placeholder {
  color: var(--theme-colors-text-tertiary);
}

.submit-button {
  width: 100%;
  padding: var(--spacing-4) var(--spacing-6);
  font-size: var(--theme-font-size-base);
  font-weight: var(--theme-font-weight-semibold);
  color: white;
  background-color: var(--theme-colors-primary);
  border: none;
  border-radius: var(--theme-radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
}

.submit-button:hover {
  background-color: var(--theme-colors-primary-600);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.submit-button:active {
  transform: translateY(0);
  box-shadow: none;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .form-label {
    color: var(--theme-colors-text-dark);
  }
  
  .form-input {
    background-color: var(--theme-colors-surface-dark);
    border-color: var(--theme-colors-border-dark);
    color: var(--theme-colors-text-dark);
  }
  
  .form-input:focus {
    border-color: var(--theme-colors-primary-400);
  }
}
</style>
