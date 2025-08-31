import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import Home from './src/app/page';
import AboutPage from './src/app/about/page';
import InsightsPage from './src/app/insights/page';
import PerspectivePage from './src/app/perspective/page';
import ServicesPage from './src/app/services/page';
import SolutionsPage from './src/app/solutions/page';

import { ModalProvider } from './src/contexts/ModalContext';
import { InternalNavigationContext } from './src/contexts/InternalNavigationContext';
import ClientLayoutWrapper from './src/components/common/ClientLayoutWrapper';

const App = () => {
    const [currentPath, setCurrentPath] = useState('/');

    const navigate = (path: string) => {
        setCurrentPath(path);
        document.documentElement.scrollTo(0, 0); // Scroll html element to top
    };

    const renderPage = () => {
        // Extract the main path without any # sub-anchors
        const cleanPath = currentPath.split('#')[0];

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
            <App />
        </React.StrictMode>
    );
}