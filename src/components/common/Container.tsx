import React, { forwardRef, ReactNode } from 'react';

// FIX: Add props interface for type safety.
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// FIX: Type forwardRef with the element and props types.
const Container = forwardRef<HTMLDivElement, ContainerProps>(({ children, className = '' }, ref) => {
  return (
    // FIX: The ref type mismatch is resolved by correctly typing forwardRef.
    <div ref={ref} className={`w-full max-w-[1280px] mx-auto px-6 lg:px-[60px] ${className}`}>
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container;