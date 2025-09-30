import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface UseParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
}

export const useParallax = (
  ref: RefObject<HTMLElement | null>,
  options: UseParallaxOptions = {}
): MotionValue<string> => {
  const { speed = 50, direction = 'up' } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [speed, -speed] : [-speed, speed]
  );

  return useTransform(y, (value) => `${value}px`);
};

export const useParallaxScale = (
  ref: RefObject<HTMLElement | null>,
  range: [number, number] = [0.8, 1.2]
): MotionValue<number> => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return useTransform(scrollYProgress, [0, 0.5, 1], [range[0], 1, range[1]]);
};

export const useParallaxOpacity = (
  ref: RefObject<HTMLElement | null>
): MotionValue<number> => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
};