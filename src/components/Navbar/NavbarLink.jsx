import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import gsap from 'gsap/gsap-core';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

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
    gsap.registerPlugin(ScrollToPlugin);

    const handleScrollToSection = item => {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: `#${item}`, offsetY: 50 },
            ease: 'power2.Out',
        });
    };

    return (
        <>
            {navItems.map(item => (
                <NavItem onClick={() => handleScrollToSection(item)} key={item}>
                    <Link to={`#${item}`}>{item}</Link>
                </NavItem>
            ))}
        </>
    );
};

export default NavbarLinks;
