import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%;
    text-align: center;
    padding: ${({ theme }) => theme.padding.s};
    color: ${({ theme }) => theme.fourth};
    background: ${({ theme }) => theme.primary};
    font-style: italic;
`;

const Footer = () => {
    return (
        <StyledFooter>
            © 2020 Gabriel Daniluk - All rights reserved.
        </StyledFooter>
    );
};

export default Footer;
