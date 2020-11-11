const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Gabriel Daniluk - Portfolio`,
        description: `Frontend Developer and React enthusiast interested in building creative websites and web applications`,
        author: `Gabriel Daniluk`,
        previewImage: `/src/assets/images/portfolio.png`,
        language: 'en',
    },
    plugins: [
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Roboto:300,400`, `Francois One`],
                display: 'block',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/data/`,
                plugins: [`gatsby-transformer-json`],
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                assets: path.join(__dirname, 'src/assets'),
                components: path.join(__dirname, 'src/components'),
                pages: path.join(__dirname, 'src/pages'),
                templates: path.join(__dirname, 'src/templates'),
                hooks: path.join(__dirname, 'src/hooks'),
                src: path.join(__dirname, 'src'),
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gabriel Daniluk`,
                short_name: 'dabgan',
                start_url: `/`,
                display: `standalone`,
                icon: `src/assets/images/Logo.png`,
            },
        },

        'gatsby-plugin-offline',
    ],
};
