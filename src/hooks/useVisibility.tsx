import { useState, useEffect, useRef, RefObject } from 'react';

// FIX: Add generic type and proper type for options and return value.
export const useVisibility = <T extends Element>(options: IntersectionObserverInit = { threshold: 0.1 }): [RefObject<T>, boolean] => {
    const elementRef = useRef<T>(null);
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

    return [elementRef, isVisible];
};