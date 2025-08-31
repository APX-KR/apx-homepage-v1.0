import React from 'react';

const Link = ({ href = '#', children, ...props }: React.ComponentPropsWithoutRef<'a'>) => {
    const isExternal = href.startsWith('http');

    if (isExternal) {
        return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
    }
    
    // For internal links, convert to hash-based URL
    const finalHref = `#${href}`;

    return (
        <a href={finalHref} {...props}>
            {children}
        </a>
    );
};

export default Link;
