import React, { useRef, useEffect } from 'react';
import Diagram from 'assets/svg/diagram.inline.svg';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme as diagramTheme } from 'assets/styles/theme';

const Wrapper = styled.div`
    display: none;
    visibility: hidden;
    ${({ theme }) => theme.mq.lg} {
        display: flex;
        justify-content: center;
        flex: 1;
        padding-right: 8rem;
        max-width: 50%;
    }
    ${({ theme }) => theme.mq.md} {
        padding-right: 0;
    }
`;

const DiagramAnimation = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const wrapper = wrapperRef.current;
        const [elements] = wrapperRef.current.children;
        const circlesLine = elements.getElementById('circles');
        const bars = elements.getElementById('bars');
        const hop = elements.getElementById('hop');
        const diagramLine = elements.getElementById('circleLine');
        const circles = elements.querySelectorAll('.circle');

        if (elements) {
            gsap.set(wrapper, { autoAlpha: 1 });
            gsap.set([...circlesLine.children, hop], {
                autoAlpha: 0,
            });

            gsap.set([...bars.children, diagramLine, hop], {
                transformOrigin: '50% 100%',
            });
            gsap.set([...bars.children], {
                scaleY: 0,
                fill: diagramTheme.fourth,
            });
            gsap.set([circles], { fill: diagramTheme.tertiary });

            const pathLength = diagramLine.getTotalLength();
            gsap.set(diagramLine, { strokeDasharray: pathLength });

            const timeLine = gsap.timeline({
                defaults: { ease: 'power1.out', delay: 0.5 },
                scrollTrigger: {
                    trigger: '#diagram',
                    toggleActions: 'play pause resume pause',
                },
            });

            const createBarTween = (id, duration) => {
                const myBar = [
                    bars.children[id],
                    { duration, scaleY: 1, autoAlpha: 1 },
                    'startDiagramBars',
                ];
                return myBar;
            };

            timeLine
                .addLabel('startDiagramBars')
                .to(...createBarTween(0, 1.258))
                .addLabel('finishBar1')
                .to(...createBarTween(1, 2.006))
                .addLabel('finishBar2')
                .to(...createBarTween(2, 2.516))
                .addLabel('finishBar3')
                .to(...createBarTween(3, 2.992))
                .addLabel('finishBar4')
                .to(...createBarTween(4, 3.842))
                .addLabel('finishBar5')
                .fromTo(
                    hop,
                    { scaleY: 0 },
                    { scaleY: 1, duration: 3.842, autoAlpha: 1 },
                    'startDiagramBars'
                )
                .fromTo(
                    diagramLine,
                    { strokeDashoffset: pathLength },
                    {
                        duration: 3.842,
                        strokeDashoffset: 0,
                        autoAlpha: 1,
                    },
                    'finishBar1'
                );

            [...circlesLine.children].map((circle, id) => {
                return timeLine.to(
                    circle,
                    { duration: 1, autoAlpha: 1 },
                    `finishBar${id}`
                );
            });
        }
    }, []);

    return (
        <Wrapper ref={wrapperRef}>
            <Diagram />
        </Wrapper>
    );
};

export default DiagramAnimation;
