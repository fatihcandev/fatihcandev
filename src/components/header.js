import React from 'react';
import Menu from './icons/menu';

import '../styles/main.css';

const Header = ({ onSidebarOpen }) => (
    <header className="header">
        <Menu className="menu" onClick={onSidebarOpen} />
    </header>
);

export default Header;
