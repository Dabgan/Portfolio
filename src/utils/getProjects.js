import { useStaticQuery, graphql } from 'gatsby';

const getProjects = () => {
    const data = useStaticQuery(graphql`
        query {
            projects: allProjectsJson(sort: { fields: order }) {
                nodes {
                    title
                    technologies
                    description
                    demoLink
                    codeLink
                    id
                    introduction
                    coverImg {
                        childImageSharp {
                            fluid(maxWidth: 850, maxHeight: 571, quality: 90) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                }
            }
        }
    `);

    return data.projects.nodes;
};

export default getProjects;
