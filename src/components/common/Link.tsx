'use client';

import React from 'react';
import { useRouter } from '../../contexts/RouterContext';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
    const { navigate } = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Allow ctrl/cmd+click to open in new tab or right click
        if (e.metaKey || e.ctrlKey || e.button !== 0) {
            return;
        }

        // Prevent navigation for external links or links with targets
        if(props.target === '_blank' || !href.startsWith('/')) {
            return;
        }

        e.preventDefault();
        navigate(href);

        // If there's an onClick prop from the parent, call it too
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    );
};

export default Link;