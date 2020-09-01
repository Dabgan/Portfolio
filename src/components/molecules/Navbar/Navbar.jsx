import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import NavbarLinks from './NavbarLink';
import { Navigation, Navbox } from './navbar.styles';
import Content from '../../atoms/Content/Content';

const Navbar = () => {
    // const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <Content>
            <Navigation>
                <Logo />
                <Navbox>
                    <NavbarLinks />
                </Navbox>
            </Navigation>
        </Content>
    );
};

export default Navbar;
