import React from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from '../../components/Template Header/TemplateHeader';
import { InnerWrapper } from './projects.styles';

const Projects = () => {
    return (
        <Content>
            <InnerWrapper>
                <TemplateHeader title="Projects" />
                <h2>some projects haha lol xd</h2>
            </InnerWrapper>
        </Content>
    );
};

export default Projects;
