import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    background: ${({ theme }) => theme.background};
    z-index: 2;
    padding: 0.3rem 0;
    transition: all 0.5s ease-in-out;
    ${({ direction }) =>
        direction === 1 &&
        css`
            transform: translateY(-70px);
        `}
    ${({ direction, isActive }) =>
        direction === -1 &&
        isActive &&
        css`
            box-shadow: 0 2px 5px -2px ${({ theme }) => theme.gray100};
        `}
`;

export const Navigation = styled.div`
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
`;

export const Navbox = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
    ${({ theme }) => theme.mq.lg} {
        justify-content: flex-end;
    }
`;
