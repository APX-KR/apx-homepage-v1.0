import React from 'react';
import { useInternalNavigation } from '../../contexts/InternalNavigationContext.tsx';

const Link = ({ href, children, ...props }: React.ComponentPropsWithoutRef<'a'>) => {
    const { navigate } = useInternalNavigation();

    const isExternal = props.target === '_blank' || !href?.startsWith('/');
    const hashHref = isExternal ? href : `#${href}`;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Allow ctrl/cmd+click to open in new tab or right click
        if (e.metaKey || e.ctrlKey || e.button !== 0) {
            return;
        }

        // Prevent navigation for external links
        if(isExternal) {
            return;
        }

        e.preventDefault();
        if (href) {
            navigate(href);
        }

        // If there's an onClick prop from the parent, call it too
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <a href={hashHref} onClick={handleClick} {...props}>
            {children}
        </a>
    );
};

export default Link;
