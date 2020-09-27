import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Item = styled.li`
    display: flex;
    align-items: center;
    margin-left: 2rem;
    list-style: none;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    a {
        display: flex;
        align-items: center;
        border: 2px solid ${({ theme }) => theme.white};
        padding: 0.7rem;
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: ${({ theme }) => theme.white};
        background: ${({ theme }) => theme.black};
    }
    svg {
        font-size: 1.8rem;
    }
    ::before {
        content: '';
        height: 100%;
        width: 100%;
        background: ${({ theme }) => theme.white};
        position: absolute;
        top: 3px;
        left: -3px;
        z-index: -1;
        transition: all 0.3s ease-in-out;
    }

    :hover {
        transform: translate(-3px, 3px);
        ::before {
            transform: translate(3px, -3px);
        }
    }
`;

const SocialIcon = ({ link, icon }) => {
    return (
        <Item>
            <a target="_blank" rel="noopener noreferrer" href={link}>
                {icon}
            </a>
        </Item>
    );
};

SocialIcon.propTypes = {
    link: propTypes.string.isRequired,
    icon: propTypes.element.isRequired,
};

export default SocialIcon;
