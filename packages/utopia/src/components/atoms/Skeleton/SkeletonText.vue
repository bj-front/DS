<template>
  <div class="utopia-skeleton-text" :class="skeletonClasses" :style="skeletonStyles">
    <div 
      v-for="(_, index) in lines" 
      :key="index"
      class="utopia-skeleton-text__line"
      :class="{ 'utopia-skeleton-text__line--last': index === lines - 1 }"
      :style="getLineStyle(index)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  lines?: number
  lineHeight?: string | number
  gap?: string | number
  lastLineWidth?: string | number
  animated?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  lines: 3,
  lineHeight: '16px',
  gap: '8px',
  lastLineWidth: '60%',
  animated: false
})

const skeletonClasses = computed(() => ({
  'utopia-skeleton-text--animated': props.animated
}))

const skeletonStyles = computed(() => ({
  '--skeleton-line-height': typeof props.lineHeight === 'number' ? `${props.lineHeight}px` : props.lineHeight,
  '--skeleton-gap': typeof props.gap === 'number' ? `${props.gap}px` : props.gap
}))

const getLineStyle = (index: number) => {
  const isLastLine = index === props.lines - 1
  return {
    width: isLastLine ? (typeof props.lastLineWidth === 'number' ? `${props.lastLineWidth}px` : props.lastLineWidth) : '100%'
  }
}
</script>

<style scoped>
.utopia-skeleton-text {
  /* Variables CSS locales */
  --skeleton-bg-color: var(--theme-colors-brand-primary-100);
  --skeleton-shimmer-color: var(--theme-colors-brand-primary-300);
  --skeleton-animation-duration: 1.5s;
  
  display: flex;
  flex-direction: column;
  gap: var(--skeleton-gap);
}

.utopia-skeleton-text__line {
  height: var(--skeleton-line-height);
  background-color: var(--skeleton-bg-color);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.utopia-skeleton-text--animated .utopia-skeleton-text__line::before {
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

