'use client';

import { useEffect, useRef, useState, ReactNode, Children, cloneElement, isValidElement, ElementType } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  baseDelay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  as?: ElementType;
}

export default function StaggerContainer({
  children,
  staggerDelay = 100,
  baseDelay = 0,
  duration = 600,
  distance = 30,
  className = '',
  as: Component = 'div',
}: StaggerContainerProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const staggeredChildren = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;

    const delay = baseDelay + index * staggerDelay;

    const style = {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
      transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      willChange: 'opacity, transform',
    };

    return cloneElement(child as React.ReactElement<{ style?: React.CSSProperties }>, {
      style: {
        ...((child as React.ReactElement<{ style?: React.CSSProperties }>).props.style || {}),
        ...style,
      },
    });
  });

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
    >
      {staggeredChildren}
    </Component>
  );
}
