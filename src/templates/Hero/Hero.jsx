import React, { useEffect, useRef } from 'react';
import Content from 'components/Content/Content';
import Button from 'components/Button/Button';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { Elastic } from 'gsap/gsap-core';
import {
    HeroTitle,
    HeroSubtitle,
    Wrapper,
    InnerWrapper,
    NameSpan,
} from './hero.styles';

const Hero = () => {
    const subtextRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(Elastic);
        const subtext = subtextRef.current;
        const button = buttonRef.current;
        const icon = subtext.children[1];

        if (subtext && button && icon) {
            const shakeTween = gsap.timeline({
                delay: 2,
                repeat: -1,
                repeatDelay: 3.5,
            });
            const tl = gsap.timeline();

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
                .from(
                    subtext,
                    { delay: 0.3, autoAlpha: 0, y: '+=100' },
                    'start'
                )
                .from(button, { delay: 1, autoAlpha: 0, y: '+=100' }, 'start');
        }
    }, []);

    return (
        <Wrapper>
            <Content>
                <InnerWrapper>
                    <HeroTitle>HELLO</HeroTitle>
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
