import React, { useEffect, useRef } from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import TechnologyItem from 'components/TechnologyItem/TechnologyItem';
import { theme } from 'assets/styles/theme';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DiagramAnimation from 'components/animations/DiagramAnimation';
import {
    Wrapper,
    InnerWrapper,
    List,
    TopWave,
    BottomWave,
} from './technologies.styles';

const technologyListOne = [
    'React',
    'HTML5',
    'CSS3',
    'SCSS',
    'Javascript (ES6+)',
    'React Hooks',
    'Redux',
    'Figma',
    'Styled Components',
];
const technologyListTwo = [
    'Gatsby',
    'GSAP',
    'Jest & Enzyme',
    'GIT',
    'Github',
    'RWD',
    'Firebase',
    'Bootstrap',
    'JQuery',
];

const Technologies = () => {
    const listOneRef = useRef(null);
    const listTwoRef = useRef(null);

    useEffect(() => {
        const lists = [listOneRef.current, listTwoRef.current];
        gsap.registerPlugin(ScrollTrigger);

        if (lists) {
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
        }
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
            <Wrapper id="skills">
                <Content>
                    <TemplateHeader>Technologies</TemplateHeader>
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
            <BottomWave />
        </>
    );
};

export default Technologies;
