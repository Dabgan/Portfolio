import React, { lazy, Suspense } from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import TechnologyItem from 'components/TechnologyItem/TechnologyItem';
import Wave from 'components/Wave/Wave';
import { Wrapper, InnerWrapper, List, Loader } from './technologies.styles';

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
    'GIT',
    'Github',
    'JQuery',
    'Bootstrap',
];
const technologyListTwo = [
    'React',
    'React Hooks',
    'Gatsby',
    'GSAP',
    'Redux',
    'Firebase',
    'Figma',
    'Jest & Enzyme',
    'Styled Components',
];

const Technologies = () => {
    const isSR = typeof window === 'undefined';

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
                        {!isSR && (
                            <Suspense fallback={renderLoader()}>
                                <DiagramAnimation />
                            </Suspense>
                        )}
                    </InnerWrapper>
                </Content>
            </Wrapper>
            <Wave />
        </>
    );
};

export default Technologies;
