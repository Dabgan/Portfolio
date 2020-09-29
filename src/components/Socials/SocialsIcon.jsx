import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import MediaQuery from 'react-responsive';

const Item = styled.li`
    list-style: none;
    margin-left: 2rem;
    ${({ theme }) => theme.mq.lg} {
        display: flex;
        width: 100%;
        margin: 0 0 5rem 0;
    }
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid ${({ theme }) => theme.white};
        padding: 0.7rem;
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: ${({ theme }) => theme.white};
        background: ${({ theme }) => theme.black};
        ${({ theme }) => theme.mq.lg} {
            height: 64px;
            width: 64px;
        }
    }
    svg {
        font-size: 1.8rem;
        ${({ theme }) => theme.mq.lg} {
        font-size: 3.5rem;
        }
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
        ${({ theme }) => theme.mq.lg} {
            top: 5px;
            left: -5px;
        }
    }

    :hover {
        transform: translate(-3px, 3px);
        ${({ theme }) => theme.mq.lg} {
            transform: translate(-5px, 5px);
        }
        ::before {
            transform: translate(3px, -3px);
            ${({ theme }) => theme.mq.lg} {
                transform: translate(5px, -5px);
        }
        }
    }

    ${({ theme }) => theme.mq.lg} {
        /* background: ${({ theme }) => theme.primary}; */
    }
`;

const ItemDesc = styled.div`
    ${({ theme }) => theme.mq.lg} {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        padding-left: 3rem;
    }
    p {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

const Name = styled.h4`
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.m};
    text-transform: capitalize;
`;

const SocialsIcon = ({ data: { link, icon, name, desc } }) => {
    return (
        <Item>
            <Icon>
                <a target="_blank" rel="noopener noreferrer" href={link}>
                    {icon}
                </a>
            </Icon>
            <MediaQuery minDeviceWidth={1024}>
                <ItemDesc>
                    <Name>{name}</Name>
                    <p>{desc}</p>
                </ItemDesc>
            </MediaQuery>
        </Item>
    );
};

SocialsIcon.propTypes = {
    data: propTypes.shape({
        link: propTypes.string,
        icon: propTypes.element,
        name: propTypes.string,
        desc: propTypes.string,
    }).isRequired,
};

export default SocialsIcon;
