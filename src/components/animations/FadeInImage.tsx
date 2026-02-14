'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface FadeInImageProps extends Omit<ImageProps, 'onLoad'> {
  delay?: number;
  duration?: number;
  hoverScale?: number;
  containerClassName?: string;
}

export default function FadeInImage({
  delay = 0,
  duration = 600,
  hoverScale = 1.05,
  containerClassName = '',
  className = '',
  alt,
  ...props
}: FadeInImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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

  const shouldAnimate = isVisible && isLoaded;

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${containerClassName}`}
      style={{
        opacity: shouldAnimate ? 1 : 0,
        transition: `opacity ${duration}ms ease-out ${delay}ms`,
      }}
    >
      <Image
        {...props}
        alt={alt}
        className={`transition-transform duration-300 ease-out ${className}`}
        style={{
          transform: shouldAnimate ? 'scale(1)' : 'scale(1.02)',
          ['--hover-scale' as string]: hoverScale,
        }}
        onLoad={() => setIsLoaded(true)}
      />
      <style jsx global>{`
        .overflow-hidden:hover img {
          transform: scale(var(--hover-scale, 1.05)) !important;
        }
      `}</style>
    </div>
  );
}
