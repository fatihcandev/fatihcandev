import React from 'react';

const Emoji = ({ label, children }) => (
    <span role="img" aria-label={label}>
        {children}
    </span>
);

export default Emoji;
