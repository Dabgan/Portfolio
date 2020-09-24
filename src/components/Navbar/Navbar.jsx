import React, { useState, useEffect, useRef } from 'react';
import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';
import Content from 'components/Content/Content';
import { gsap } from 'gsap';
import NavbarLinks from './NavbarLink';
import { Navigation, Toggle, Navbox } from './navbar.styles';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const navLinksRef = useRef(null);

    useEffect(() => {
        const navLinks = navLinksRef.current;
        gsap.fromTo(
            navLinks.children,
            { autoAlpha: 0, y: '-=20' },
            {
                duration: 1.5,
                autoAlpha: 1,
                y: '0',
                ease: 'power2.out',
                stagger: 0.2,
            }
        );
    }, []);

    return (
        <Content>
            <Navigation>
                <Logo />
                <Toggle
                    navbarOpen={navbarOpen}
                    onClick={() =>
                        setNavbarOpen(prevNavbarOpen => !prevNavbarOpen)
                    }
                >
                    {navbarOpen ? <Hamburger open /> : <Hamburger />}
                </Toggle>
                {navbarOpen ? (
                    <Navbox>
                        <NavbarLinks />
                    </Navbox>
                ) : (
                    <Navbox open ref={navLinksRef}>
                        <NavbarLinks />
                    </Navbox>
                )}
            </Navigation>
        </Content>
    );
};

export default Navbar;
