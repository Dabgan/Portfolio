import React, { useRef, useEffect } from 'react';
import Diagram from 'assets/svg/diagram.inline.svg';
import styled from 'styled-components';
import gsap from 'gsap';

const Wrapper = styled.div`
    width: 100%;
    border: 2px solid #f11b1b;
    display: flex;
    justify-content: flex-start;

    svg {
        border: 2px solid #069cc8;
        width: 100%;
        /* display: flex; */
        /* justify-content: flex-start; */
        g #diagram {
            border: 2px solid #f11b1b;
            background: red;
        }
    }
`;

const DiagramAnimation = () => {
    const wrapper = useRef(null);

    useEffect(() => {
        const [elements] = wrapper.current.children;

        const circles = elements.getElementById('circles');
        const person = elements.getElementById('person');
        const bars = elements.getElementById('bars');
        const charts = elements.getElementById('charts');
        const platform = elements.getElementById('platform');
        const hop = elements.getElementById('hop');

        const [
            circleLine,
            circle1,
            circle2,
            circle3,
            circle4,
            circle5,
        ] = circles.children;

        console.log(circle1, circle2, circle3, circle4, circle5, circleLine);

        gsap.set(
            [
                ...bars.children,
                ...circles.children,
                ...charts.children,
                person,
                platform,
                hop,
            ],
            {
                autoAlpha: 0,
            }
        );

        gsap.set([...bars.children], { transformOrigin: '50% 100%' });
        gsap.set(circleLine, { transformOrigin: '50% 100%' });

        const timeLine = gsap.timeline({ defaults: { ease: 'none' } });

        timeLine
            .to(platform, { duration: 1, autoAlpha: 1 })
            .fromTo(
                person,
                { x: '+=200' },
                { duration: 1, x: '-=200', autoAlpha: 1 }
            )
            .addLabel('startDiagramBars', 1.5)
            .fromTo(
                bars.children[0],
                { scaleY: 0 },
                { duration: 2, scaleY: 1, autoAlpha: 1 },
                'startDiagramBars'
            )
            .addLabel('finishBar1')
            .fromTo(
                bars.children[1],
                { scaleY: 0 },
                { duration: 3, scaleY: 1, autoAlpha: 1 },
                'startDiagramBars'
            )
            .addLabel('finishBar2')
            .fromTo(
                bars.children[2],
                { scaleY: 0 },
                { duration: 3.8, scaleY: 1, autoAlpha: 1 },
                'startDiagramBars'
            )
            .addLabel('finishBar3')
            .fromTo(
                bars.children[3],
                { scaleY: 0 },
                { duration: 4.5, scaleY: 1, autoAlpha: 1 },
                'startDiagramBars'
            )
            .addLabel('finishBar4')
            .fromTo(
                bars.children[4],
                { scaleY: 0 },
                { duration: 5.8, scaleY: 1, autoAlpha: 1 },
                'startDiagramBars'
            )
            .addLabel('finishBar5')
            .to(hop, {
                duration: 1,
                autoAlpha: 1,
            })
            .to(
                circle1,
                {
                    duration: 1,
                    autoAlpha: 1,
                },
                'finishBar1'
            )
            .to(
                circle2,
                {
                    duration: 1,
                    autoAlpha: 1,
                },
                'finishBar2'
            )
            .to(
                circle3,
                {
                    duration: 1,
                    autoAlpha: 1,
                },
                'finishBar3'
            )
            .to(
                circle4,
                {
                    duration: 1,
                    autoAlpha: 1,
                },
                'finishBar4'
            )
            .to(
                circle5,
                {
                    duration: 1,
                    autoAlpha: 1,
                },
                'finishBar5'
            )
            .fromTo(
                circleLine,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    duration: 1,
                    autoAlpha: 1,
                },
                'finishBar5'
            )
            .to(charts.children, { duration: 1.5, autoAlpha: 1, stagger: 0.5 });
    }, []);

    return (
        <Wrapper ref={wrapper}>
            <Diagram />
        </Wrapper>
    );
};

export default DiagramAnimation;
