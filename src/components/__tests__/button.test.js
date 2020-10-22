import React from 'react';
import { render } from '../../../jest-configs/test-theme-wrapper';

import Button from '../Button/Button';

describe('Displays correct button text', () => {
    const { getByText } = render(<Button>Projects</Button>);
    const button = getByText(/Projects/);
    expect(button).toBeInTheDocument();
});
