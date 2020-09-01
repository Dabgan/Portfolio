import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavItem = styled(Link)`
    color: ${({ theme }) => theme.fonts.color.secondary};
    font-size: ${({ theme }) => theme.fontSize.m};
    text-decoration: none;
    margin: 0 50px;
    transition: all 200ms ease-in;
    position: relative;
`;

const NavbarLinks = () => {
    return (
        <>
            <NavItem to="#skills">skills</NavItem>
            <NavItem to="#projects">projects</NavItem>
            <NavItem to="#contact">contact</NavItem>
            <NavItem to="#about">about</NavItem>
        </>
    );
};

export default NavbarLinks;
