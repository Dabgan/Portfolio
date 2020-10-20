import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: ${({ theme }) => theme.padding.s};
    color: ${({ theme }) => theme.fonts.color.primary};
    background: ${({ theme }) => theme.secondary};
    font-style: italic;

    ${({ theme }) => theme.mq.md} {
        padding-top: 10rem;
    }

    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            © 2020 Gabriel Daniluk - All rights reserved.
        </StyledFooter>
    );
};

export default Footer;
