<template>
  <div 
    class="utopia-skeleton-avatar" 
    :class="skeletonClasses" 
    :style="skeletonStyles"
  ></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  size?: string | number
  rounded?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: '40px',
  rounded: true,
  animated: true
})

const skeletonClasses = computed(() => ({
  'utopia-skeleton-avatar--animated': props.animated,
  'utopia-skeleton-avatar--rounded': props.rounded
}))

const skeletonStyles = computed(() => ({
  width: typeof props.size === 'number' ? `${props.size}px` : props.size,
  height: typeof props.size === 'number' ? `${props.size}px` : props.size,
  borderRadius: props.rounded ? '50%' : '4px'
}))
</script>

<style scoped>
.utopia-skeleton-avatar {
  /* Variables CSS locales */
  --skeleton-bg-color: var(--theme-colors-brand-primary-100);
  --skeleton-shimmer-color: var(--theme-colors-brand-primary-300);
  --skeleton-animation-duration: 1.5s;
  
  display: inline-block;
  background-color: var(--skeleton-bg-color);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.utopia-skeleton-avatar--animated::before {
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

