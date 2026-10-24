
'use client';

import { useEffect, useRef } from 'react';

export default function CursorDot() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const handleMouseMove = (event) => {
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      dot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      dot.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      dot.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_18px_rgba(253,224,71,0.8)] opacity-0 transition-opacity duration-200 md:block"
      style={{ willChange: 'transform' }}
    />
  );
}
