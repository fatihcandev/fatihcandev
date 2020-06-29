import React from 'react';
import Button from '../button';

const Menu = ({ onClick, ...props }) => (
    <Button onClick={onClick} aria-label="open mobile navbar" {...props}>
        <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="#a0a6af"
        >
            <path d="M4 6h16M4 12h8m-8 6h16"></path>
        </svg>
    </Button>
);

export default Menu;
