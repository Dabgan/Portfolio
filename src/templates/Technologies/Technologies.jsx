import React from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import TechnologyItem from 'components/TechnologyItem/TechnologyItem';

import bottomWave from 'assets/svg/Wave1.svg';
import {
    Wrapper,
    InnerWrapper,
    List,
    TopWave,
    BottomWave,
} from './technologies.styles';
import DiagramAnimation from '../../components/DiagramAnimation/DiagramAnimation';

const technologyListOne = [
    'HTML5',
    'CSS3',
    'SCSS',
    'Javascript (ES6+)',
    'React',
    'React Hooks',
    'Redux',
    'Styled Components',
];
const technologyListTwo = [
    'GIT',
    'Github',
    'RWD',
    'Firebase',
    'Bootstrap',
    'JQuery',
    'Figma',
    'Gatsby',
];

const Technologies = () => {
    return (
        <>
            <TopWave
                fill="#1E1F26"
                options={{
                    height: 50,
                    amplitude: 30,
                    speed: 0.15,
                    points: 3,
                }}
            />
            <Wrapper>
                <Content>
                    <TemplateHeader title="Technologies" />
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
                        <DiagramAnimation />
                    </InnerWrapper>
                </Content>
            </Wrapper>
            <BottomWave src={bottomWave} alt="template wave" />
        </>
    );
};

export default Technologies;
