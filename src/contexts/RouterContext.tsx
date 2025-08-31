import { createContext, useContext } from 'react';

export const RouterContext = createContext(undefined);

export const useRouter = () => {
    const context = useContext(RouterContext);
    if (!context) {
        throw new Error('useRouter must be used within a RouterProvider');
    }
    return context;
};