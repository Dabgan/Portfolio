import styled from 'styled-components';
import Wave from 'react-wavify';

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.fourth};
    margin-top: -1rem;
    padding-bottom: 5rem;

    ${({ theme }) => theme.mq.lg} {
        padding-top: 5rem;
    }
`;

export const InnerWrapper = styled.div`
    display: flex;
    margin-top: 3rem;
`;

export const List = styled.ul`
    display: flex;
    flex-flow: column;
`;

export const TopWave = styled(Wave)`
    ${({ theme }) => theme.mq.lg} {
        margin-top: 6rem;
    }
`;

export const BottomWave = styled.img`
    width: 100%;
`;
