import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const BtnWrapper = styled.div`
    position: relative;
    margin-top: ${props => props.marginTop};
`;

const Btn = styled.button`
    position: relative;
    padding: 8px 16px;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fonts.bold};
    letter-spacing: 0.1em;
    border: 2px solid ${({ theme }) => theme.tertiary};
    background: ${({ theme }) => theme.white};
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    :hover {
        transform: translate(-7px, 6px);
    }
    ${({ theme }) => theme.mq.md} {
        padding: 14px 28px;
    }

    ${({ size }) =>
        size === 'small' &&
        css`
            padding: 4px 8px;
            font-size: ${({ theme }) => theme.fontSize.xs};
            margin-bottom: 2px;
            border: 2px solid ${({ theme }) => theme.tertiary};
            :hover {
                transform: translate(-3px, 3px);
            }
        `}
    ${({ size }) =>
        size === 'medium' &&
        css`
            font-size: ${({ theme }) => theme.fontSize.s};
            :hover {
                transform: translate(-6px, 5px);
            }
        `}
    ${({ secondary }) =>
        secondary &&
        css`
            background: ${({ theme }) => theme.black};
            color: ${({ theme }) => theme.white};
        `}
`;

const BtnBackground = styled.div`
    position: absolute;
    z-index: -1;
    top: 12px;
    left: -7px;
    background: ${({ theme }) => theme.tertiary};
    width: ${props => props.width - 12}px;
    height: ${props => props.height - 6}px;

    ${({ size }) =>
        size === 'small' &&
        css`
            top: 7px;
            left: -3px;
            height: ${props => props.height - 4}px;
        `}
    ${({ size }) =>
        size === 'medium' &&
        css`
            top: 12px;
            left: -6px;
            height: ${props => props.height - 7}px;
        `}
`;

const Button = ({ children, marginTop, size, onClick, secondary }) => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const buttonRef = useRef(null);

    // setting proportional button background based on actual button sizes
    useEffect(() => {
        setHeight(buttonRef.current.offsetHeight);
        setWidth(buttonRef.current.offsetWidth);
    }, []);

    return (
        <BtnWrapper marginTop={marginTop}>
            <Btn
                ref={buttonRef}
                size={size}
                onClick={onClick}
                secondary={secondary}
            >
                {children}
            </Btn>
            <BtnBackground width={width} height={height} size={size} />
        </BtnWrapper>
    );
};

Button.propTypes = {
    children: propTypes.string.isRequired,
    marginTop: propTypes.string,
    size: propTypes.string,
    secondary: propTypes.bool,
    onClick: propTypes.func,
};

Button.defaultProps = {
    marginTop: '0px',
    size: 'big',
    secondary: false,
    onClick: null,
};

export default Button;
