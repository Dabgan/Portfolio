import React, { useState, useEffect, useRef } from 'react';
import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';
import Content from 'components/Content/Content';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavbarLinks from './NavbarLink';
import { Wrapper, Navigation, Toggle, Navbox } from './navbar.styles';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    const navLinksRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const navLinks = navLinksRef.current;
        const wrapper = wrapperRef.current;

        ScrollTrigger.create({
            start: 'top -20',
            end: 9999,
            onToggle: self => setNavbarScrolled(self.isActive),
        });

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
        <Wrapper ref={wrapperRef} isScrolled={navbarScrolled}>
            <Content>
                <Navigation isScrolled={navbarScrolled}>
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
        </Wrapper>
    );
};

export default Navbar;
