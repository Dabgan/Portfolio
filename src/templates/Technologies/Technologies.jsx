import React, { useEffect, useRef } from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import TechnologyItem from 'components/TechnologyItem/TechnologyItem';
import bottomWave from 'assets/svg/Wave1.svg';
import { theme } from 'assets/styles/theme';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    const listOneRef = useRef(null);
    const listTwoRef = useRef(null);

    useEffect(() => {
        const lists = [listOneRef.current, listTwoRef.current];
        gsap.registerPlugin(ScrollTrigger);

        lists.forEach(list => {
            gsap.fromTo(
                list.children,
                { autoAlpha: 0, y: '+=40' },
                {
                    duration: 1,
                    autoAlpha: 1,
                    y: '0',
                    stagger: 0.15,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: list,
                        start: '-10% 90%',
                    },
                }
            );
        });
    }, []);

    return (
        <>
            <TopWave
                fill={theme.primary}
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
                        <List ref={listOneRef}>
                            {technologyListOne.map(item => (
                                <TechnologyItem key={item}>
                                    {item}
                                </TechnologyItem>
                            ))}
                        </List>
                        <List ref={listTwoRef}>
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
