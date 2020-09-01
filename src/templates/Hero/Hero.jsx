import React from 'react';
import { HeroTitle, HeroSubtitle, Wrapper } from './hero.styles';
import Navbar from '../../components/molecules/Navbar/Navbar';
import Content from '../../components/atoms/Content/Content';
import Button from '../../components/atoms/Button/Button';

const Hero = () => {
    return (
        <Content>
            <Navbar />
            <Wrapper>
                <HeroTitle>HELLO</HeroTitle>
                <HeroSubtitle>
                    I’m <span>Gabriel</span>. I create websites and web
                    applications.
                    <span role="img" aria-label="emoji">
                        👋
                    </span>
                </HeroSubtitle>
                <Button marginTop="40px">Projects</Button>
                {/* <Button marginTop="40px">asfdewrfewfsfvfd</Button> */}
                {/* <Button marginTop="40px">1</Button> */}
            </Wrapper>
        </Content>
    );
};

export default Hero;
