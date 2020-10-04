import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Subtitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0 0 ${({ theme }) => theme.margin.m};
    letter-spacing: 0.05rem;
    text-align: center;
    font-weight: 300;
    margin-top: ${({ $mTop }) => $mTop};
    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.l};
        text-align: left;
        margin: 0 0;
    }
`;

const TemplateSubtitle = ({ children, mTop }) => {
    const headerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const header = headerRef.current;

        gsap.from(header, {
            duration: 1,
            autoAlpha: 0,
            y: '+=50',
            scrollTrigger: {
                trigger: header,
                start: 'top bottom-=20px',
                // markers: true,
            },
        });
    }, []);

    return (
        <Subtitle ref={headerRef} $mTop={mTop}>
            {children}
        </Subtitle>
    );
};

TemplateSubtitle.propTypes = {
    children: propTypes.string.isRequired,
    mTop: propTypes.string,
};

TemplateSubtitle.defaultProps = {
    mTop: '0',
};

export default TemplateSubtitle;
