import React, { useState, useEffect, Suspense, lazy } from 'react';
import { SolutionProvider } from './contexts/SolutionContext.tsx';
import { InsightProvider } from './contexts/InsightContext.tsx';
import { ModalProvider } from './contexts/ModalContext.tsx';
import Header from './components/common/Header.tsx';
import Footer from './components/common/Footer.tsx';
import ContactModal from './components/common/ContactModal.tsx';
import SolutionDetailModal from './components/common/SolutionDetailModal.tsx';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage.tsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'));
const PerspectivePage = lazy(() => import('./pages/PerspectivePage.tsx'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage.tsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.tsx'));
const InsightsPage = lazy(() => import('./pages/InsightsPage.tsx'));
const InsightDetailPage = lazy(() => import('./pages/InsightDetailPage.tsx'));

const NotFoundPage = () => <div className="text-center py-20">Page Not Found</div>;

const App = () => {
    const [path, setPath] = useState(window.location.hash.slice(1) || '/');
    const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            const newPath = window.location.hash.slice(1) || '/';
            // Only scroll to top if the base path changes, not just the anchor
            if (newPath.split('#')[0] !== path.split('#')[0]) {
                 window.scrollTo(0, 0);
            }
            setPath(newPath);
        };

        window.addEventListener('hashchange', handleHashChange);
        
        // Initial load scroll to anchor
        handleHashChange();

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [path]);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash.includes('#')) {
            const id = hash.split('#').pop();
            if (id) {
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        const headerOffset = 140; // Approx height of sticky header
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 100); // Delay to allow page to render
            }
        }
    }, [path]);


    const renderPage = () => {
        const [basePathWithSlug] = path.split('#');
        const pathSegments = basePathWithSlug.split('/').filter(p => p);
        const [basePath, slug] = pathSegments;

        switch (basePath) {
            case undefined:
            case '':
                return <HomePage />;
            case 'about':
                return <AboutPage />;
            case 'perspective':
                return <PerspectivePage />;
            case 'solutions':
                return <SolutionsPage />;
            case 'services':
                return <ServicesPage />;
            case 'insights':
                return slug ? <InsightDetailPage slug={slug} /> : <InsightsPage />;
            default:
                return <NotFoundPage />;
        }
    };

    return (
        <SolutionProvider>
            <InsightProvider>
                <ModalProvider>
                    <Header onMegaMenuToggle={setIsMegaMenuOpen} />
                    <main className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isMegaMenuOpen ? 'blur-sm pointer-events-none' : ''}`}>
                        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
                            {renderPage()}
                        </Suspense>
                    </main>
                    <Footer />
                    <ContactModal />
                    <SolutionDetailModal />
                </ModalProvider>
            </InsightProvider>
        </SolutionProvider>
    );
};

export default App;
