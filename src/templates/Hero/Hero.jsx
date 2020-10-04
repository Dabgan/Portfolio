import React from 'react';
import Content from 'components/Content/Content';
import Button from 'components/Button/Button';
import { Link } from 'react-scroll';

import { HeroTitle, HeroSubtitle, Wrapper, InnerWrapper } from './hero.styles';

const Hero = () => {
    return (
        <Wrapper>
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
                    <Button marginTop="4rem">
                        <Link to="projects" smooth offset={-90}>
                            Projects
                        </Link>
                    </Button>
                </InnerWrapper>
            </Content>
        </Wrapper>
    );
};

export default Hero;
