import React, { useState, useEffect, useRef } from 'react';
import Logo from 'components/Logo/Logo';
import Content from 'components/Content/Content';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MediaQuery from 'react-responsive';
import NavbarLinks from './NavbarLink';
import { Wrapper, Navigation, Navbox } from './navbar.styles';

const Navbar = () => {
    const [scrollDirection, setScrollDirection] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const navLinksRef = useRef(null);
    const navigationRef = useRef(null);

    useEffect(() => {
        const navigation = navigationRef.current;
        const navLinks = navLinksRef.current;

        gsap.registerPlugin(ScrollTrigger);

        const updateScrollDirection = dir => {
            setScrollDirection(dir);
        };

        if (navigation && navLinks) {
            gsap.set(navigation, { autoAlpha: 1 });
            gsap.fromTo(
                navLinks.children,
                { autoAlpha: 0, y: '-=20' },
                {
                    duration: 0.7,
                    autoAlpha: 1,
                    y: '0',
                    ease: 'power2.out',
                    stagger: 0.2,
                }
            );
            ScrollTrigger.create({
                start: '100 -20',
                end: 'bottom',
                onUpdate: self => updateScrollDirection(self.direction),
                onToggle: self => setIsActive(self.isActive),
            });
        }
    }, []);

    return (
        <Wrapper
            direction={scrollDirection}
            isActive={isActive}
            ref={navigationRef}
        >
            <Content>
                <Navigation>
                    <MediaQuery minDeviceWidth={787}>
                        <Logo />
                    </MediaQuery>
                    <Navbox open ref={navLinksRef}>
                        <MediaQuery maxDeviceWidth={787}>
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
