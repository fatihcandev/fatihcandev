import React from 'react';

const LinkComp = ({ href, title, children, ...props }) => (
    <a
        href={href}
        title={title}
        {...props}
        target="_blank"
        rel="noreferrer noopener"
    >
        {children}
    </a>
);

export default LinkComp;
