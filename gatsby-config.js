module.exports = {
    siteMetadata: {
        title: 'Fatih Can | Front-End Developer',
        description:
            "Hi! I'm Fatih. I'm a front-end developer based in İzmir, Turkey.",
        url: 'https://fatihcan.dev',
        image: '/meta-image.jpg',
        twitterUsername: '@fatihcandev',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
};
