import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.fontSize.s};
    list-style: none;
    padding: 1rem;
    margin: 0.6rem 0;
    height: 5rem;

    ${({ theme }) => theme.mq.md} {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
    ${({ theme }) => theme.mq.lg} {
        font-size: ${({ theme }) => theme.fontSize.ml};
    }
`;

const ItemMarker = styled.span`
    display: inline-block;
    width: 15px;
    height: 15px;
    background: ${({ theme }) => theme.tertiary};
    border-radius: 50%;
    flex: 0 0 auto;
    margin-right: 1rem;
    ${({ theme }) => theme.mq.lg} {
        width: ${({ theme }) => theme.fontSize.m};
        height: ${({ theme }) => theme.fontSize.m};
        margin-right: 2rem;
    }
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
