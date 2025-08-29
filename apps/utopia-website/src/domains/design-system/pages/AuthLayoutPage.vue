<template>
  <AuthLayout
    :title="'Bienvenue'"
    :subtitle="'Veuillez entrer vos identifiants de connexion.'"
   
    :slides="slides"
  >
    <!-- Logo slot -->
    <template #logo>
      <Logo variant="auto" size="md" />
    </template>

    <!-- Form content slot -->
    <form class="login-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <InputText
          id="email"
          v-model="email"
          type="email"
          label="Adresse email"
          size="small"
          placeholder="leon.marchand@jo2024.com"
          required
        />
      </div>
      
      <div class="form-group">
        <InputText
          id="password"
          v-model="password"
          type="password"
          label="Mot de passe"
          required
        >
          <template #label-right>
            <a href="#" class="forgot-password-link">Mot de passe oublié ?</a>
          </template>
        </InputText>
      </div>
      
      <Button 
        type="submit" 
        variant="primary" 
        size="lg"
        :disabled="isLoading"
        :loading="isLoading"
        class="submit-button"
      >
        {{ isLoading ? 'Connexion...' : 'Continuer' }}
      </Button>

    </form>
  </AuthLayout>
</template>

<script setup lang="ts">
import { AuthLayout, Button, InputText, Logo } from '@club-employes/utopia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const isLoading = ref(false)

const slides = ref([
  {
    image: 'https://ce-api-prod-images.s3.fr-par.scw.cloud/cache/original/6881af850e3955.11075713.png',
  },
  {
    image: 'https://ce-api-prod-images.s3.fr-par.scw.cloud/cache/original/6881af850e3955.11075713.png',
  },
  {
    image: 'https://ce-api-prod-images.s3.fr-par.scw.cloud/cache/original/6881af850e3955.11075713.png',
  },
  {
    image: 'https://ce-api-prod-images.s3.fr-par.scw.cloud/cache/original/6881af850e3955.11075713.png',
  }
])

const handleSubmit = async (): Promise<void> => {
  isLoading.value = true
  
  // Simuler une connexion
  setTimeout(() => {
    isLoading.value = false
    alert(`Connexion avec ${email.value}`)
    // Dans une vraie app, on redirigerait vers le dashboard
    router.push('/')
  }, 2000)
}
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
  gap: var(--spacing-2);
}

.forgot-password-link {
  font-size: var(--theme-font-size-sm);
  color: var(--theme-colors-brand-primary-500);
  text-decoration: none;
}

.forgot-password-link:hover {
  text-decoration: underline;
}

.submit-button {
  width: 100%;
}

.divider {
  text-align: center;
  margin: var(--spacing-4) 0;
  position: relative;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--theme-colors-border-subtle);
}

.divider span {
  background-color: var(--theme-colors-surface-primary);
  padding: 0 var(--spacing-4);
  position: relative;
  color: var(--theme-colors-text-tertiary);
  font-size: var(--theme-font-size-sm);
}

.social-button {
  width: 100%;
}

.social-icon {
  font-size: var(--theme-font-size-lg);
}
</style>
