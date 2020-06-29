import React from 'react';
import Img from 'gatsby-image';

const Image = ({ img, alt, ...props }) => {
    return <Img fluid={img} alt={alt} {...props} />;
};

export default Image;
