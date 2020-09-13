import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
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
    border: 4px solid ${({ theme }) => theme.tertiary};
    background: ${({ theme }) => theme.white};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
        transform: translate(-10px, 10px);
    }
    ${({ theme }) => theme.mq.md} {
        padding: 14px 28px;
    }
`;

const BtnBackground = styled.div`
    position: absolute;
    top: 15px;
    left: -10px;
    background: ${({ theme }) => theme.tertiary};
    width: ${props => props.width - 5}px;
    height: ${props => props.height - 5}px;
    z-index: -1;
`;

const Button = ({ children, marginTop }) => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const buttonRef = useRef(null);

    useEffect(() => {
        setHeight(buttonRef.current.offsetHeight);
        setWidth(buttonRef.current.offsetWidth);
    }, []);

    return (
        <BtnWrapper marginTop={marginTop}>
            <Btn ref={buttonRef}>{children}</Btn>
            <BtnBackground width={width} height={height} />
        </BtnWrapper>
    );
};

Button.propTypes = {
    children: propTypes.string.isRequired,
    marginTop: propTypes.string,
};

Button.defaultProps = {
    marginTop: '0px',
};

export default Button;
