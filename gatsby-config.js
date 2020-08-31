const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Gabriel Daniluk - Portfolio`,
        description: `Welcome on my personal portfolio website!`,
        author: `@gabrieldaniluk`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                assets: path.join(__dirname, 'src/assets'),
                components: path.join(__dirname, 'src/components'),
                pages: path.join(__dirname, 'src/pages'),
                templates: path.join(__dirname, 'src/templates'),
                src: path.join(__dirname, 'src'),
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: 'Roboto',
                        variants: ['400', '700'],
                    },
                ],
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
