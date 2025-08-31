import React, { forwardRef, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ children, className = '' }, ref) => {
  return (
    <div ref={ref} className={`w-full max-w-[1280px] mx-auto px-6 lg:px-[60px] ${className}`}>
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container;