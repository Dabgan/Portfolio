import styled from 'styled-components';

export const Wrapper = styled.section`
    ${({ theme }) => theme.mq.lg} {
        min-height: 250rem;
    }
`;
export const InnerWrapper = styled.div`
    margin-top: ${({ theme }) => theme.margin.m};
    overflow: hidden;
`;
