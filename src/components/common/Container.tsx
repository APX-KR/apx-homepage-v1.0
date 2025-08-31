import React, { forwardRef, ReactNode } from 'react';

// Fix: Define props interface for Container component
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// Fix: Add types for props and ref to forwardRef
const Container = forwardRef<HTMLDivElement, ContainerProps>(({ children, className = '' }, ref) => {
  return (
    <div ref={ref} className={`w-full max-w-[1280px] mx-auto px-6 lg:px-[60px] ${className}`}>
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container;