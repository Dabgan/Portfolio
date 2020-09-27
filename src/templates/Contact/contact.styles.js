import styled from 'styled-components';

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    margin-top: -2rem;
    padding: 5rem 0;
    ${({ theme }) => theme.mq.lg} {
        /* flex-flow: row; */
    }
`;

export const Subtitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin: 0 0 ${({ theme }) => theme.margin.m};
    letter-spacing: 0.05rem;
    text-align: center;
    font-weight: 300;
    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.l};
        text-align: left;
        margin: 0 0;
    }
`;
