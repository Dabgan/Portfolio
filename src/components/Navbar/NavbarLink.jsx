import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { BsFillBarChartFill as Skills } from 'react-icons/bs';
import { FaRegLightbulb as Projects } from 'react-icons/fa';
import { BiMessageDetail as Contact } from 'react-icons/bi';
import { GoPerson as About } from 'react-icons/go';
import MediaQuery from 'react-responsive';
import { breakpoints } from 'assets/styles/theme';
import propTypes from 'prop-types';

const NavItem = styled.li`
    text-decoration: none;
    list-style: none;
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    will-change: transform, opacity;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.fonts.color.secondary};
        cursor: pointer;
        background: ${({ theme }) => theme.background};
    }

    ${({ theme }) => theme.mq.md} {
        margin: 0 1.5vw;
        padding: 2rem 0;
        transform: translateY(0px);
        font-size: ${({ theme }) => theme.fontSize.m};
        padding: 0;
        z-index: 0;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`;

const navItems = [
    { name: 'skills', icon: <Skills /> },
    { name: 'projects', icon: <Projects /> },
    { name: 'about', icon: <About /> },
    { name: 'contact', icon: <Contact /> },
];

const NavbarLinks = ({ isActive, direction }) => {
    let offset;
    if (typeof window !== 'undefined') {
        offset = window.innerWidth > breakpoints.md;
    }

    const setOffset = name => {
        switch (name) {
            case 'skills':
                return offset ? -40 : -80;
            case 'projects':
                return offset ? -50 : -60;
            case 'about':
                return offset ? -50 : -20;
            case 'contact':
                return offset ? 60 : 20;
            default:
                return null;
        }
    };

    return (
        <>
            {navItems.map(({ name, icon }) => (
                <NavItem key={name} $isActive={isActive} $direction={direction}>
                    <Link to={name} smooth offset={setOffset(name)}>
                        <MediaQuery maxDeviceWidth={758}>
                            <IconWrapper>{icon}</IconWrapper>
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={758}>{name}</MediaQuery>
                    </Link>
                </NavItem>
            ))}
        </>
    );
};

NavbarLinks.propTypes = {
    isActive: propTypes.bool,
    direction: propTypes.number,
};
NavbarLinks.defaultProps = {
    isActive: false,
    direction: 1,
};

export default NavbarLinks;
