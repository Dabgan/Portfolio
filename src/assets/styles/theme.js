import React from 'react';
import { ThemeProvider } from 'styled-components';
import propTypes from 'prop-types';

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
        m: '2.4rem',
        l: '4rem',
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
    children: propTypes.node.isRequired,
};

export default Theme;
