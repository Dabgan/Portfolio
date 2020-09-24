import React, { useEffect, useRef } from 'react';
import Line from 'assets/svg/line.inline.svg';
import gsap from 'gsap';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Wrapper = styled.span`
    position: absolute;
    left: 0px;
    top: 70px;
    path {
        stroke: ${({ theme }) => theme.tertiary};
    }
`;

const LineAnimation = () => {
    const lineRef = useRef(null);

    useEffect(() => {
        const line = lineRef.current;
        gsap.registerPlugin(ScrollTrigger);

        const lineLength = line.querySelector('path').getTotalLength();
        gsap.set(line, { strokeDasharray: lineLength });

        gsap.fromTo(
            line,
            { autoAlpha: 0, strokeDashoffset: lineLength },
            {
                duration: 3,
                ease: 'power1.out',
                strokeDashoffset: 0,
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: line,
                },
            }
        );
    }, []);

    return (
        <Wrapper ref={lineRef}>
            <Line />
        </Wrapper>
    );
};

export default LineAnimation;
