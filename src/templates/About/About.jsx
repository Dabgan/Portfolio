import React from 'react';
import Content from 'components/Content/Content';
import TemplateHeader from 'components/Template Header/TemplateHeader';
import TemplateSubtitle from 'components/TemplateSubtitle/TemplateSubtitle';
import Wave from 'components/Wave/Wave';
import { Wrapper, InnerWrapper, Description } from './about.styles';

const About = () => {

    const getYearsFrom2019 = () => {
        const currentYear = new Date().getFullYear();
        const yearFrom2019 = currentYear - 2019;
        return `${yearFrom2019} `;
    };

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
                                Hi there, my name is <strong>Gabriel</strong> and I am a passionate
                                frontend developer with over {getYearsFrom2019()} years of experience
                                in web technologies. I have always been fascinated
                                by technology and was drawn to programming when I
                                wanted to build my own website. Since then, I have
                                been exploring the world of front-end development,
                                and I'm always looking for new challenges to expand my skills.
                            </p>
                            <p>
                                My favorite technology so far is React, 
                                <span role="img" aria-label="cat-icon">
                                    ❤️
                                </span>
                                and I love creating websites and web applications with it.
                                However, I don't stop there - I am always eager to learn
                                new things, which is why I am currently expanding my knowledge
                                in Next.js and TypeScript.
                            </p>
                            <p>
                                As an experienced developer, I have a strong passion for continuous
                                learning and always strive to stay up-to-date with the latest technologies.
                                I am skilled at solving complex problems and effectively communicating
                                with cross-functional teams to deliver high-quality web applications.
                            </p>

                            <p>
                                My goal is to further improve my technical skills and develop my passion
                                in the IT industry. I'm excited to be part of the constantly evolving
                                world of technology and I can't wait to see what new challenges and opportunities lie ahead.
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
