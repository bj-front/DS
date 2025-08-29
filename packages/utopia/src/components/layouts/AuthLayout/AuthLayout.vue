<template>
  <div class="utopia-auth-layout">
    <!-- Left side: Form section -->
    <div class="auth-form-section">
      <div class="auth-form-container">
        <!-- Logo -->
        <div class="auth-logo">
          <slot name="logo">
            <Logo brand="club-employes" variant="small" size="md" />
          </slot>
        </div>

        <!-- Welcome section -->
        <div class="auth-welcome">
          <h1 class="auth-title">
            {{ title }}
            <span v-if="showWaveEmoji" class="wave-emoji">👋</span>
          </h1>
          <p class="auth-subtitle">{{ subtitle }}</p>
        </div>

        <!-- Form slot -->
        <div class="auth-form">
          <slot />
        </div>

        <!-- Tips section -->
        <div v-if="showTips" class="auth-tips">
          <div class="tips-icon">
            <Icon name="Lightbulb" size="large" />
          </div>
          <div class="tips-content">
            <h3 class="tips-title">{{ tipsTitle }}</h3>
            <p class="tips-text">{{ tipsText }}</p>
            <div v-if="contactInfo" class="tips-contact">
              <span>{{ contactInfo.text }}</span>
              <a :href="`tel:${contactInfo.phone}`" class="contact-phone">
                {{ contactInfo.phone }}
              </a>
              <span>ou à l'adresse</span>
              <a :href="`mailto:${contactInfo.email}`" class="contact-email">
                {{ contactInfo.email }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right side: Slider section -->
    <div 
      class="auth-slider-section"
      :class="{ 'bottomsheet-open': isBottomsheetOpen }"
    >
      <!-- Bottomsheet header (always visible on mobile) -->
      <div class="bottomsheet-header" @click="toggleBottomsheet" style="pointer-events: auto;">
        <div class="bottomsheet-handle"></div>
        <h3 class="bottomsheet-title">Mes avantages</h3>
        <button 
          class="bottomsheet-toggle"
          @click.stop="toggleBottomsheet"
          aria-label="Toggle bottomsheet"
        >
          <Icon :name="isBottomsheetOpen ? 'Chevron-down' : 'Chevron-up'" size="small" stroke-width="2" />
        </button>
      </div>
      
      <Slider
        :slides="formattedSlides"
        direction="horizontal"
        :autoplay="autoplay"
        :autoplay-delay="autoplayDelay"
        show-dots
        show-controls
        :always-show-controls="false"
        @slide-change="handleSlideChange"
      >
        <template #slide="{ slide }">
          <div class="auth-slide-content">
            <!-- Background image -->
            <div v-if="slide.image" class="slide-image-wrapper">
              <img 
                :src="slide.image" 
                :alt="slide.alt || 'Slide image'"
                class="slide-image"
              />
            </div>
            
            <!-- Tips box at top -->
            <div v-if="slide.tips" class="slide-tips">
              <div class="tips-icon">
                <Icon name="Lightbulb" size="large" />
              </div>
              <div class="tips-text">
                <strong>{{ slide.tips.title }}</strong><br>
                {{ slide.tips.text }}
              </div>
            </div>

            <!-- Title and subtitle at bottom -->
            <div v-if="slide.title || slide.subtitle" class="slide-text">
              <h2 v-if="slide.title" class="slide-title" v-html="slide.title"></h2>
              <p v-if="slide.subtitle" class="slide-subtitle">{{ slide.subtitle }}</p>
            </div>
          </div>
        </template>
      </Slider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import Icon from '../../atoms/Icon/Icon.vue'
import Logo from '../../atoms/Logo/Logo.vue'
import Slider from '../../molecules/Slider/Slider.vue'

interface ContactInfo {
  text: string
  phone: string
  email: string
}

interface Slide {
  title?: string
  subtitle?: string
  image?: string
  alt?: string
  tips?: {
    title: string
    text: string
  }
}

interface Props {
  title?: string
  subtitle?: string
  showWaveEmoji?: boolean
  showTips?: boolean
  tipsTitle?: string
  tipsText?: string
  contactInfo?: ContactInfo
  slides?: Slide[]
  autoplay?: boolean
  autoplayDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Bienvenue',
  subtitle: 'Veuillez entrer vos identifiants de connexion.',
  showWaveEmoji: true,
  showTips: true,
  tipsTitle: 'Tips',
  tipsText: "N'hésitez pas à nous contacter si vous rencontrez le moindre problème lors de votre connexion.",
  slides: () => [
    {
      title: "Des réductions <span class='highlight'>exclusives</span>",
      subtitle: 'Chez vos enseignes préférées',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80',
      alt: 'Shopping et réductions',
      tips: {
        title: 'Tips :',
        text: 'Pensez à utiliser votre plateforme Club Employés pour profiter jusqu\'à 20% de réduction !'
      }
    }
  ],
  autoplay: true,
  autoplayDelay: 5000
})

