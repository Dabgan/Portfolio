import React, { useRef, useEffect } from 'react';
import Diagram from 'assets/svg/diagram.inline.svg';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme as diagramTheme } from 'assets/styles/theme';

const Wrapper = styled.div`
    display: none;
    ${({ theme }) => theme.mq.lg} {
        display: block;
    }
`;

const DiagramAnimation = () => {
    const wrapper = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const [elements] = wrapper.current.children;
        const circlesLine = elements.getElementById('circles');
        const person = elements.getElementById('person');
        const bars = elements.getElementById('bars');
        const platform = elements.getElementById('platform');
        const hop = elements.getElementById('hop');
        const diagramLine = elements.getElementById('circleLine');

        gsap.set([...circlesLine.children, person, platform, hop], {
            autoAlpha: 0,
        });

        gsap.set([...bars.children, diagramLine, hop], {
            transformOrigin: '50% 100%',
        });
        gsap.set(platform, { transformOrigin: '50% 50%' });
        gsap.set([...bars.children], { scaleY: 0, fill: diagramTheme.fourth });

        const pathLength = diagramLine.getTotalLength();
        gsap.set(diagramLine, { strokeDasharray: pathLength });

        const timeLine = gsap.timeline({
            defaults: { ease: 'power1.out' },
            scrollTrigger: { trigger: '#diagram' },
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
            .fromTo(
                platform,
                { scale: 0 },
                { duration: 1, scale: 1, autoAlpha: 1 }
            )
            .fromTo(
                person,
                { x: '+=200' },
                { duration: 1, ease: 'power4.out', x: '-=201', autoAlpha: 1 }
            )
            .addLabel('startDiagramBars')
            .to(...createBarTween(0, 1.85))
            .addLabel('finishBar1')
            .to(...createBarTween(1, 2.95))
            .addLabel('finishBar2')
            .to(...createBarTween(2, 3.7))
            .addLabel('finishBar3')
            .to(...createBarTween(3, 4.4))
            .addLabel('finishBar4')
            .to(...createBarTween(4, 5.65))
            .addLabel('finishBar5')
            .fromTo(
                hop,
                { scaleY: 0 },
                { scaleY: 1, duration: 5.65, autoAlpha: 1 },
                'startDiagramBars'
            )
            .fromTo(
                diagramLine,
                { strokeDashoffset: pathLength },
                {
                    duration: 5.4,
                    ease: 'power1.out',
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
    }, []);

    return (
        <Wrapper ref={wrapper}>
            <Diagram className="scrollTrigger" />
        </Wrapper>
    );
};

export default DiagramAnimation;
