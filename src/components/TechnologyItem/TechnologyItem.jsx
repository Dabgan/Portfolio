import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.fontSize.s};
    list-style: none;
    padding: 1rem;
    margin: 0.6rem 0;
    height: 5rem;
`;

const ItemMarker = styled.span`
    display: inline-block;
    width: 15px;
    height: 15px;
    /* width: ${({ theme }) => theme.fontSize.s}; */
    /* height: ${({ theme }) => theme.fontSize.s}; */
    background: ${({ theme }) => theme.tertiary};
    border-radius: 50%;
    flex: 0 0 auto;
    margin-right: 1rem;
`;

const TechnologyItem = ({ children }) => {
    return (
        <Item>
            <ItemMarker />
            {children}
        </Item>
    );
};

TechnologyItem.propTypes = {
    children: propTypes.string.isRequired,
};

export default TechnologyItem;