// State for mobile bottomsheet
const isBottomsheetOpen = ref(false)

const toggleBottomsheet = () => {
  console.log('Toggle bottomsheet clicked, current state:', isBottomsheetOpen.value)
  isBottomsheetOpen.value = !isBottomsheetOpen.value
  console.log('New state:', isBottomsheetOpen.value)
}

// Format slides for the Slider component
const formattedSlides = computed(() => props.slides)

// Handle slide change event from Slider
const handleSlideChange = (index: number) => {
  // You can add any additional logic here when slide changes
  console.log('Slide changed to:', index)
}

// Handle escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isBottomsheetOpen.value) {
    toggleBottomsheet()
  }
}

// Setup and cleanup
onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.utopia-auth-layout {
  display: flex;
  height: 100vh;
  background-color: var(--theme-colors-background);
  overflow: hidden;
  box-sizing: border-box;
  gap: 0;
}

/* Left side - Form section */
.auth-form-section {
  flex: 0 0 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--spacing-12);
  background-color: var(--theme-colors-surface);
  height: 100%;
  overflow-y: auto;
  border-radius: var(--spacing-12) 0 0 var(--spacing-12);
  box-sizing: border-box;
}

.auth-form-container {
  width: 100%;
  max-width: 380px;
}

.auth-logo {
  margin-bottom: var(--spacing-12);
  /* Debug: make sure logo is visible */
  min-height: 30px;
  border: 1px solid red;
}

/* Debug: check if CSS variables are defined */
.auth-logo::before {
  content: 'Logo should be here';
  display: block;
  color: red;
  font-size: 12px;
}

.auth-welcome {
  margin-bottom: var(--spacing-8);
}

.auth-title {
  font-size: var(--theme-font-size-3xl);
  font-weight: var(--theme-font-weight-bold);
  color: var(--theme-colors-text);
  margin: 0 0 var(--spacing-2) 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.wave-emoji {
  display: inline-block;
  animation: wave 0.6s ease-in-out;
  animation-iteration-count: 1;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.auth-subtitle {
  font-size: var(--theme-font-size-base);
  color: var(--theme-colors-text-secondary);
  margin: 0;
}

.auth-form {
  margin-bottom: var(--spacing-12);
}

/* Tips section */
.auth-tips {
  background-color: var(--theme-colors-warning-50);
  border-radius: var(--spacing-12);
  padding: var(--spacing-6);
  display: flex;
  gap: var(--spacing-4);
}

.tips-icon {
  flex-shrink: 0;
  color: var(--theme-colors-brand-primary-500);
}

.tips-content {
  flex: 1;
}

.tips-title {
  font-size: var(--theme-font-size-lg);
  font-weight: var(--theme-font-weight-semibold);
  color: var(--theme-colors-warning-800);
  margin: 0 0 var(--spacing-1) 0;
}

.tips-text {
  font-size: var(--theme-font-size-sm);
  color: var(--theme-colors-warning-700);
  margin: 0 0 var(--spacing-2) 0;
}

.tips-contact {
  font-size: var(--theme-font-size-sm);
  color: var(--theme-colors-warning-700);
}

.contact-phone,
.contact-email {
  color: var(--theme-colors-warning-800);
  font-weight: var(--theme-font-weight-semibold);
  text-decoration: none;
}

.contact-phone:hover,
.contact-email:hover {
  text-decoration: underline;
}

/* Right side - Slider section */
.auth-slider-section {
  flex: 0 0 45%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  border-radius: 0 var(--spacing-12) var(--spacing-12) 0;
  background: var(--theme-colors-surface-background);
  box-sizing: border-box;
}

.slider-container {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  container-type: size;
}

/* Slider navigation */
.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.slider-nav:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.1);
}

.slider-nav--prev {
  left: var(--spacing-8);
}

.slider-nav--next {
  right: var(--spacing-8);
}

/* Slides */
.slider-track {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.6s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-12);
}

.slide--active {
  opacity: 1;
}

.slide-content {
  text-align: center;
  color: white;
  margin-bottom: var(--spacing-12);
  z-index: 5;
}

.slide-title {
  font-size: var(--theme-font-size-4xl);
  font-weight: var(--theme-font-weight-bold);
  margin: 0 0 var(--spacing-4) 0;
  line-height: 1.2;
}

