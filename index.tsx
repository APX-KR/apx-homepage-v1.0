import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import Home from './src/app/page.tsx';
import AboutPage from './src/app/about/page.tsx';
import InsightsPage from './src/app/insights/page.tsx';
import InsightDetailPage from './src/app/insights/[slug]/page.tsx';
import PerspectivePage from './src/app/perspective/page.tsx';
import ServicesPage from './src/app/services/page.tsx';
import SolutionsPage from './src/app/solutions/page.tsx';

import { ModalProvider } from './src/contexts/ModalContext.tsx';
import { InternalNavigationContext } from './src/contexts/InternalNavigationContext.tsx';
import RootLayout from './src/components/common/ClientLayoutWrapper.tsx';
import { SolutionProvider } from './src/contexts/SolutionContext.tsx';
import { InsightProvider } from './src/contexts/InsightContext.tsx';

const App = () => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const navigate = (path: string) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
        
        const hash = path.split('#')[1];

        // Use a small timeout to let React render the page before we try to scroll.
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

    const renderPage = () => {
        // Extract the main path without any # sub-anchors
        const cleanPath = currentPath.split('#')[0];
        const pathParts = cleanPath.split('/').filter(p => p); // e.g., ['insights', 'my-first-article']

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
            case '':
            case '/':
            default:
                return <Home />;
        }
    };

    return (
        <ModalProvider>
            <InternalNavigationContext.Provider value={{ navigate }}>
                <RootLayout>
                    {renderPage()}
                </RootLayout>
            </InternalNavigationContext.Provider>
        </ModalProvider>
    );
};

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <SolutionProvider>
                <InsightProvider>
                    <App />
                </InsightProvider>
            </SolutionProvider>
        </React.StrictMode>
    );
}