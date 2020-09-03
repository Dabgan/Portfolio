import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavItem = styled.li`
    color: ${({ theme }) => theme.fourth};
    text-decoration: none;
    list-style: none;
    margin: 0 1.5vw;
    transition: all 0.2s ease-in;
    position: relative;
    padding: 20px 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.fourth};
    }

    ${({ theme }) => theme.mq.md} {
        font-size: ${({ theme }) => theme.fontSize.m};
        padding: 0;
        z-index: 0;
    }

    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: '';
        color: ${({ theme }) => theme.tertiary};
        background: ${({ theme }) => theme.tertiary};
        height: 1px;
        transition: all 0.4s ease-in;
    }

    :hover {
        color: ${({ theme }) => theme.tertiary};
        ${({ theme }) => theme.mq.md} {
            color: initial;
        }
        ::after {
            width: 100%;
            ${({ theme }) => theme.mq.md} {
                width: 0%;
            }
        }
    }
`;

const NavbarLinks = () => {
    return (
        <>
            <NavItem>
                <Link to="#skills">skills</Link>
            </NavItem>
            <NavItem>
                <Link to="#projects">projects</Link>
            </NavItem>
            <NavItem>
                <Link to="#contact">contact</Link>
            </NavItem>
            <NavItem>
                <Link to="#about">about</Link>
            </NavItem>
        </>
    );
};

export default NavbarLinks;