.slide-title :deep(.highlight) {
  color: #fbbf24;
}

.slide-subtitle {
  font-size: var(--theme-font-size-lg);
  opacity: 0.9;
  margin: 0;
}

.slide-visual {
  position: relative;
  z-index: 5;
  max-width: 600px;
  margin: 0 auto;
}

.visual-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Floating logos */
.floating-logos {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-logo {
  position: absolute;
  background: white;
  border-radius: var(--spacing-12);
  padding: var(--spacing-4);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  animation: float 6s ease-in-out infinite;
}

.floating-logo:nth-child(odd) {
  animation-delay: -3s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.logo-image {
  width: 60px;
  height: auto;
  display: block;
}

/* Dots indicator */
.slider-dots {
  position: absolute;
  bottom: var(--spacing-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--spacing-2);
  z-index: 10;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background-color: rgba(255, 255, 255, 0.6);
}

.dot--active {
  width: 24px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
}

/* New slide content styles */
.auth-slide-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-12) var(--spacing-8);
  color: white;
  box-sizing: border-box;
  position: relative;
}

/* Auth slider specific */
.auth-slider-section :deep(.utopia-slider) {
  aspect-ratio: 4 / 6;
  height: calc(100% - var(--spacing-16));
  width: auto;
  max-width: calc(100% - var(--spacing-16));
  max-height: calc(100% - var(--spacing-16));
  background: linear-gradient(135deg, 
    var(--theme-colors-surface-background) 0%, 
    var(--theme-colors-background) 100%
  );
  border: none;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.15);
  margin: auto;
}

/* Override dots color for dark background */
.auth-slider-section :deep(.dot) {
  background-color: rgba(255, 255, 255, 0.4);
}

.auth-slider-section :deep(.dot:hover) {
  background-color: rgba(255, 255, 255, 0.6);
}

.auth-slider-section :deep(.dot--active) {
  background-color: rgba(255, 255, 255, 0.9);
}

/* Tips box */
.slide-tips {
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--spacing-12);
  padding: var(--spacing-4);
  display: flex;
  gap: var(--spacing-3);
  align-items: flex-start;
  max-width: 450px;
  margin: 0 auto;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.tips-icon {
  flex-shrink: 0;
  color: var(--theme-colors-brand-primary-500);
}

.tips-text {
  flex: 1;
  color: var(--theme-colors-text);
  font-size: var(--theme-font-size-sm);
  line-height: 1.5;
}

.tips-text strong {
  font-weight: var(--theme-font-weight-semibold);
}

/* Slide image */
.slide-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.slide-image-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0) 0%, 
    rgba(0, 0, 0, 0) 50%, 
    rgba(0, 0, 0, 0.2) 80%,
    rgba(0, 0, 0, 0.4) 100%
  );
  pointer-events: none;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Slide text */
.slide-text {
  text-align: center;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
  padding: var(--spacing-6) var(--spacing-8);
  border-radius: var(--spacing-12);
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 0 auto;
}

.auth-slide-content .slide-title {
  font-size: var(--theme-font-size-4xl);
  font-weight: var(--theme-font-weight-bold);
  margin: 0 0 var(--spacing-2) 0;
  line-height: 1.2;
  color: white;
}

.auth-slide-content .slide-subtitle {
  font-size: var(--theme-font-size-lg);
  opacity: 0.9;
  margin: 0;
  color: white;
}

/* Responsive */
@media (max-width: 1400px) {
  .utopia-auth-layout {
    padding: 50px;
  }
}

@media (max-width: 1024px) {
  .utopia-auth-layout {
    padding: 30px;
  }
  
  .auth-form-section {
    flex: 0 0 55%;
  }
  
  .auth-slider-section {
    flex: 0 0 45%;
  }
  
  .slide-title {
    font-size: var(--theme-font-size-3xl);
  }
}

/* Desktop only: align sections to opposite sides */
@media (min-width: 1025px) {
  .auth-form-section {
    justify-content: flex-end;
  }
  
  .auth-form-container {
    margin-right: var(--spacing-8);
  }
  
  .auth-slider-section {
    justify-content: flex-start;
  }
  
  .slider-container {
    justify-content: flex-start;
    margin-left: var(--spacing-8);
  }
}

/* Mobile bottomsheet styles */
.bottomsheet-trigger {
  display: none;
  position: fixed;
  bottom: var(--spacing-6);
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background: var(--theme-colors-brand-primary-500);
  color: white;
  border: none;
  border-radius: var(--theme-radius-full);
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--theme-font-size-sm);
  font-weight: var(--theme-font-weight-medium);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  align-items: center;
  gap: var(--spacing-2);
  transition: all 0.2s ease;
}
.bottomsheet-title {
  display: none;
}
.bottomsheet-toggle {
  display: none;
}


