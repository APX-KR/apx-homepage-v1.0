
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Solution } from '../types';
import solutionsData from '../data/solutions.json';

interface SolutionContextType {
    solutions: Solution[];
    loading: boolean;
    getSolutionByCode: (code: string) => Solution | undefined;
    portfolio: Solution[];
    togglePortfolioItem: (solution: Solution) => void;
    isItemInPortfolio: (solution: Solution) => boolean;
}

const SolutionContext = createContext<SolutionContextType | undefined>(undefined);

const activeSolutions = solutionsData.filter(s => s.status === '활성 (Active)');

export const SolutionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
