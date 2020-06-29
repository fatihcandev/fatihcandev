import React from 'react';

import '../styles/sidebar.css';
import GitHub from './icons/github';
import Linkedin from './icons/linkedin';
import Twitter from './icons/twitter';
import Mail from './icons/mail';
import SidebarItem from './sidebar-item';
import LinkComp from './link';
import Button from './button';
import Instagram from './icons/instagram';

const links = {
    github: 'https://github.com/fatihcandev',
    linkedin: 'https://linkedin.com/in/fatihcandev',
    twitter: 'https://twitter.com/fatihcandev',
    instagram: 'https://instagram.com/fatihcdev',
    mail: 'mailto:contact@fatihcan.dev',
};

const Sidebar = ({ sidebarOpen, onSidebarClose }) => (
    <>
        {sidebarOpen && (
            <Button className="sidebarWrapper" onClick={onSidebarClose} />
        )}
        <div className={sidebarOpen ? 'sidebarMobile' : 'sidebar'}>
            <h2 className="title">fatih can</h2>
            <SidebarItem to="/" title="Go to Home">
                Home
            </SidebarItem>
            <SidebarItem to="/about" title="Go to About">
                About
            </SidebarItem>
            <LinkComp href="https://bit.ly/2BPl2hz" title="See my CV">
                CV
            </LinkComp>
            <div className="icons">
                <LinkComp href={links.github} title="Go to my GitHub">
                    <GitHub />
                </LinkComp>
                <LinkComp href={links.linkedin} title="Go to my LinkedIn">
                    <Linkedin />
                </LinkComp>
                <LinkComp href={links.twitter} title="Go to my Twitter">
                    <Twitter />
                </LinkComp>
                <LinkComp href={links.instagram} title="Go to my Instagram">
                    <Instagram />
                </LinkComp>
                <LinkComp href={links.mail} title="Mail me">
                    <Mail />
                </LinkComp>
            </div>
        </div>
    </>
);

export default Sidebar;
