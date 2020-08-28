const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Gatsby Boilerplate`,
        description: ``,
        author: `@gabrieldaniluk`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gabriel`,
                short_name: 'dabgan',
                start_url: `/`,
                background_color: `#F8F8F8`,
                theme_color: `#4123DE`,
                display: `standalone`,
                icon: `src/assets/images/gatsby-icon.png`,
            },
        },
        'gatsby-plugin-offline',
    ],
};
