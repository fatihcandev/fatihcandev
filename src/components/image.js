import React from 'react';
import Img from 'gatsby-image';

const Image = ({ img, alt }) => {
    return <Img fluid={img} alt={alt} />;
};

export default Image;
