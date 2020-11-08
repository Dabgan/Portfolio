import styled from 'styled-components';

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.white};
    margin-top: -2rem;
    padding: 5rem 0 0;
    overflow: hidden;

    ${({ theme }) => theme.mq.md} {
        margin-top: -3rem;
    }
    ${({ theme }) => theme.mq.lg} {
        min-height: 95vh;
        margin-top: -6rem;
        padding: ${({ theme }) => theme.padding.xl} 0 0;
    }
`;
export const AnimationWrapper = styled.div`
    position: relative;
`;

export const InnerWrapper = styled.div`
    ${({ theme }) => theme.mq.lg} {
        display: flex;
        flex-flow: row-reverse;
        margin-top: 3rem;
    }
`;

export const InfoWrapper = styled.div`
    margin-bottom: ${({ theme }) => theme.margin.m};

    ${({ theme }) => theme.mq.lg} {
        max-width: 50%;
        padding-left: 10rem;
    }
`;
