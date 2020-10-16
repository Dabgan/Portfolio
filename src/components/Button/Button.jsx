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
    background: ${({ theme, $disabled }) =>
        $disabled ? theme.gray100 : theme.white};
    cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
    pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
    transition: transform 0.2s ease-in-out;

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
    ${({ $submit }) =>
        $submit === 'send' &&
        css`
            outline: none;
            border: 2px solid ${({ theme }) => theme.valid};
            background: ${({ theme }) => theme.white};
        `}
    ${({ $submit }) =>
        $submit === 'error' &&
        css`
            outline: none;
            border: 2px solid ${({ theme }) => theme.error};
            background: ${({ theme }) => theme.white};
        `}
    ${({ $disabled }) =>
        $disabled &&
        css`
            transform: translate(-6px, 5px);
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

    ${({ $submit }) =>
        $submit === 'send' &&
        css`
            outline: none;
            background: ${({ theme }) => theme.valid};
        `}
    ${({ $submit }) =>
        $submit === 'error' &&
        css`
            outline: none;
            background: ${({ theme }) => theme.error};
        `}
`;

const Button = ({
    children,
    marginTop,
    size,
    onClick,
    secondary,
    submit,
    disabled,
    btnRef,
}) => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const buttonRef = useRef(null);

    // setting proportional button background based on actual button sizes
    useEffect(() => {
        setHeight(buttonRef.current.offsetHeight);
        setWidth(buttonRef.current.offsetWidth);
    }, [submit]);

    return (
        <BtnWrapper marginTop={marginTop} ref={btnRef}>
            <Btn
                ref={buttonRef}
                size={size}
                onClick={onClick}
                secondary={secondary}
                type={submit ? 'submit' : 'button'}
                $submit={submit}
                $disabled={disabled}
            >
                {children}
            </Btn>
            <BtnBackground
                width={width}
                height={height}
                size={size}
                $submit={submit}
            />
        </BtnWrapper>
    );
};

Button.propTypes = {
    children: propTypes.oneOfType([propTypes.string, propTypes.element])
        .isRequired,
    marginTop: propTypes.string,
    size: propTypes.string,
    secondary: propTypes.bool,
    onClick: propTypes.func,
    submit: propTypes.oneOfType([propTypes.string, propTypes.bool]),
    disabled: propTypes.bool,
    btnRef: propTypes.oneOfType([
        propTypes.func,
        propTypes.shape({
            current: propTypes.instanceOf(propTypes.elementType),
        }),
    ]),
};

Button.defaultProps = {
    marginTop: '0px',
    size: 'big',
    secondary: false,
    onClick: null,
    submit: false,
    disabled: false,
    btnRef: null,
};

export default Button;
