import React from 'react';
import { render } from '../../../jest-configs/test-utils';
import { theme } from '../../assets/styles/theme';

import Button from './Button';

describe('Button ', () => {
    it('correctly renders button to the page', () => {
        const { getByText } = render(<Button>Projects</Button>);
        const button = getByText(/Projects/);
        expect(button).toBeInTheDocument();
    });
    it('applies correct colors to the button', () => {
        const { getByText } = render(<Button secondary>Projects</Button>);

        const button = getByText('Projects');
        expect(button).toHaveStyle(`background-color: ${theme.black}`);
    });
});
