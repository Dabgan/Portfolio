import React from 'react';
import MediaQuery from 'react-responsive';
import propTypes from 'prop-types';

import { Item, Icon, ItemDesc, Name } from './socialsIcon.styles';

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
