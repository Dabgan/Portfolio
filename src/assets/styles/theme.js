import React from 'react';
import { ThemeProvider } from 'styled-components';
import propTypes from 'prop-types';

const theme = {
    primary: '#333333',
    secondary: '#000000',
    fonts: {
        main: `'Roboto', cursive`,
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
    children: propTypes.node.isRequired,
};

export default Theme;
