import React, { useState } from 'react';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import Logo from 'components/atoms/Logo/Logo';
import Content from 'components/atoms/Content/Content';
import NavbarLinks from './NavbarLink';
import { Navigation, Toggle, Navbox } from './navbar.styles';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
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
                    <Navbox open>
                        <NavbarLinks />
                    </Navbox>
                )}
            </Navigation>
        </Content>
    );
};

export default Navbar;
