import styled from 'styled-components';

export const InnerWrapper = styled.section`
    margin-top: ${({ theme }) => theme.margin.m};
`;

export const SecondaryTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: ${({ theme }) => theme.margin.xs} 0 ${({ theme }) => theme.margin.m};
    letter-spacing: 0.05rem;
    text-align: center;
    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.ml};
        text-align: left;
        margin: 0 0;
    }
`;
