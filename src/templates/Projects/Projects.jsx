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
                    introduction
                    inverted
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

    return (
        <Content>
            <InnerWrapper>
                <TemplateHeader color>Projects</TemplateHeader>
                <SecondaryTitle>
                    My favourite ones. You can find more on my github profile.
                </SecondaryTitle>
                {data.projects.nodes.map(node => (
                    <ProjectExample key={node.id} projectData={node} />
                ))}
            </InnerWrapper>
        </Content>
    );
};

export default Projects;
