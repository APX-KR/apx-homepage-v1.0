import React, { createContext, useContext } from 'react';

export const InternalNavigationContext = createContext(undefined);

export const useInternalNavigation = () => {
    const context = useContext(InternalNavigationContext);
    if (!context) {
        throw new Error('useInternalNavigation must be used within an InternalNavigationProvider');
    }
    return context;
};
