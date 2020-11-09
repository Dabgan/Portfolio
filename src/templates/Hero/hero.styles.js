import styled from 'styled-components';

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    min-height: 100vh;

    ${({ theme }) => theme.mq.md} {
        min-height: 55vh;
    }
    ${({ theme }) => theme.mq.lg} {
        position: relative;
        margin-top: 2rem;
        min-height: 75vh;
    }
`;
export const InnerWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 6rem;
`;
export const HeroTitle = styled.h1`
    font-size: 7.5rem;
    line-height: 7.5rem;
    letter-spacing: 1.5rem;
    margin: 3rem 0 0 5px;
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    ::selection {
        color: ${({ theme }) => theme.fourth};
        background: ${({ theme }) => theme.primary};
    }
    ${({ theme }) => theme.mq.md} {
        font-size: 20rem;
        line-height: 20rem;
        margin-top: 5rem;
    }

    ${({ theme }) => theme.mq.xl} {
        font-size: 30rem;
        line-height: 30rem;
        letter-spacing: 3rem;
        margin-top: 8rem;
    }
`;
export const HeroSubtitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fonts.regular};
    text-align: center;
    margin-top: 4rem;
    color: ${({ theme }) => theme.fonts.color.secondary};
    visibility: hidden;
    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const NameSpan = styled.span``;
