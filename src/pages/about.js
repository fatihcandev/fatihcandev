import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidebar from '../components/sidebar';
import Main from '../components/main';
import Header from '../components/header';
import TextBody from '../components/text-body';
import Emoji from '../components/emoji';

const About = () => {
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
                <div className="about">
                    <TextBody className="aboutParagraph">
                        Everything began back in 17th of December in 1997. I was
                        born in Ankara, Turkey <Emoji label="baby">👶</Emoji>{' '}
                        lived there for 6 years and my family moved to İzmir in
                        2003. Now, it's been nearly 17 years since we came here.
                        <br /><br />I've always been interested in computers but not in a
                        good way. I would always play video games and that's how
                        I got into a relatively bad high school but that place
                        was where I met with programming{' '}
                        <Emoji label="man with computer">👨‍💻</Emoji> I learned
                        about ASP.Net, PHP, web design, etc. I was not so good
                        but if I brainstorm on it a while, I could come up with
                        something. So, there was hope until I went to college
                        and study in an education department.
                        <br /><br /> The college kept me busy and careless enough to
                        not to write a single line of code for years{' '}
                        <Emoji label="man facepalming">🤦‍♂</Emoji> But one day,
                        someone came up to me and asked me if I know how to
                        build a website. I was not so confident back in the day
                        but I didn’t say no and decided to build a website. I
                        was rusty but I got familiar with it soon and in the end
                        I did my first paid job{' '}
                        <Emoji label="flexed biceps">💪</Emoji> I completed
                        several paid website jobs but I realized a while ago
                        that the knowledge I have wasn't enough to be a
                        developer. Besides, I hated the idea of being a teacher
                        so I decided to be a developer. The path looked hard and
                        long but I didn’t give up (yet{' '}
                        <Emoji label="grinning face with sweat">😅</Emoji>).
                        <br /><br />I switched between the back-end and front-end area
                        but I've decided to be a front-end developer because I
                        love to take a look at something and imagine the columns
                        and row and build it with code. For the last five
                        months, I've been coding for hours everyday, learning
                        and practicing. I am very happy to say that I've earned
                        what I was working towards. I've been hired as a
                        front-end developer in July{' '}
                        <Emoji label="partying face">🥳</Emoji> But the learning
                        journey is not over yet. <br /><br />
                        Well, enough talking about programming. I love watching
                        movies, series and listening to music. My music taste
                        spectrum is really wide. I'll leave my On Repeat list
                        below if you'd like to take a look.
                    </TextBody>
                    <iframe
                        className="spotify"
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1Epl6G1YtnCs45"
                        frameBorder="0"
                        allowTransparency="true"
                        allow="encrypted-media"
                    />
                </div>
            </Main>
        </Layout>
    );
};

export default About;
