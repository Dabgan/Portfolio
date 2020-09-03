import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.fourth};
    margin-top: -1rem;
    padding-bottom: 5rem;
`;

export const InnerWrapper = styled.div`
    display: flex;
    margin-top: 3rem;
`;

export const List = styled.ul`
    display: flex;
    flex-flow: column;
`;

export const BottomWave = styled.img`
    width: 100%;
`;
