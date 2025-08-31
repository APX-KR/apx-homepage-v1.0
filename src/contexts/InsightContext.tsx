'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Insight } from '../types';

interface InsightContextType {
    insights: Insight[];
    loading: boolean;
    getInsightBySlug: (slug: string) => Insight | undefined;
}

const InsightContext = createContext<InsightContextType | undefined>(undefined);

export const InsightProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [insights, setInsights] = useState<Insight[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('./src/data/insights.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data: Insight[]) => {
                // Sort insights by date in descending order (most recent first)
                const sortedData = data.sort((a, b) => {
                    const dateA = new Date(a.date.replace(/\./g, '-')).getTime();
                    const dateB = new Date(b.date.replace(/\./g, '-')).getTime();
                    return dateB - dateA;
                });
                setInsights(sortedData);
            })
            .catch(error => console.error('Failed to load insights data:', error))
            .finally(() => setLoading(false));
    }, []);

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