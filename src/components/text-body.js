import React from 'react';

const TextBody = ({ children, ...props }) => <p {...props}>{children}</p>;

export default TextBody;
