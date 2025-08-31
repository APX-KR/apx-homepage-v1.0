import React, { useState, useEffect, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

// Dynamically import page components for code-splitting
const Home = lazy(() => import('./src/app/page.tsx'));
const AboutPage = lazy(() => import('./src/app/about/page.tsx'));
const InsightsPage = lazy(() => import('./src/app/insights/page.tsx'));
const InsightDetailPage = lazy(() => import('./src/app/insights/[slug]/page.tsx'));
const PerspectivePage = lazy(() => import('./src/app/perspective/page.tsx'));
const ServicesPage = lazy(() => import('./src/app/services/page.tsx'));
const SolutionsPage = lazy(() => import('./src/app/solutions/page.tsx'));

import { InternalNavigationContext } from './src/contexts/InternalNavigationContext.tsx';
import RootLayout from './src/components/common/ClientLayoutWrapper.tsx';

/**
 * A simple loading spinner component to be used as a fallback for React Suspense.
 * This provides visual feedback to the user when a page chunk is being loaded.
 */
const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-96" aria-live="polite" aria-busy="true">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-apx-growth-green"></div>
        <span className="sr-only">Loading page...</span>
    </div>
);


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

    // Unified scroll handling logic. This effect runs whenever the path changes.
    useEffect(() => {
        // The path might contain a page route and an anchor, e.g., "/solutions#strategy"
        const pathParts = currentPath.split('#');
        const anchor = pathParts.length > 1 ? pathParts[1] : null;

        const handleScroll = () => {
            if (anchor) {
                const element = document.getElementById(anchor);
                if (element) {
                    const headerOffset = 140; // Approximate height of sticky header + padding
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    // If anchor is specified but not found, scroll to top.
                    window.scrollTo(0, 0);
                }
            } else {
                // If no anchor, it's a page navigation, so scroll to top.
                window.scrollTo(0, 0);
            }
        };

        // Use a timeout to allow the DOM to update before trying to find the element.
        // This is crucial for when the navigation causes a new component to render.
        const timer = setTimeout(handleScroll, 100);

        return () => clearTimeout(timer);
    }, [currentPath]);


    const navigate = (path: string) => {
        // Navigation is simplified to just updating the hash.
        // The `useEffect` above will handle all scrolling logic consistently.
        window.location.hash = path;
    };
    
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
            <Suspense fallback={<LoadingSpinner />}>
                {renderPage()}
            </Suspense>
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