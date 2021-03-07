import React, { lazy, Suspense } from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import TechnologyItem from 'components/TechnologyItem/TechnologyItem';
import Wave from 'components/Wave/Wave';
import { Wrapper, InnerWrapper, List, Loader } from './technologies.styles';
import CheckRender from '../../components/CheckRender/CheckRender';

const DiagramAnimation = lazy(() =>
    import('../../components/animations/DiagramAnimation')
);

const renderLoader = () => <Loader />;

const technologyListOne = [
    'HTML5',
    'CSS3',
    'SCSS',
    'RWD',
    'Javascript (ES6+)',
    'JQuery',
    'GIT',
    'Github',
    'CSS Modules',
];
const technologyListTwo = [
    'Typescript',
    'React',
    'Redux',
    'Gatsby',
    'GraphQL',
    'GSAP',
    'Figma',
    'Jest & React TL',
    'Styled Components',
];

const Technologies = () => {
    return (
        <>
            <Wave top />
            <Wrapper id="skills">
                <Content>
                    <TemplateHeader>Technologies</TemplateHeader>
                    <InnerWrapper>
                        <List>
                            {technologyListOne.map(item => (
                                <TechnologyItem key={item}>
                                    {item}
                                </TechnologyItem>
                            ))}
                        </List>
                        <List>
                            {technologyListTwo.map(item => (
                                <TechnologyItem key={item}>
                                    {item}
                                </TechnologyItem>
                            ))}
                        </List>
                        <CheckRender>
                            <Suspense fallback={renderLoader()}>
                                <DiagramAnimation />
                            </Suspense>
                        </CheckRender>
                    </InnerWrapper>
                </Content>
            </Wrapper>
            <Wave />
        </>
    );
};

export default Technologies;
