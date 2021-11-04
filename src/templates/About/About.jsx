import React from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import TemplateSubtitle from 'components/TemplateSubtitle/TemplateSubtitle';
import Wave from 'components/Wave/Wave';
import { Wrapper, InnerWrapper, Description } from './about.styles';

const About = () => {
    return (
        <>
            <Wave top />
            <Wrapper id="about">
                <Content>
                    <TemplateHeader>About</TemplateHeader>
                    <TemplateSubtitle>
                        just me talking about myself
                    </TemplateSubtitle>
                    <InnerWrapper>
                        <Description>
                            <p>
                                My name is Gabriel and I have always been
                                interested in technology. When it comes to
                                programming, I got intriqued by it over two
                                years ago, when I wanted to build my own
                                website. I started learning about front-end
                                technologies and since then, I have been
                                systematically developing my skills.
                            </p>
                            <p>
                                I really enjoy creating websites and web
                                applications using React
                                <span role="img" aria-label="cat-icon">
                                    ❤️
                                </span>
                                , which is my favorite technology so far.
                                Besides that, I like challenges and I like
                                learning new things - in every project that I
                                create, apart from technologies that I already
                                know, I always try to discover & learn something
                                new. I am currently learning about Next.js and
                                expanding my React, Typescript and tests
                                knowledge.
                            </p>
                            <p>
                                My goal is to further improve my technical
                                skills and develop my passion in the IT
                                industry.
                            </p>
                        </Description>
                    </InnerWrapper>
                </Content>
            </Wrapper>
            <Wave />
        </>
    );
};

export default About;
