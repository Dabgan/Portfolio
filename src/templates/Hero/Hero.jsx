import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import Content from 'components/Content/Content';
import Button from 'components/Button/Button';
import useScrollToSection from '../../hooks/useScrollToSection/useScrollToSection';

import { HeroTitle, HeroSubtitle, Wrapper, InnerWrapper } from './hero.styles';

const Hero = () => {
    return (
        <Wrapper>
            {/* <Navbar /> */}
            <Content>
                <InnerWrapper>
                    <HeroTitle>HELLO</HeroTitle>
                    <HeroSubtitle>
                        I’m <span>Gabriel</span>. I create websites and web
                        applications.
                        <span role="img" aria-label="emoji">
                            👋
                        </span>
                    </HeroSubtitle>
                    <Button
                        marginTop="4rem"
                        onClick={() => useScrollToSection('#projects')}
                    >
                        Projects
                    </Button>
                </InnerWrapper>
            </Content>
        </Wrapper>
    );
};

export default Hero;
