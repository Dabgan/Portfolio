import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectExample from 'components/ProjectExample/ProjectExample';
import Content from 'components/Content/Content';
import TemplateHeader from '../../components/Template Header/TemplateHeader';
import { InnerWrapper, Wrapper } from './projects.styles';
import TemplateSubtitle from '../../components/TemplateSubtitle/TemplateSubtitle';

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
        <Wrapper id="projects">
            <Content>
                <InnerWrapper>
                    <TemplateHeader color>Projects</TemplateHeader>
                    <TemplateSubtitle halfWidth>
                        Here are few of my applications. You can find more on my
                        github profile.
                    </TemplateSubtitle>
                    {data.projects.nodes.map(node => (
                        <ProjectExample key={node.id} projectData={node} />
                    ))}
                </InnerWrapper>
            </Content>
        </Wrapper>
    );
};

export default Projects;
