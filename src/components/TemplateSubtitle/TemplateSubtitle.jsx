import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Subtitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0 0 ${({ theme }) => theme.margin.s};
    letter-spacing: 0.05rem;
    text-align: center;
    font-weight: 300;
    margin-top: ${({ $mTop }) => $mTop};
    color: ${({ $halfWidth, theme }) =>
        $halfWidth ? theme.fonts.color.secondary : theme.fonts.color.primary};
    p {
        color: ${({ $halfWidth, theme }) =>
            $halfWidth
                ? theme.fonts.color.secondary
                : theme.fonts.color.primary};
    }
    ${({ theme }) => theme.mq.md} {
        margin: 1rem 0 2rem;
    }

    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.l};
        text-align: left;
        margin: 0 0;
        margin-top: ${({ $mTop }) => $mTop};
        width: ${({ $halfWidth }) => ($halfWidth ? '50%' : 'auto')};
    }
`;

const TemplateSubtitle = ({ children, mTop, halfWidth }) => {
    return (
        <Subtitle $mTop={mTop} $halfWidth={halfWidth}>
            {children}
        </Subtitle>
    );
};

TemplateSubtitle.propTypes = {
    children: propTypes.oneOfType([propTypes.string, propTypes.array])
        .isRequired,
    mTop: propTypes.string,
    halfWidth: propTypes.bool,
};

TemplateSubtitle.defaultProps = {
    mTop: '0',
    halfWidth: false,
};

export default TemplateSubtitle;
