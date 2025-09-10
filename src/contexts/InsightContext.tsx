
import React, { createContext, useState, useContext, ReactNode } from 'react';
import insightsData from '../data/insights.json';
import { Insight } from '../types.ts';

interface InsightContextType {
    insights: Insight[];
    loading: boolean;
    getInsightBySlug: (slug: string) => Insight | undefined;
}

const InsightContext = createContext<InsightContextType | undefined>(undefined);

// Sort insights by date in descending order (most recent first) at build time
const sortedInsights: Insight[] = [...(insightsData as Insight[])].sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, '-')).getTime();
    const dateB = new Date(b.date.replace(/\./g, '-')).getTime();
    return dateB - dateA;
});

// FIX: Update InsightProvider component props type to use React.PropsWithChildren to correctly handle children and resolve TypeScript errors.
export const InsightProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [insights] = useState<Insight[]>(sortedInsights);
    const [loading] = useState(false); // Data is now loaded at build time

    const getInsightBySlug = (slug: string) => {
        return insights.find(i => i.slug === slug);
    };

    return (
        <InsightContext.Provider value={{ insights, loading, getInsightBySlug }}>
            {children}
        </InsightContext.Provider>
    );
};

export const useInsights = () => {
    const context = useContext(InsightContext);
    if (context === undefined) {
        throw new Error('useInsights must be used within an InsightProvider');
    }
    return context;
};
