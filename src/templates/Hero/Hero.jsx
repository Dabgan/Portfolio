import React, { useEffect, useRef } from 'react';
import Content from 'components/Content/Content';
import Button from 'components/Button/Button';
import { Link } from 'react-scroll';
import gsap from 'gsap';

import { HeroTitle, HeroSubtitle, Wrapper, InnerWrapper } from './hero.styles';

const Hero = () => {
    const textRef = useRef(null);

    useEffect(() => {
        // const text = textRef.current;
        // const letters = text.children;
        // function random(min, max) {
        //     return Math.random() * (max - min) + min;
        // }
        // letters.forEach((letter, i) => {
        //     gsap.from(letter, {
        //         duration: 2.5,
        //         opacity: 0,
        //         x: random(-100, 100),
        //         y: random(-100, 100),
        //         z: random(-100, 100),
        //         scale: 0.1,
        //         delay: i * 0.02,
        //     });
        // });
        // gsap.from(letters, {
        //     duration: 2.5,
        //     opacity: 0,
        //     x: random(-100, 100),
        //     y: random(-100, 100),
        //     z: random(-100, 100),
        //     scale: 0.1,
        //     delay: 0.1 * 0.02,
        //     yoyo: true,
        // });
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
