import React from 'react';
import { ThemeProvider } from 'styled-components';
import propTypes from 'prop-types';

const breakpoints = {
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
        xs: '1.2rem',
        s: '1.8rem',
        m: '2.4rem',
        l: '3.2rem',
        xl: '4.0rem',
        xxl: '4.8rem',
        xxxl: '9rem',
    },
    mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
        acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
        return acc;
    }, {}),
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
    children: propTypes.node.isRequired,
};

export default Theme;
