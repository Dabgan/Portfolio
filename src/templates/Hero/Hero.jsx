import React, { useEffect, useRef } from 'react';
import Content from 'components/Content/Content';
import Button from 'components/Button/Button';
import { Link } from 'react-scroll';
import gsap from 'gsap';

import { HeroTitle, HeroSubtitle, Wrapper, InnerWrapper } from './hero.styles';

const Hero = () => {
    const textRef = useRef(null);
    const subtextRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const letters = textRef.current.children;
        const subtext = subtextRef.current;
        const button = buttonRef.current;
        const tl = gsap.timeline();

        tl.addLabel('start')
            .fromTo(
                letters,
                { autoAlpha: 0 },
                { duration: 1, autoAlpha: 1, stagger: 0.2 },
                'start'
            )
            .from(subtext, { delay: 1.4, autoAlpha: 0, y: '+=100' }, 'start')
            .from(button, { delay: 2.2, autoAlpha: 0, y: '+=100' }, 'start');
    }, []);

    return (
        <Wrapper>
            <Content>
                <InnerWrapper>
                    <HeroTitle ref={textRef}>
                        <span>H</span>
                        <span>E</span>
                        <span>L</span>
                        <span>L</span>
                        <span>O</span>
                    </HeroTitle>
                    <HeroSubtitle ref={subtextRef}>
                        I’m <span>Gabriel</span>. I create websites and web
                        applications.
                        <span role="img" aria-label="emoji">
                            👋
                        </span>
                    </HeroSubtitle>
                    <Button marginTop="4rem" btnRef={buttonRef}>
                        <Link to="projects" smooth offset={-90}>
                            Projects
                        </Link>
                    </Button>
                </InnerWrapper>
            </Content>
        </Wrapper>
    );
};

export default Hero;
