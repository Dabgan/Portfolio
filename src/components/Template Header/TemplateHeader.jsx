import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Header = styled.h2`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fonts.bold};
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.fifth};
`;

const TemplateHeader = ({ title }) => {
    return <Header>{title}</Header>;
};

TemplateHeader.propTypes = {
    title: propTypes.string.isRequired,
};

export default TemplateHeader;
