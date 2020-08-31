import React from 'react';
import GlobalStyle from 'assets/styles/GlobalStyle';
import Theme from 'assets/styles/theme';
import Hero from 'templates/Hero/Hero';

const IndexPage = () => (
    <Theme>
        <Hero />
        <GlobalStyle />
    </Theme>
);

export default IndexPage;
