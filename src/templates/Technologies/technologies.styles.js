import styled from 'styled-components';
import Wave from 'react-wavify';
import wave from 'assets/svg/wave.inline.svg';

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.primary};
    margin-top: -1rem;
    padding-bottom: 2rem;
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
        /* padding-left: 6rem; */
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

export const TopWave = styled(Wave)`
    ${({ theme }) => theme.mq.lg} {
        margin-top: 6rem;
    }
`;
export const BottomWave = styled(wave)`
    path {
        fill: ${({ theme }) => theme.primary};
    }
`;
