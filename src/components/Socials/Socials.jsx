import React, { useEffect, useRef } from 'react';
import Logo from 'components/Logo/Logo';
import styled from 'styled-components';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MediaQuery from 'react-responsive';
import SocialsIcon from './SocialsIcon';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem 3rem;
    margin-top: ${({ theme }) => theme.margin.m};
    ${({ theme }) => theme.mq.lg} {
        padding: 0 0;
    }
`;
const IconsWrapper = styled.ul`
    display: flex;
    align-items: center;
    position: relative;
    ${({ theme }) => theme.mq.lg} {
        flex-flow: column;
        padding: 0 0;
        width: 100%;
    }
`;

const socials = [
    {
        name: 'linkedin',
        desc: 'Message me on LinkedIn!',
        link: 'https://www.linkedin.com/in/gabrieldaniluk/',
        icon: <GrLinkedinOption />,
    },
    {
        name: 'email',
        desc: 'Contact me by email - gabriel.danilukk@gmai.com',
        link: 'mailto:gabriel.danilukk@gmail.com',
        icon: <MdEmail />,
    },
    {
        name: 'github',
        desc: 'Check out all of my projects and take a look at my code ',
        link: 'https://github.com/Dabgan',
        icon: <FiGithub />,
    },
];

const Socials = () => {
    const socialRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const social = socialRef.current.children;
        if (social) {
            gsap.from(social, {
                duration: 1,
                autoAlpha: 0,
                y: '+=50',
                stagger: 0.3,
                scrollTrigger: {
                    trigger: social,
                    start: 'top bottom-=20px',
                },
            });
        }
    }, []);

    return (
        <Wrapper>
            <MediaQuery maxDeviceWidth={786}>
                <Logo small />
            </MediaQuery>
            <IconsWrapper ref={socialRef}>
                {socials.map(item => (
                    <SocialsIcon data={item} key={item.name} />
                ))}
            </IconsWrapper>
        </Wrapper>
    );
};

export default Socials;
