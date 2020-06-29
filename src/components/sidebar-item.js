import React from 'react';
import { Link } from 'gatsby';

const SidebarItem = ({ to, title, children }) => (
    <Link to={to} title={title}>
        <h2>{children}</h2>
    </Link>
);

export default SidebarItem;
