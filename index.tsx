import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './app/page';
import ClientLayoutWrapper from './components/common/ClientLayoutWrapper';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <ClientLayoutWrapper>
                <Home />
            </ClientLayoutWrapper>
        </React.StrictMode>
    );
}