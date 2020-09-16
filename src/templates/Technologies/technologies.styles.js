import styled from 'styled-components';
import Wave from 'react-wavify';

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.primary};
    margin-top: -1rem;
    padding-bottom: 5rem;
    ${({ theme }) => theme.mq.lg} {
        padding-top: 5rem;
        padding-bottom: 0rem;
    }
`;

export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3rem;
    ${({ theme }) => theme.mq.lg} {
        margin-top: 0rem;
        align-items: flex-start;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-flow: column;
    ${({ theme }) => theme.mq.lg} {
        margin: 4rem 3rem 0;
    }
`;

export const TopWave = styled(Wave)`
    ${({ theme }) => theme.mq.lg} {
        margin-top: 6rem;
    }
`;

export const BottomWave = styled.img`
    width: 100%;
    color: red;
`;
