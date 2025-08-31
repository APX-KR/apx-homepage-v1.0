
import React, { createContext, useContext } from 'react';

interface InternalNavigationContextType {
    navigate: (path: string) => void;
}

export const InternalNavigationContext = createContext<InternalNavigationContextType | undefined>(undefined);

export const useInternalNavigation = () => {
    const context = useContext(InternalNavigationContext);
    if (!context) {
        throw new Error('useInternalNavigation must be used within an InternalNavigationProvider');
    }
    return context;
};