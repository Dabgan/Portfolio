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

const theme = {
    primary: '#fff',
    secondary: '#000000',
    tertiary: '#4d648d',
    fourth: '#1E1F26',
    white: '#eeeeee',
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
        xs: '',
        s: '',
        m: '2.4rem',
        l: '3.2rem',
        xl: '4rem',
        xxl: '',
        xxxl: '',
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
