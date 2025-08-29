<template>
  <div 
    class="utopia-slider"
    :class="[
      `utopia-slider--${direction}`,
      { 
        'utopia-slider--controls-visible': showControls,
        'utopia-slider--dragging': isDragging
      }
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Slides container -->
    <div class="slider-viewport">
      <!-- Previous button -->
      <Button 
        v-if="slides.length > 1" 
        class="slider-nav slider-nav--prev"
        :class="{ 'slider-nav--visible': isHovered || alwaysShowControls }"
        @click="previousSlide"
        :aria-label="'Previous slide'"
        variant="secondary"
        size="sm"
      >
        <slot name="prev-icon">
          <Icon :name="direction === 'vertical' ? 'Chevron-up' : 'Chevron-left'" size="small" />
        </slot>
      </Button>

      <!-- Next button -->
      <Button 
        v-if="slides.length > 1" 
        class="slider-nav slider-nav--next"
        :class="{ 'slider-nav--visible': isHovered || alwaysShowControls }"
        @click="nextSlide"
        :aria-label="'Next slide'"
        variant="secondary"
        size="sm"
      >
        <slot name="next-icon">
          <Icon :name="direction === 'vertical' ? 'Chevron-down' : 'Chevron-right'" size="small" />
        </slot>
      </Button>

      <div 
        class="slider-track"
        :style="trackStyle"
        @touchstart="handleDragStart"
        @touchmove="handleDragMove"
        @touchend="handleDragEnd"
        @touchcancel="handleDragEnd"
        @mousedown="handleDragStart"
      >
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          class="slide"
          :class="{ 'slide--active': index === currentSlide }"
        >
          <slot name="slide" :slide="slide" :index="index">
            <!-- Default slide template -->
            <div v-if="slide.image" class="slide-image">
              <img :src="slide.image" :alt="slide.alt || `Slide ${index + 1}`" />
            </div>
            <div v-if="slide.content" class="slide-content" v-html="slide.content"></div>
          </slot>
        </div>
      </div>
      
      <!-- Dots indicator inside viewport -->
      <div 
        v-if="showDots && slides.length > 1" 
        class="slider-dots"
        :class="`slider-dots--${direction}`"
      >
        <button 
          v-for="(_, index) in slides" 
          :key="index"
          class="dot"
          :class="{ 'dot--active': index === currentSlide }"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import Button from '../../atoms/Button/Button.vue';
import Icon from '../../atoms/Icon/Icon.vue';
import type { SliderProps as Props } from './SliderProps';

const props = withDefaults(defineProps<Props>(), {
  slides: () => [],
  direction: 'horizontal',
  autoplay: true,
  autoplayDelay: 2000,
  showDots: true,
  showControls: true,
  alwaysShowControls: false,
  transitionDuration: 600,
  height: '100%'
})

const emit = defineEmits<{
  'slide-change': [index: number]
}>()

const currentSlide = ref(0)
const isHovered = ref(false)
let autoplayInterval: number | null = null
let hoverTimeout: number | null = null

// Drag/swipe state
const isDragging = ref(false)
const startX = ref(0)
const startY = ref(0)
const currentX = ref(0)
const currentY = ref(0)
const dragOffset = ref(0)

const trackStyle = computed(() => {
  const slideOffset = -currentSlide.value * 100
  const dragPx = isDragging.value ? dragOffset.value : 0
  
  if (props.direction === 'vertical') {
    return {
      transform: `translateY(calc(${slideOffset}% + ${dragPx}px))`,
      transition: isDragging.value ? 'none' : `transform ${props.transitionDuration}ms ease-in-out`
    }
  } else {
    return {
      transform: `translateX(calc(${slideOffset}% + ${dragPx}px))`,
      transition: isDragging.value ? 'none' : `transform ${props.transitionDuration}ms ease-in-out`
    }
  }
})

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? props.slides.length - 1 
    : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const handleMouseEnter = () => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
  }
  hoverTimeout = window.setTimeout(() => {
    isHovered.value = true
  }, 200)
  if (props.autoplay) {
    stopAutoplay()
  }
}

const handleMouseLeave = () => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
    hoverTimeout = null
  }
  isHovered.value = false
  if (props.autoplay) {
    startAutoplay()
  }
}

