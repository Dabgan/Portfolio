import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavItem = styled.li`
    text-decoration: none;
    list-style: none;
    margin: 0 1.5vw;
    position: relative;
    padding: 20px 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.primary};
        cursor: pointer;
        background: ${({ $active }) => ($active ? 'red' : 'white')};
    }

    ${({ theme }) => theme.mq.md} {
        font-size: ${({ theme }) => theme.fontSize.m};
        padding: 0;
        z-index: 0;
    }
`;

const navItems = ['skills', 'projects', 'about', 'contact'];

const NavbarLinks = () => {
    return (
        <>
            {navItems.map(item => (
                <NavItem key={item}>
                    <Link
                        to={item}
                        smooth
                        offset={item === 'contact' ? 50 : -90}
                    >
                        {item}
                    </Link>
                </NavItem>
            ))}
        </>
    );
};

export default NavbarLinks;
