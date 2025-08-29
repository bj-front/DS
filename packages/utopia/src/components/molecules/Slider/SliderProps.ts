export interface SlideType {
  image?: string;
  alt?: string;
  content?: string;
  [key: string]: any;
}

export interface SliderProps {
  slides: SlideType[];
  direction?: 'horizontal' | 'vertical';
  autoplay?: boolean;
  autoplayDelay?: number;
  showDots?: boolean;
  showControls?: boolean;
  alwaysShowControls?: boolean;
  transitionDuration?: number;
  height?: string;
}
