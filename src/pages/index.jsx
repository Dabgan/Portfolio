import React from 'react';
import GlobalStyle from 'assets/styles/GlobalStyle';
import Theme from 'assets/styles/theme';
import Hero from 'templates/Hero/Hero';
import Technologies from '../templates/Technologies/Technologies';
import Projects from '../templates/Projects/Projects';

const IndexPage = () => (
    <Theme>
        <Hero />
        <main>
            <Technologies />
            <Projects />
            <GlobalStyle />
        </main>
    </Theme>
);

export default IndexPage;
