import React from 'react';
import Logo from 'components/Logo/Logo';
import styled from 'styled-components';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import SocialIcon from './SocialIcon';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem 3rem;
    margin-top: ${({ theme }) => theme.margin.m};
`;
const IconsWrapper = styled.ul`
    display: flex;
    align-items: center;
    position: relative;
`;

const socials = [
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/gabrieldaniluk/',
        icon: <GrLinkedinOption />,
    },
    {
        name: 'email',
        link: 'gabriel.danilukk@gmail.com',
        icon: <MdEmail />,
    },
    { name: 'github', link: 'https://github.com/Dabgan', icon: <FiGithub /> },
];

const Socials = () => {
    return (
        <Wrapper>
            <Logo small />
            <IconsWrapper>
                {socials.map(item => (
                    <SocialIcon
                        icon={item.icon}
                        link={item.link}
                        key={item.name}
                    />
                ))}
            </IconsWrapper>
        </Wrapper>
    );
};

export default Socials;
