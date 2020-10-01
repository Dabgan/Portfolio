import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Header = styled.h2`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fonts.bold};
    color: ${({ $color }) =>
        $color ? ({ theme }) => theme.primary : ({ theme }) => theme.white};

    ${({ theme }) => theme.mq.lg} {
        text-align: left;
        font-size: ${({ theme }) => theme.fontSize.xxxl};
        margin-left: -0.5rem;
        ${({ $inverted }) =>
            $inverted &&
            css`
                text-align: right;
            `}
    }
`;

const TemplateHeader = ({ children, color, inverted }) => {
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
        <Header ref={headerRef} $color={color} $inverted={inverted}>
            {children}
        </Header>
    );
};

TemplateHeader.propTypes = {
    children: propTypes.string.isRequired,
    color: propTypes.bool,
    inverted: propTypes.bool,
};

TemplateHeader.defaultProps = {
    color: false,
    inverted: false,
};

export default TemplateHeader;