const startAutoplay = () => {
  if (props.autoplay && props.slides.length > 1) {
    autoplayInterval = window.setInterval(nextSlide, props.autoplayDelay)
  }
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

// Drag/swipe handlers
const handleDragStart = (e: TouchEvent | MouseEvent) => {
  if (props.slides.length <= 1) return
  
  isDragging.value = true
  dragOffset.value = 0
  
  if (e.type === 'touchstart') {
    const touch = (e as TouchEvent).touches[0]
    startX.value = touch.clientX
    startY.value = touch.clientY
  } else {
    e.preventDefault()
    startX.value = (e as MouseEvent).clientX
    startY.value = (e as MouseEvent).clientY
    
    // Add document listeners for mouse events
    document.addEventListener('mousemove', handleDragMove)
    document.addEventListener('mouseup', handleDragEnd)
  }
  
  stopAutoplay()
}

const handleDragMove = (e: TouchEvent | MouseEvent) => {
  if (!isDragging.value) return
  
  let clientX: number
  let clientY: number
  
  if (e.type === 'touchmove') {
    // Prevent scrolling while swiping
    e.preventDefault()
    const touch = (e as TouchEvent).touches[0]
    clientX = touch.clientX
    clientY = touch.clientY
  } else {
    e.preventDefault()
    clientX = (e as MouseEvent).clientX
    clientY = (e as MouseEvent).clientY
  }
  
  currentX.value = clientX
  currentY.value = clientY
  
  // Calculate drag offset with some resistance at edges
  const rawOffset = props.direction === 'vertical' 
    ? clientY - startY.value
    : clientX - startX.value
  
  // Add resistance at the edges
  const isFirstSlide = currentSlide.value === 0
  const isLastSlide = currentSlide.value === props.slides.length - 1
  
  if ((isFirstSlide && rawOffset > 0) || (isLastSlide && rawOffset < 0)) {
    // Apply resistance factor when trying to drag beyond bounds
    dragOffset.value = rawOffset * 0.3
  } else {
    dragOffset.value = rawOffset
  }
}

const handleDragEnd = (e: TouchEvent | MouseEvent) => {
  if (!isDragging.value) return
  
  isDragging.value = false
  
  // Remove document listeners for mouse events
  if (e.type === 'mouseup' || e.type === 'mouseleave') {
    document.removeEventListener('mousemove', handleDragMove)
    document.removeEventListener('mouseup', handleDragEnd)
  }
  
  const threshold = 50 // minimum distance in pixels to trigger slide change
  const distance = props.direction === 'vertical' 
    ? currentY.value - startY.value
    : currentX.value - startX.value
  
  // Determine the slide width/height for percentage calculation
  const slideElement = document.querySelector('.slide')
  const slideSize = slideElement 
    ? (props.direction === 'vertical' ? slideElement.clientHeight : slideElement.clientWidth)
    : 300
  
  // Calculate percentage of slide swiped
  const percentageSwiped = Math.abs(distance) / slideSize * 100
  
  // Change slide if swiped more than 20% of slide width/height or more than threshold pixels
  if (Math.abs(distance) > threshold || percentageSwiped > 20) {
    if (distance > 0 && currentSlide.value > 0) {
      // Dragged right/down - go to previous slide
      previousSlide()
    } else if (distance < 0 && currentSlide.value < props.slides.length - 1) {
      // Dragged left/up - go to next slide
      nextSlide()
    }
  }
  
  dragOffset.value = 0
  
  if (props.autoplay) {
    startAutoplay()
  }
}

watch(currentSlide, (newIndex) => {
  emit('slide-change', newIndex)
})

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
  }
})
</script>

<style scoped>
.utopia-slider {
  position: relative;
  width: 100%;
  height: v-bind(height);
  background-color: var(--theme-colors-surface-background);
  border-radius: var(--spacing-4);
  overflow: hidden;
  container-type: size;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Viewport */
.slider-viewport {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  border-radius: var(--spacing-4);
}

/* Track */
.slider-track {
  display: flex;
  height: 100%;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  touch-action: pan-y pinch-zoom;
}

.slider-track:active {
  cursor: grabbing;
}

.utopia-slider--vertical .slider-track {
  flex-direction: column;
  touch-action: pan-x pinch-zoom;
}

.utopia-slider--horizontal .slider-track {
  flex-direction: row;
}

/* Slides */
.slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;
}

