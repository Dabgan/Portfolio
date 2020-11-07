import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import propTypes from 'prop-types';

const SVGWrapper = styled.span`
    position: absolute;
    visibility: hidden;
    top: ${({ $position }) => `${$position.top}px`};
    bottom: ${({ $position }) => `${$position.bottom}px`};
    right: ${({ $position }) => `${$position.right}px`};
    left: ${({ $position }) => `${$position.left}px`};
    z-index: 1;
    path {
        stroke: ${({ theme }) => theme.warning};
    }
`;

const DrawSvgAnimation = ({ children, position, animation }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = svgRef.current;
        gsap.registerPlugin(ScrollTrigger);

        const svgLength = svg.querySelector('path').getTotalLength();
        gsap.set(svg, { strokeDasharray: svgLength });

        gsap.fromTo(
            svg,
            { autoAlpha: 0, strokeDashoffset: svgLength },
            {
                delay: animation.delay,
                duration: animation.speed,
                ease: 'power2.out',
                strokeDashoffset: 0,
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: svg,
                    toggleActions: 'play pause resume pause',
                },
            }
        );
    }, []);

    return (
        <SVGWrapper ref={svgRef} $position={position}>
            {children}
        </SVGWrapper>
    );
};

DrawSvgAnimation.propTypes = {
    children: propTypes.element.isRequired,
    position: propTypes.shape({
        top: propTypes.number,
        bottom: propTypes.number,
        right: propTypes.number,
        left: propTypes.number,
    }),
    animation: propTypes.shape({
        delay: propTypes.number,
        speed: propTypes.number,
    }),
};

DrawSvgAnimation.defaultProps = {
    position: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    animation: {
        delay: 0,
        speed: 4,
    },
};

export default DrawSvgAnimation;
