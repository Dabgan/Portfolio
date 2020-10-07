import React from 'react';
import { ThemeProvider } from 'styled-components';
import propTypes from 'prop-types';

export const breakpoints = {
    xs: 320,
    s: 375,
    md: 768,
    lg: 1024,
    xl: 1440,
    xxl: 2560,
};

export const theme = {
    primary: '#1E1F26',
    secondary: '#283655',
    tertiary: '#4D648D',
    fourth: '#D0E1F9',
    white: '#ffffff',
    black: '#000000',
    gray: '#ebebeb',
    gray100: '#b6b6b6',
    valid: '#47c41d',
    error: '#e60e0e',
    lightGray: '#f5f5f5',
    fonts: {
        regular: '400',
        bold: '600',
        family: {
            main: `'Roboto', cursive`,
        },
        color: {
            primary: '#1E1F26',
            secondary: '#ffffff',
        },
    },
    fontSize: {
        xxs: '1.2rem',
        xs: '1.5rem',
        s: '1.8rem',
        m: '2.4rem',
        ml: '2.7rem',
        l: '3.2rem',
        xl: '4.0rem',
        xxl: '4.8rem',
        xxxl: '9rem',
    },
    mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
        acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
        return acc;
    }, {}),
    margin: {
        xs: '1rem',
        s: '3rem',
        m: '5rem',
        l: '7rem',
        xl: '9rem',
    },
    padding: {
        xs: '0.6rem',
        s: '1.5rem',
        m: '2.5rem',
        l: '3.5rem',
        xl: '18rem',
    },
    borderRadius: '8px',
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
    children: propTypes.node.isRequired,
};

export default Theme;
