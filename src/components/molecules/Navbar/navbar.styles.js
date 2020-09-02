import styled from 'styled-components';

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    height: 15vh;
    top: 0;
    left: 0;
    right: 0;
    text-transform: uppercase;
    padding: 0 5vw;
    z-index: 2;
    ${({ theme }) => theme.mq.md} {
        position: relative;
        text-transform: none;
    }
`;

export const Navbox = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.primary};
    padding-top: 10vh;
    transition: all 0.3s ease-in;
    top: 15vh;
    right: ${props => (props.open ? '-100%' : '0')};

    ${({ theme }) => theme.mq.md} {
        flex-flow: row;
        padding-top: 0vh;
        height: auto;
        width: auto;
        position: relative;
        top: 0;
        right: 0;
    }
`;

export const Toggle = styled.div`
    margin: auto 0;
    display: flex;
    cursor: pointer;
    ${({ theme }) => theme.mq.md} {
        display: none;
    }
`;
