import React, { useEffect, useRef } from 'react';
import Content from 'components/Content/Content';
import Button from 'components/Button/Button';
import { Link } from 'react-scroll';
import gsap from 'gsap';

import { HeroTitle, HeroSubtitle, Wrapper, InnerWrapper } from './hero.styles';

const Hero = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const letters = textRef.current.children;
        gsap.fromTo(
            letters,
            { autoAlpha: 0 },
            { duration: 1, autoAlpha: 1, stagger: 0.3 }
        );
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
                    <HeroSubtitle>
                        I’m <span>Gabriel</span>. I create websites and web
                        applications.
                        <span role="img" aria-label="emoji">
                            👋
                        </span>
                    </HeroSubtitle>
                    <Button marginTop="4rem">
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
