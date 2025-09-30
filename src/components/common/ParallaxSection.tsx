import { motion } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useParallax } from '../../hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

function ParallaxSection({
  children,
  speed = 50,
  direction = 'up',
  className = ''
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useParallax(ref, { speed, direction });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

export default ParallaxSection;