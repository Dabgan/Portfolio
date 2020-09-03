import React, { useState } from 'react';
import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';
import Content from 'components/Content/Content';
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
