import React from 'react';
import { render } from '@testing-library/react';
import Theme from '../src/assets/styles/theme';
import GlobalStyle from '../src/assets/styles/GlobalStyle';

const AllTheProviders = ({ children }) => {
    return (
        <Theme>
            <GlobalStyle />
            {children}
        </Theme>
    );
};

const customRender = (ui, options) =>
    render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
