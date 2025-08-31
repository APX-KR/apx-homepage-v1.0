import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import Home from './src/app/page';
import AboutPage from './src/app/about/page';
import InsightsPage from './src/app/insights/page';
import InsightDetailPage from './src/app/insights/[slug]/page';
import PerspectivePage from './src/app/perspective/page';
import ServicesPage from './src/app/services/page';
import SolutionsPage from './src/app/solutions/page';

import { ModalProvider } from './src/contexts/ModalContext';
import { InternalNavigationContext } from './src/contexts/InternalNavigationContext';
import ClientLayoutWrapper from './src/components/common/ClientLayoutWrapper';
import { SolutionProvider } from './src/contexts/SolutionContext';
import { InsightProvider } from './src/contexts/InsightContext';

const App = () => {
    const [currentPath, setCurrentPath] = useState('/');

    const navigate = (path: string) => {
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
                <ClientLayoutWrapper>
                    {renderPage()}
                </ClientLayoutWrapper>
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