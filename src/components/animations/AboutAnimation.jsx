import React, { useRef, useEffect } from 'react';
import About from 'assets/svg/about.inline.svg';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Wrapper = styled.div`
    display: none;
    ${({ theme }) => theme.mq.lg} {
        max-width: 50%;
        display: flex;
        justify-content: center;
        flex: 1;
        padding-right: 8rem;
    }
    ${({ theme }) => theme.mq.md} {
        padding-right: 0;
    }
`;

const AboutAnimation = () => {
    const wrapper = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const [elements] = wrapper.current.children;
        const platform = elements.getElementById('platform');
        const leaves = elements.getElementById('leaves');
        const messages = elements.getElementById('messages');
        const message2 = elements.getElementById('message2');

        gsap.set([platform], { transformOrigin: '50% 50%' });
        gsap.set([...leaves.children], { transformOrigin: '50% 100%' });
        gsap.set(message2, { transformOrigin: '100% 50%' });

        const timeLine = gsap.timeline({
            defaults: { duration: 0.8 },
            scrollTrigger: {
                trigger: '#about',
                toggleActions: 'play pause resume pause',
            },
        });

        [...messages.children].forEach((msg, i) => {
            const circle = msg.querySelector('.circle');
            const lines = msg.querySelectorAll('.line');
            const opacity = i === 1 ? 1 : 0.4;

            gsap.set([...lines], { transformOrigin: '0% 50%' });
            gsap.set(circle, { transformOrigin: '50% 50%' });

            if (i === 1) {
                const lines2 = msg.querySelectorAll('.line');
                gsap.set([...lines2], { transformOrigin: '100% 50%' });
            }

            timeLine
                .fromTo(
                    msg,
                    { autoAlpha: 0, scaleX: 0 },
                    {
                        autoAlpha: 1,
                        scaleX: 1,
                    }
                )
                .fromTo(
                    [...lines],
                    { autoAlpha: 0, scaleX: 0 },
                    {
                        duration: 0.4,
                        autoAlpha: opacity,
                        scaleX: 1,
                        stagger: 0.2,
                    }
                )
                .fromTo(
                    circle,
                    { autoAlpha: 0, scale: 0 },
                    {
                        duration: 0.4,
                        autoAlpha: opacity,
                        scale: 1,
                    }
                );
        });

        timeLine.fromTo(
            [...leaves.children],
            { autoAlpha: 0, scaleY: 0 },
            { duration: 2, autoAlpha: 1, scaleY: 1, stagger: 0.3 }
        );
    }, []);

    return (
        <Wrapper ref={wrapper}>
            <About />
        </Wrapper>
    );
};

export default AboutAnimation;
