
import React, { createContext, useState, useContext, ReactNode } from 'react';
import solutionsData from '../data/solutions.json';
import { Solution } from '../types.ts';

interface SolutionContextType {
    solutions: Solution[];
    loading: boolean;
    getSolutionByCode: (code: string) => Solution | undefined;
    portfolio: Solution[];
    togglePortfolioItem: (solution: Solution) => void;
    isItemInPortfolio: (solution: Solution) => boolean;
}

const SolutionContext = createContext<SolutionContextType | undefined>(undefined);

const activeSolutions: Solution[] = (solutionsData as Solution[]).filter(s => s.status === '활성 (Active)');

// FIX: Update SolutionProvider component props type to use React.PropsWithChildren to correctly handle children and resolve TypeScript errors.
export const SolutionProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [solutions] = useState<Solution[]>(activeSolutions);
    const [loading] = useState(false); // Data is now loaded at build time
    const [portfolio, setPortfolio] = useState<Solution[]>([]);

    const getSolutionByCode = (code: string) => {
        return solutions.find(s => s.solution_code === code);
    };

    const togglePortfolioItem = (solution: Solution) => {
        setPortfolio(prev =>
            prev.find(p => p.solution_code === solution.solution_code)
                ? prev.filter(p => p.solution_code !== solution.solution_code)
                : [...prev, solution]
        );
    };

    const isItemInPortfolio = (solution: Solution) => {
        return portfolio.some(p => p.solution_code === solution.solution_code);
    };

    return (
        <SolutionContext.Provider value={{ solutions, loading, getSolutionByCode, portfolio, togglePortfolioItem, isItemInPortfolio }}>
            {children}
        </SolutionContext.Provider>
    );
};

export const useSolutions = () => {
    const context = useContext(SolutionContext);
    if (context === undefined) {
        throw new Error('useSolutions must be used within a SolutionProvider');
    }
    return context;
};
