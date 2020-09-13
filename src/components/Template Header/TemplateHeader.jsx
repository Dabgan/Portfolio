import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Header = styled.h2`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fonts.bold};
    letter-spacing: 0.3rem;
    color: ${props =>
        props.color
            ? ({ theme }) => theme.primary
            : ({ theme }) => theme.white};

    ${({ theme }) => theme.mq.lg} {
        text-align: left;
        font-size: ${({ theme }) => theme.fontSize.xxxl};
    }
`;

const TemplateHeader = ({ title, color }) => {
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(header, {
            duration: 1,
            autoAlpha: 0,
            y: '+=50',
            scrollTrigger: { trigger: header },
        });
    }, []);

    return (
        <Header ref={headerRef} color={color ? 1 : 0}>
            {title}
        </Header>
    );
};

TemplateHeader.propTypes = {
    title: propTypes.string.isRequired,
    color: propTypes.bool,
};

TemplateHeader.defaultProps = {
    color: false,
};

export default TemplateHeader;
