import { useState, useEffect, useRef } from 'react';

export const useVisibility = (options = { threshold: 0.1 }) => {
    // Fix: Specify the element type for the ref to be compatible with refs on HTML elements.
    const elementRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            options
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options]);

    // Fix: Add 'as const' to ensure a tuple type is inferred.
    return [elementRef, isVisible] as const;
};
