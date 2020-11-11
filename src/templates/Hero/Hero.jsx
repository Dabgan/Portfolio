import React, { useEffect, useRef } from 'react';
import Content from 'components/Content/Content';
import { Link } from 'react-scroll';
import Button from 'components/Button/Button';
import gsap from 'gsap';
import { Elastic } from 'gsap/gsap-core';
import {
    Wrapper,
    InnerWrapper,
    HeroTitle,
    HeroSubtitle,
    NameSpan,
} from './hero.styles';

const Hero = () => {
    const subtextRef = useRef(null);
    const buttonRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(Elastic);
        const subtext = subtextRef.current;
        const button = buttonRef.current;
        const icon = subtext.children[1];
        const title = titleRef.current;

        const shakeTween = gsap.timeline({
            delay: 2,
            repeat: -1,
            repeatDelay: 3.5,
        });
        const tl = gsap.timeline();

        gsap.set(title, { autoAlpha: 1 });
        gsap.set(icon, {
            display: 'inline-block',
            transformOrigin: '100% 100%',
        });

        shakeTween.fromTo(
            icon,
            { rotation: 15 },
            {
                duration: 2,
                rotation: 0,
                ease: Elastic.easeOut.config(3, 0.2),
            }
        );

        tl.addLabel('start')
            .from(subtext, { delay: 0.3, autoAlpha: 0, y: '+=100' }, 'start')
            .from(button, { delay: 1, autoAlpha: 0, y: '+=100' }, 'start');
    }, []);

    return (
        <Wrapper>
            <Content>
                <InnerWrapper>
                    <HeroTitle ref={titleRef}>HELLO</HeroTitle>
                    <HeroSubtitle ref={subtextRef}>
                        I’m <NameSpan>Gabriel</NameSpan>. I create websites and
                        web applications.
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
