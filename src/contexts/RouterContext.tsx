'use client';

import { createContext, useContext } from 'react';

interface RouterContextType {
    navigate: (path: string) => void;
}

export const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const useRouter = () => {
    const context = useContext(RouterContext);
    if (!context) {
        throw new Error('useRouter must be used within a RouterProvider');
    }
    return context;
};
