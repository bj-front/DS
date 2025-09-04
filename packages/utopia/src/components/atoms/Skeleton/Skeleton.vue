<template>
  <component 
    :is="as" 
    class="utopia-skeleton" 
    :class="skeletonClasses" 
    :style="skeletonStyles"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  width?: string | number
  height?: string | number
  radius?: string | number
  animated?: boolean
  block?: boolean
  as?: string
  bg?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: 'auto',
  height: 'auto',
  radius: '4px',
  animated: false,
  block: false,
  as: 'div',
  bg: false
})

const skeletonClasses = computed(() => ({
  'utopia-skeleton--animated': props.animated,
  'utopia-skeleton--block': props.block,
  'utopia-skeleton--bg': props.bg
}))

const skeletonStyles = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  borderRadius: typeof props.radius === 'number' ? `${props.radius}px` : props.radius
}))
</script>

<style scoped>
.utopia-skeleton {
  /* Variables CSS locales */
  --skeleton-bg-color: var(--theme-colors-brand-primary-25);
  --skeleton-content-color: var(--theme-colors-brand-primary-50);
  --skeleton-shimmer-color: var(--theme-colors-brand-primary-200);
  --skeleton-animation-duration: 1.5s;
  
  display: inline-block;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-2);

}

/* Couleur de fond pour le conteneur quand bg est true */
.utopia-skeleton--bg {
  background-color: var(--skeleton-bg-color);
  padding: var(--spacing-2);
}

.utopia-skeleton--block {
  display: block;
}

.utopia-skeleton--animated::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    var(--skeleton-shimmer-color),
    transparent
  );
  animation: skeleton-shimmer var(--skeleton-animation-duration) infinite;
  z-index: 1;
}

@keyframes skeleton-shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}



</style>