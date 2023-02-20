import React from 'react';
import ProjectExample from 'components/ProjectExample/ProjectExample';
import Content from 'components/Content/Content';
import TemplateHeader from '../../components/Template Header/TemplateHeader';
import { InnerWrapper, Wrapper } from './projects.styles';
import TemplateSubtitle from '../../components/TemplateSubtitle/TemplateSubtitle';
import getProjects from '../../utils/getProjects';

const Projects = () => {
    const data = getProjects();
    return (
        <Wrapper id="projects">
            <Content>
                <InnerWrapper>
                    <TemplateHeader color>Projects</TemplateHeader>
                    <TemplateSubtitle halfWidth>
                        Here are few of my applications.
                        <p>You can find more on my github profile.</p>
                    </TemplateSubtitle>
                    {data.map((node, index) => {
                        const isInverted = index % 2 === 0;
                        return (
                            <ProjectExample
                                key={node.id}
                                projectData={{ ...node, isInverted }}
                            />
                        );
                    })}
                </InnerWrapper>
            </Content>
        </Wrapper>
    );
};

export default Projects;
