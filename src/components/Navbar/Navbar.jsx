import React, { useState, useEffect, useRef } from 'react';
import Logo from 'components/Logo/Logo';
import Content from 'components/Content/Content';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MediaQuery from 'react-responsive';
import { breakpoints } from 'assets/styles/theme';
import NavbarLinks from './NavbarLink';
import { Wrapper, Navigation, Navbox } from './navbar.styles';

const Navbar = () => {
    const [scrollDirection, setScrollDirection] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const navLinksRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const navLinks = navLinksRef.current;

        const updateScrollDirection = dir => {
            setScrollDirection(dir);
        };

        const mediaQuery = window.matchMedia(
            `(min-width: ${breakpoints.md}px)`
        );
        if (mediaQuery.matches) {
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
        }
        ScrollTrigger.create({
            start: '100 -20',
            end: 'bottom',
            onUpdate: self => updateScrollDirection(self.direction),
            onToggle: self => setIsActive(self.isActive),
        });
    }, []);

    return (
        <Wrapper direction={scrollDirection} isActive={isActive}>
            <Content>
                <Navigation>
                    <MediaQuery minDeviceWidth={1024}>
                        <Logo />
                    </MediaQuery>
                    <Navbox open ref={navLinksRef}>
                        <MediaQuery maxDeviceWidth={1024}>
                            <Logo />
                        </MediaQuery>
                        <NavbarLinks
                            isActive={isActive}
                            direction={scrollDirection}
                        />
                    </Navbox>
                </Navigation>
            </Content>
        </Wrapper>
    );
};

export default Navbar;
