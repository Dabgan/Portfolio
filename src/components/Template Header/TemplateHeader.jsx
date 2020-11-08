import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const Header = styled.h2`
    text-align: center;
    padding: 0 3px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fonts.bold};
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    letter-spacing: 0.25rem;
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
    return (
        <Header $color={color} $inverted={inverted}>
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