.bottomsheet-trigger:hover {
  background: var(--theme-colors-brand-primary-600);
  transform: translateX(-50%) translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.bottomsheet-overlay {
  display: none; /* Not needed anymore */
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .utopia-auth-layout {
    flex-direction: column;
    padding: 20px;
    height: 100vh;
    gap: 20px;
    overflow: hidden; /* Prevent scroll when bottomsheet is open */
  }
  
  /* No need to lock body scroll since bottomsheet is always visible */
  
  .bottomsheet-trigger {
    display: none; /* Hidden when bottomsheet is visible */
  }
  
  .auth-form-section {
    flex: 1;
    min-height: auto;
    border-radius: var(--spacing-12);
    padding-bottom: var(--spacing-24); /* Make space for the bottomsheet */
  }
  
  .auth-slider-section {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 95vh;
    border-radius: var(--spacing-12) var(--spacing-12) 0 0;
    background: var(--theme-colors-surface-background);
    z-index: 999;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(calc(100% - 80px));
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    border-top-left-radius: var(--spacing-12);
    border-top-right-radius: var(--spacing-12);
    padding-bottom: var(--spacing-4) !important;
  }
  
  .auth-slider-section.bottomsheet-open {
    transform: translateY(0);
  }
  
    /* Bottomsheet header - hidden by default */
  .bottomsheet-header {
    display: none;
  }
  
  .auth-slider-section .bottomsheet-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-4) var(--spacing-6);
    border-bottom: 1px solid var(--theme-colors-border-light);
    background: var(--theme-colors-surface-background);
    z-index: 10;
    cursor: pointer;
    user-select: none;
    min-height: 80px;
    flex-shrink: 0;
    position: relative;
    /* Debug: make sure content is visible */
    color: var(--theme-colors-text);
  }
  
  .bottomsheet-handle {
    position: absolute;
    top: var(--spacing-2);
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 4px;
    background: var(--theme-colors-border);
    border-radius: var(--theme-radius-full);
    z-index: 1;
  }
  
  .bottomsheet-title {
    display: block;
    font-size: var(--theme-font-size-lg);
    font-weight: var(--theme-font-weight-semibold);
    margin: 0;
    color: var(--theme-colors-text);
    flex: 1;
    text-align: center;
    /* Debug: ensure visibility */
    opacity: 1 !important;
  }
  
  .bottomsheet-toggle {
    background: var(--theme-colors-surface-hover);
    border: none;
    padding: var(--spacing-2);
    cursor: pointer;
    color: var(--theme-colors-text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--theme-radius-md);
    transition: all 0.2s ease;
    min-width: 32px;
    height: 32px;
    z-index: 2;
  }
  
  .bottomsheet-toggle:hover {
    background: var(--theme-colors-surface-hover);
    color: var(--theme-colors-text);
  }
  
  .auth-slider-section {
    overflow: hidden;
    padding: 0;
  }
  
  .auth-slider-section :deep(.utopia-slider) {
    width: 100%;
    flex: 1;
    max-height: none;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    overflow: hidden;
  }
  
  .auth-slider-section.bottomsheet-open :deep(.utopia-slider) {
    opacity: 1;
  }
  
  .slider-nav {
    width: 40px;
    height: 40px;
  }
  
  .slide-title {
    font-size: var(--theme-font-size-2xl);
  }
  
  .slide-subtitle {
    font-size: var(--theme-font-size-base);
  }
}

@media (max-width: 480px) {
  .utopia-auth-layout {
    padding: 10px;
  }
  
  .auth-form-section {
    padding: var(--spacing-6) var(--spacing-4);
  }
  
  .auth-slider-section :deep(.utopia-slider) {
    width: calc(100% - var(--spacing-4));
    height: auto;
    max-height: 50vh;
  }
  
  .floating-logo {
    padding: var(--spacing-2);
  }
  
  .logo-image {
    width: 40px;
  }
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .auth-form-section {
    background-color: var(--theme-colors-surface-dark);
  }
  
  .auth-title {
    color: var(--theme-colors-text-dark);
  }
  
  .auth-subtitle {
    color: var(--theme-colors-text-secondary-dark);
  }
  
  .auth-tips {
    background-color: var(--theme-colors-warning-900);
  }
  
  .tips-title {
    color: var(--theme-colors-warning-100);
  }
  
  .tips-text,
  .tips-contact {
    color: var(--theme-colors-warning-200);
  }
  
  .contact-phone,
  .contact-email {
    color: var(--theme-colors-warning-50);
  }
}
</style>