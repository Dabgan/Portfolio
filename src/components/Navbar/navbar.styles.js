import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    background: ${({ theme }) => theme.background};
    z-index: 2;
    padding: 0.3rem 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    will-change: transform, opacity;
    transform: translateY(0px);
    ${({ direction }) =>
        direction === 1 &&
        css`
            transform: translateY(-70px);
        `}
    ${({ direction, isActive }) =>
        direction === -1 &&
        isActive &&
        css`
            transform: translateY(0px);
            box-shadow: 0 2px 5px -2px ${({ theme }) => theme.gray100};
        `}
    ${({ theme }) => theme.mq.lg} {
    min-height: 7rem;
    margin-top: 2rem;
    }
`;
export const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: 0vh 5vw;
    z-index: 2;
    /* transition: all 0.3s ease-in; */
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
