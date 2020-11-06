import React, { useEffect, useRef, lazy, Suspense } from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import TechnologyItem from 'components/TechnologyItem/TechnologyItem';
import Wave from 'components/Wave/Wave';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    const listOneRef = useRef(null);
    const listTwoRef = useRef(null);
    const isSR = typeof window === 'undefined';

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
            <Wave top />
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
