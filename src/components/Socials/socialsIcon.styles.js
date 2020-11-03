import styled from 'styled-components';

export const Item = styled.li`
    list-style: none;
    margin-left: 2rem;
    ${({ theme }) => theme.mq.lg} {
        display: flex;
        width: 100%;
        margin: 0 0 5rem 0;
    }
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    ::before {
        content: '';
        height: calc(100% - 5px);
        width: calc(100% - 5px);
        background: ${({ theme }) => theme.white};
        position: absolute;
        top: 3px;
        left: -3px;
        z-index: -1;
        transition: all 0.3s ease-in-out;
        ${({ theme }) => theme.mq.lg} {
            top: 10px;
            left: -5px;
        }
    }

    :hover {
        transform: translate(-3px, 3px);
        ${({ theme }) => theme.mq.lg} {
            transform: translate(-5px, 5px);
        }
        ::before {
            transform: translate(3px, -3px);
            ${({ theme }) => theme.mq.lg} {
                transform: translate(5px, -5px);
            }
        }
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid ${({ theme }) => theme.white};
        padding: 0.7rem;
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: ${({ theme }) => theme.white};
        background: ${({ theme }) => theme.black};
        ${({ theme }) => theme.mq.lg} {
            height: 64px;
            width: 64px;
        }
    }
    svg {
        font-size: 1.8rem;
        ${({ theme }) => theme.mq.lg} {
            font-size: 3.5rem;
        }
    }
`;

export const ItemDesc = styled.div`
    ${({ theme }) => theme.mq.lg} {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        padding-left: 3rem;
    }
    p {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

export const Name = styled.h4`
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.m};
    text-transform: capitalize;
    color: ${({ theme }) => theme.white};
`;
