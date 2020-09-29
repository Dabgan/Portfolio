import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import {
    Wrapper,
    InnerWrapper,
    Subtitle,
    Description,
    Wave,
    AboutSVG,
} from './about.styles';

const About = () => {
    const wrapperRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const wrapper = wrapperRef.current;
        const paragraphs = descriptionRef.current.children;

        gsap.fromTo(
            [wrapper.children, paragraphs],
            { y: `+=30`, autoAlpha: 0 },
            {
                duration: 1.4,
                y: '0',
                autoAlpha: 1,
                ease: 'power1.inOut',
                stagger: 0.5,
                scrollTrigger: {
                    trigger: wrapper,
                    start: '-10% 90%',
                },
            }
        );
    }, []);

    return (
        <>
            <Wave top="true" />
            <Wrapper id="about">
                <Content ref={wrapperRef}>
                    <TemplateHeader>About</TemplateHeader>
                    <Subtitle>me talking about myself</Subtitle>
                    <InnerWrapper>
                        <Description ref={descriptionRef}>
                            <p>
                                I am self-taught, who had started learning how
                                to code a little over a year ago and I
                                immediately discovered my passion for it. Since
                                then, I have been systematically developing my
                                skills.
                            </p>
                            <p>
                                I am very organised person and I plan my
                                learning path with tools such as Trello or
                                Habitica. I am currently learning Gatsby
                                framework in which I am going to create my first
                                commercial project.
                            </p>

                            <p>
                                My goal is to start my career as a Frontend
                                Developer and further develop in the IT
                                industry.
                            </p>
                        </Description>
                        <AboutSVG />
                    </InnerWrapper>
                </Content>
            </Wrapper>
            <Wave />
        </>
    );
};

export default About;
