import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import useScrollToSection from 'hooks/useScrollToSection/useScrollToSection';

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
                <NavItem
                    onClick={() => useScrollToSection(`#${item}`)}
                    key={item}
                >
                    <Link to="/">{item}</Link>
                </NavItem>
            ))}
        </>
    );
};

export default NavbarLinks;
