import styled from 'styled-components';

export const HeroTitle = styled.h1`
    font-size: 300px;
    letter-spacing: 2rem;
`;

export const HeroSubtitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fonts.regular};

    margin-top: -6rem;
    span {
        color: ${({ theme }) => theme.tertiary};
        font-weight: ${({ theme }) => theme.fonts.bold};
    }
`;

export const Wrapper = styled.header`
    display: flex;
    flex-flow: column;
    align-items: center;
`;
