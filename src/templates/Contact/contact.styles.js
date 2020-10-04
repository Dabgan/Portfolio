import styled from 'styled-components';

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    margin-top: -2rem;
    padding: 5rem 0 0;
    ${({ theme }) => theme.mq.lg} {
        margin-top: -6rem;
        padding: ${({ theme }) => theme.padding.xl} 0;
    }
`;

export const InnerWrapper = styled.div`
    ${({ theme }) => theme.mq.lg} {
        display: flex;
        flex-flow: row-reverse;
        margin-top: 3rem;
    }
`;

export const InfoWrapper = styled.div`
    ${({ theme }) => theme.mq.lg} {
        max-width: 50%;
        padding-left: 10rem;
    }
`;
