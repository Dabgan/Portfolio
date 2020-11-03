import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import TemplateSubtitle from 'components/TemplateSubtitle/TemplateSubtitle';
import { Wrapper, InnerWrapper, Description, Wave } from './about.styles';
import AboutAnimation from '../../components/animations/AboutAnimation';

const About = () => {
    const descriptionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const paragraphs = descriptionRef.current.children;
        if (paragraphs) {
            gsap.fromTo(
                [paragraphs],
                { y: `+=30`, autoAlpha: 0 },
                {
                    duration: 1.2,
                    y: '0',
                    autoAlpha: 1,
                    ease: 'power1.inOut',
                    stagger: 0.5,
                    scrollTrigger: {
                        trigger: paragraphs,
                        start: '-10% 90%',
                    },
                }
            );
        }
    }, []);

    return (
        <>
            <Wave top="true" />
            <Wrapper id="about">
                <Content>
                    <TemplateHeader>About</TemplateHeader>
                    <TemplateSubtitle>me talking about myself</TemplateSubtitle>
                    <InnerWrapper>
                        <Description ref={descriptionRef}>
                            <p>
                                My name is Gabriel and I have always been
                                interested in technology. When it comes to
                                programming, I got intriqued by it recently, a
                                year and a half ago, when I wanted to build my
                                own website. I started learning about the
                                front-end technologies and since then, I have
                                been systematically developing my skills.
                            </p>
                            <p>
                                I am currently learning and creating projects in
                                React which is my favorite technology so far
                                <span role="img" aria-label="heart-icon">
                                    💗
                                </span>
                                . I really enjoy creating websites and web
                                applications using this library. Besides that, I
                                like challenges and I like to learn new things -
                                in every project that I create, apart from
                                technologies that I already know, I always try
                                to discover & learn something new.
                            </p>
                            <p>
                                My main goal right now is to start my career as
                                a Frontend Developer and further develop in the
                                IT industry.
                            </p>
                        </Description>
                        <AboutAnimation />
                    </InnerWrapper>
                </Content>
            </Wrapper>
            <Wave />
        </>
    );
};

export default About;
