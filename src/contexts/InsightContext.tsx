import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import insightsData from '../data/insights.json';

const InsightContext = createContext(undefined);

// Sort insights by date in descending order (most recent first) at build time
const sortedInsights = insightsData.sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, '-')).getTime();
    const dateB = new Date(b.date.replace(/\./g, '-')).getTime();
    return dateB - dateA;
});

export const InsightProvider = ({ children }) => {
    const [insights] = useState(sortedInsights);
    const [loading] = useState(false); // Data is now loaded at build time

    const getInsightBySlug = (slug) => {
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