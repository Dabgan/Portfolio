import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import propTypes from 'prop-types';

const detailsQuery = graphql`
    query {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                defaultAuthor: author
                defaultImage: previewImage
            }
        }
    }
`;

const SEO = ({ title, description, author, previewImage }) => {
    const { site } = useStaticQuery(detailsQuery);
    const {
        defaultTitle,
        defaultDescription,
        defaultAuthor,
        defaultImage,
    } = site.siteMetadata;
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        author: author || defaultAuthor,
        previewImage: previewImage || defaultImage,
    };

    return (
        <Helmet
            title={seo.title}
            meta={[
                {
                    property: `robots`,
                    content: `index, follow`,
                },
                {
                    name: `description`,
                    content: seo.description,
                },
                {
                    property: `og:title`,
                    content: seo.title,
                },
                {
                    property: `og:description`,
                    content: seo.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: seo.previewImage,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: seo.author,
                },
                {
                    name: `twitter:title`,
                    content: seo.title,
                },
                {
                    name: `twitter:description`,
                    content: seo.description,
                },
                {
                    name: `twitter:image`,
                    content: seo.previewImage,
                },
            ]}
        />
    );
};

SEO.propTypes = {
    title: propTypes.string,
    description: propTypes.string,
    author: propTypes.string,
    previewImage: propTypes.string,
};
SEO.defaultProps = {
    title: null,
    author: null,
    description: null,
    previewImage: null,
};

export default SEO;
