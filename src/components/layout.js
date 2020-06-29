import React from 'react';
import PropTypes from 'prop-types';

import 'typeface-black-ops-one';
import '../styles/app.css';
import '../styles/layout.css';

const Layout = ({ children }) => <div className="layout">{children}</div>;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
