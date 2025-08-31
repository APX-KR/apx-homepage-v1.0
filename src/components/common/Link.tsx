import NextLink, { LinkProps } from 'next/link';
import React from 'react';

const Link = ({ href, children, ...props }: LinkProps & React.ComponentPropsWithoutRef<'a'>) => {
    return (
        <NextLink href={href} {...props}>
            {children}
        </NextLink>
    );
};

export default Link;
