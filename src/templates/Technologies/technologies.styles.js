import styled from 'styled-components';

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.primary};
    margin-top: -1rem;
    padding: 2rem 0;
    ${({ theme }) => theme.mq.lg} {
        padding-top: 5rem;
        padding-bottom: 4rem;
    }
`;

export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 3rem;
    ${({ theme }) => theme.mq.lg} {
        margin-top: 5rem;
    }
    ${({ theme }) => theme.mq.md} {
        justify-content: space-around;
    }
`;
export const List = styled.ul`
    display: flex;
    flex-flow: column;
    ${({ theme }) => theme.mq.lg} {
        margin-right: 3rem;
    }
`;
export const Loader = styled.div`
    display: none;
    visibility: hidden;
    ${({ theme }) => theme.mq.lg} {
        display: flex;
        flex: 1;
        max-width: 50%;
    }
`;
