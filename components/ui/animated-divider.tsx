'use client';

import { useEffect, useRef, useState } from 'react';

type Direction = 'left' | 'right' | 'top' | 'bottom' | 'center';
type ColorVariant = 'blue' | 'black' | 'blueToBlack';

interface AnimatedDividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  direction?: Direction;
  duration?: number;
  colorVariant?: 'blue' | 'black' | 'blueToBlack';
  thickness?: string;
}

const colorMap = {
  blue: 'bg-blue-600 dark:bg-blue-400',
  black: 'bg-black dark:bg-white',
  blueToBlack: 'bg-gradient-to-r from-blue-600 to-black dark:from-blue-400 dark:to-zinc-450',
};

const getTransformOrigin = (orientation: 'horizontal' | 'vertical', direction: Direction) => {
  if (orientation === 'horizontal') {
    if (direction === 'right') return 'right';
    if (direction === 'left') return 'left';
    return 'center';
  } else {
    if (direction === 'top') return 'top';
    if (direction === 'bottom') return 'bottom';
    return 'center';
  }
};

const getInitialTransform = (orientation: 'horizontal' | 'vertical') => {
  return orientation === 'horizontal' ? 'scaleX(0)' : 'scaleY(0)';
};

export function AnimatedDivider({
  className = '',
  orientation = 'horizontal',
  direction = 'left',
  duration = 2,
  colorVariant = 'blueToBlack',
  thickness = 'h-0.5',
  
}: AnimatedDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const isHorizontal = orientation === 'horizontal';
  const transformOrigin = getTransformOrigin(orientation, direction);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${isHorizontal ? 'w-full ' + thickness : 'h-full w-1'} ${className}`}
    >
      <div
        className={`${colorMap[colorVariant]} ${isHorizontal ? 'h-full' : 'w-full h-full'}`}
        style={{
          transform: isVisible ? (isHorizontal ? 'scaleX(1)' : 'scaleY(1)') : getInitialTransform(orientation),
          transformOrigin: transformOrigin,
          transition: `transform ${duration}s cubic-bezier(0.34, 1.56, 0.64, 1)`,
        }}
      />
    </div>
  );
}
