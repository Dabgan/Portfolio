import React from 'react';
import Navbar from 'components/molecules/Navbar/Navbar';
import Content from 'components/atoms/Content/Content';
import Button from 'components/atoms/Button/Button';
import { HeroTitle, HeroSubtitle, Wrapper } from './hero.styles';

const Hero = () => {
    return (
        <>
            <Navbar />
            <Content>
                <Wrapper>
                    <HeroTitle>HELLO</HeroTitle>
                    <HeroSubtitle>
                        I’m <span>Gabriel</span>. I create websites and web
                        applications.
                        <span role="img" aria-label="emoji">
                            👋
                        </span>
                    </HeroSubtitle>
                    <Button marginTop="4rem">Projects</Button>
                </Wrapper>
            </Content>
        </>
    );
};

export default Hero;
