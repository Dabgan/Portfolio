import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectExample from 'components/ProjectExample/ProjectExample';
import Content from 'components/Content/Content';
import TemplateHeader from '../../components/Template Header/TemplateHeader';
import { InnerWrapper, SecondaryTitle } from './projects.styles';

const Projects = () => {
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
                    coverImg {
                        childImageSharp {
                            fluid(maxWidth: 1600, maxHeight: 900, quality: 90) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <Content>
            <InnerWrapper>
                <TemplateHeader title="Projects" color />
                <SecondaryTitle>
                    My favourite ones. You can find more on my github
                </SecondaryTitle>
                {data.projects.nodes.map(node => (
                    <ProjectExample key={node.id} projectData={node} />
                ))}
            </InnerWrapper>
        </Content>
    );
};

export default Projects;
