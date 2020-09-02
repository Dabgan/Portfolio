import styled from 'styled-components';

export const HeroTitle = styled.h1`
    font-size: 7.5rem;
    letter-spacing: 1rem;
    margin: 2rem 0 0 5px;

    ${({ theme }) => theme.mq.s} {
        font-size: 9rem;
    }

    ${({ theme }) => theme.mq.lg} {
        font-size: 20rem;
    }

    ${({ theme }) => theme.mq.xl} {
        font-size: 30rem;
        margin: 3rem 0 0;
        letter-spacing: 2rem;
    }
`;

export const HeroSubtitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fonts.regular};
    text-align: center;
    margin-top: 1.5rem;
    span {
        color: ${({ theme }) => theme.tertiary};
        font-weight: ${({ theme }) => theme.fonts.bold};
    }
    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.xl};
        margin-top: 0;
    }
`;

export const Wrapper = styled.header`
    display: flex;
    flex-flow: column;
    align-items: center;
`;
