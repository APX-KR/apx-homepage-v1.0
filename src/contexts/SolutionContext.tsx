
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Solution } from '../types';

interface SolutionContextType {
    solutions: Solution[];
    loading: boolean;
    getSolutionByCode: (code: string) => Solution | undefined;
    portfolio: Solution[];
    togglePortfolioItem: (solution: Solution) => void;
    isItemInPortfolio: (solution: Solution) => boolean;
}

const SolutionContext = createContext<SolutionContextType | undefined>(undefined);

export const SolutionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [solutions, setSolutions] = useState<Solution[]>([]);
    const [loading, setLoading] = useState(true);
    const [portfolio, setPortfolio] = useState<Solution[]>([]);

    useEffect(() => {
        // In this static CSR environment, we fetch the JSON file as a static asset.
        // This assumes the file is accessible at the specified path relative to the HTML file.
        fetch('./src/data/solutions.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data: Solution[]) => {
                const activeSolutions = data.filter(s => s.status === '활성 (Active)');
                setSolutions(activeSolutions);
            })
            .catch(error => {
                console.error('Failed to load solutions data:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

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