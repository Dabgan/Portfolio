import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    background: white;
    z-index: 2;
    transition: all 0.3s ease-in;
    padding: 0.3rem 0;
    ${({ isScrolled }) =>
        isScrolled &&
        css`
            background: white;
            box-shadow: 0 2px 5px -2px ${({ theme }) => theme.gray100};
        `}
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: 0vh 5vw;
    z-index: 2;
    transition: all 0.3s ease-in;
    ${({ theme }) => theme.mq.md} {
        position: relative;
        text-transform: none;
    }
    ${({ isScrolled }) =>
        isScrolled &&
        css`
            /* padding: 0 5vw; */
        `}
`;

export const Navbox = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.white};
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
