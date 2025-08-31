import React, { ReactNode } from 'react';
import Container from './Container.tsx';

// FIX: Add props interface for type safety.
interface PageHeaderProps {
    title: ReactNode;
    description: ReactNode;
    engTitle: string;
    backgroundImage?: string; // FIX: Make backgroundImage optional.
}

const PageHeader = ({ title, description, engTitle, backgroundImage }: PageHeaderProps) => {
    const bgStyle = backgroundImage 
        ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${backgroundImage}')` }
        : {};

    const bgColor = !backgroundImage ? 'bg-apx-deep-growth' : '';

    return (
        <header className={`bg-cover bg-center text-white ${bgColor}`} style={bgStyle}>
            <div className="backdrop-blur-sm">
                <Container className="py-20 md:py-28 text-center">
                    <p className="text-body-base font-semibold uppercase tracking-widest text-apx-growth-green mb-3">{engTitle}</p>
                    <h1 className="text-h1-mobile md:text-h1-tablet lg:text-h1 font-bold leading-tight tracking-tight-title">{title}</h1>
                    <p className="mt-6 text-body-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">{description}</p>
                </Container>
            </div>
        </header>
    );
};

export default PageHeader;