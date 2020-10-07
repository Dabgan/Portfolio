import React from 'react';
import { Link } from 'react-scroll';
import styled, { css } from 'styled-components';
import { GoGraph as Skills, GoRepo as Projects } from 'react-icons/go';
import { GrContact as Contact } from 'react-icons/gr';
import { RiContactsLine as About } from 'react-icons/ri';
import MediaQuery from 'react-responsive';
import propTypes from 'prop-types';

const NavItem = styled.li`
    text-decoration: none;
    list-style: none;
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.m};
    transition: all 0.5s ease-in-out;
    transform: translateY(-70px);

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.primary};
        cursor: pointer;
        background: ${({ $active }) => ($active ? 'red' : 'white')};
    }

    ${({ theme }) => theme.mq.md} {
        margin: 0 1.5vw;
        padding: 2rem 0;
        transform: translateY(0px);
        font-size: ${({ theme }) => theme.fontSize.m};
        padding: 0;
        z-index: 0;
        transition: none;
    }
    ${({ $direction, $isActive }) =>
        $direction === -1 &&
        $isActive &&
        css`
            transform: translateY(0px);
        `}
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
    return (
        <>
            {navItems.map(({ name, icon }) => (
                <NavItem key={name} $isActive={isActive} $direction={direction}>
                    <Link
                        to={name}
                        smooth
                        offset={name === 'contact' ? 50 : -90}
                    >
                        <MediaQuery maxDeviceWidth={1024}>
                            <IconWrapper>{icon}</IconWrapper>
                        </MediaQuery>

                        <MediaQuery minDeviceWidth={1024}>{name}</MediaQuery>
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