.slide-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
}

.slide-content {
  padding: var(--spacing-8);
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Navigation buttons */
.slider-nav {
  position: absolute;
  z-index: 10;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 0;
}

.slider-nav--visible {
  opacity: 1;
}

/* Override Button component styles for nav */
.slider-nav :deep(.utopia-button) {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.2), 0 2px 8px -1px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  min-width: auto;
  backdrop-filter: blur(8px);
}

.slider-nav:hover :deep(.utopia-button) {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 6px 20px -2px rgba(0, 0, 0, 0.25), 0 3px 10px -1px rgba(0, 0, 0, 0.15);
}

/* Horizontal navigation */
.utopia-slider--horizontal .slider-nav--prev {
  left: 0;
  top: 50%;
  transform: translateY(-50%) translateX(-100%);
}

.utopia-slider--horizontal .slider-nav--prev.slider-nav--visible {
  transform: translateY(-50%) translateX(var(--spacing-2));
}

.utopia-slider--horizontal .slider-nav--prev:hover {
  transform: translateY(-50%) translateX(var(--spacing-3)) scale(1.05);
}

.utopia-slider--horizontal .slider-nav--next {
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(100%);
}

.utopia-slider--horizontal .slider-nav--next.slider-nav--visible {
  transform: translateY(-50%) translateX(calc(-1 * var(--spacing-2)));
}

.utopia-slider--horizontal .slider-nav--next:hover {
  transform: translateY(-50%) translateX(calc(-1 * var(--spacing-3))) scale(1.05);
}

/* Vertical navigation */
.utopia-slider--vertical .slider-nav--prev {
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
}

.utopia-slider--vertical .slider-nav--prev.slider-nav--visible {
  transform: translateX(-50%) translateY(var(--spacing-2));
}

.utopia-slider--vertical .slider-nav--prev:hover {
  transform: translateX(-50%) translateY(var(--spacing-3)) scale(1.05);
}

.utopia-slider--vertical .slider-nav--next {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
}

.utopia-slider--vertical .slider-nav--next.slider-nav--visible {
  transform: translateX(-50%) translateY(calc(-1 * var(--spacing-2)));
}

.utopia-slider--vertical .slider-nav--next:hover {
  transform: translateX(-50%) translateY(calc(-1 * var(--spacing-3))) scale(1.05);
}

/* Always show controls modifier */
.utopia-slider--controls-visible .slider-nav {
  opacity: 1;
}

/* Dragging state */
.utopia-slider--dragging .slider-track {
  cursor: grabbing;
}

.utopia-slider--dragging .slide {
  pointer-events: none;
}

.utopia-slider--dragging .slider-nav {
  opacity: 0 !important;
  pointer-events: none;
}

.utopia-slider--dragging .slider-dots {
  opacity: 0.5;
  pointer-events: none;
}

/* Dots indicator */
.slider-dots {
  position: absolute;
  display: flex;
  gap: var(--spacing-2);
  z-index: 10;
}

.slider-dots--horizontal {
  bottom: var(--spacing-4);
  left: 50%;
  transform: translateX(-50%);
  flex-direction: row;
}

.slider-dots--vertical {
  right: var(--spacing-4);
  top: 50%;
  transform: translateY(-50%);
  flex-direction: column;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.dot--active {
  background-color: rgba(255, 255, 255, 0.7);
}

.slider-dots--horizontal .dot--active {
  width: 24px;
  border-radius: 4px;
}

.slider-dots--vertical .dot--active {
  height: 24px;
  border-radius: 4px;
}

/* Dots on dark backgrounds */
.utopia-slider--dark .dot,
.auth-slider-section .dot {
  background-color: rgba(255, 255, 255, 0.4);
}

.utopia-slider--dark .dot:hover,
.auth-slider-section .dot:hover {
  background-color: rgba(255, 255, 255, 0.6);
}

.utopia-slider--dark .dot--active,
.auth-slider-section .dot--active {
  background-color: rgba(255, 255, 255, 0.9);
}

</style>
