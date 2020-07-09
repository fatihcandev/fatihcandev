import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidebar from '../components/sidebar';
import Main from '../components/main';
import Header from '../components/header';
import { graphql } from 'gatsby';
import Image from '../components/image';
import TextBody from '../components/text-body';
import LinkComp from '../components/link';

const IndexPage = ({ data }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <Layout>
            <SEO />
            <Sidebar
                sidebarOpen={sidebarOpen}
                onSidebarClose={() => setSidebarOpen(false)}
            />
            <Main>
                <Header onSidebarOpen={() => setSidebarOpen(true)} />
                <div className="content">
                    <Image
                        className="image"
                        img={data.file.childImageSharp.fluid}
                        alt="fatih can"
                    />
                    <TextBody className="text">
                        Hi. I'm Fatih. I'm 23 years old. I'm a front-end
                        developer. Currently living in İzmir, Turkey and working
                        at{' '}
                        <LinkComp
                            href="https://linkedin.com/company/digieggs"
                            title="Go to company's LinkedIn profile"
                            className="digieggs"
                        >
                            DIGIEGGS
                        </LinkComp>
                    </TextBody>
                </div>
            </Main>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query {
        file(relativePath: { eq: "fatih.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
