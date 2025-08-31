import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import Home from './src/app/page.tsx';
import AboutPage from './src/app/about/page.tsx';
import InsightsPage from './src/app/insights/page.tsx';
import InsightDetailPage from './src/app/insights/[slug]/page.tsx';
import PerspectivePage from './src/app/perspective/page.tsx';
import ServicesPage from './src/app/services/page.tsx';
import SolutionsPage from './src/app/solutions/page.tsx';

import { InternalNavigationContext } from './src/contexts/InternalNavigationContext.tsx';
import RootLayout from './src/components/common/ClientLayoutWrapper.tsx';

/**
 * The App component is now refactored to act solely as a client-side router.
 * It uses hash-based routing to be compatible with static file servers,
 * preventing 404 errors on direct navigation or page reloads.
 */
const App = () => {
    // Read the path from the hash, defaulting to '/'
    const [currentPath, setCurrentPath] = useState(window.location.hash.substring(1) || '/');

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPath(window.location.hash.substring(1) || '/');
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const navigate = (path: string) => {
        // Only update the hash, which triggers the hashchange event
        window.location.hash = path;

        // The scroll logic is now triggered by the path change
        const hash = path.split('#')[1];

        setTimeout(() => {
            if (hash) {
                const element = document.getElementById(hash);
                if (element) {
                    const headerOffset = 140; // Approximate height of sticky header + padding
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    document.documentElement.scrollTo(0, 0);
                }
            } else {
                document.documentElement.scrollTo(0, 0);
            }
        }, 100);
    };
    
    // Auto-scroll to top when the main path changes (excluding sub-anchor changes)
    useEffect(() => {
        const mainPath = currentPath.split('#')[0];
        // This effect will run whenever the main path changes
        document.documentElement.scrollTo(0, 0);
    }, [currentPath.split('#')[0]]);

    const renderPage = () => {
        // Extract the main path without any # sub-anchors
        const cleanPath = currentPath.split('#')[0];
        const pathParts = cleanPath.split('/').filter(p => p);

        if (pathParts[0] === 'insights' && pathParts.length === 2) {
            const slug = pathParts[1];
            return <InsightDetailPage slug={slug} />;
        }

        switch (cleanPath) {
            case '/about':
                return <AboutPage />;
            case '/insights':
                return <InsightsPage />;
            case '/perspective':
                return <PerspectivePage />;
            case '/services':
                return <ServicesPage />;
            case '/solutions':
                return <SolutionsPage />;
            case '/':
            default:
                return <Home />;
        }
    };

    return (
        <InternalNavigationContext.Provider value={{ navigate }}>
            {renderPage()}
        </InternalNavigationContext.Provider>
    );
};

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <RootLayout>
                <App />
            </RootLayout>
        </React.StrictMode>
    );
}
