import React from 'react';
import HeroText from './hero.styles';
import Navbar from '../../components/molecules/Navbar/Navbar';

const Hero = () => {
    return (
        <div>
            <Navbar />
            <HeroText>HELLO</HeroText>
        </div>
    );
};

export default Hero;
