import React from 'react';

import { Link } from 'gatsby';
import SEO from '../components/seo';
import NotFoundImage from '../components/not-found-img';
import TextBody from '../components/text-body';

import '../styles/404.css';

const NotFoundPage = () => (
    <>
        <SEO title="404: Not found" />
        <div className="wrapper">
            <NotFoundImage />
            <TextBody>
                Oops! You've got lost.{' '}
                <Link to="/" title="Go back home">
                    <span className="home">Go back home</span>
                </Link>
            </TextBody>
        </div>
    </>
);

export default NotFoundPage;
