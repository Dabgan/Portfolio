import React from 'react';
import GlobalStyle from 'assets/styles/GlobalStyle';
import Theme from 'assets/styles/theme';
import Hero from 'templates/Hero/Hero';
import Technologies from '../templates/Technologies/Technologies';
import Projects from '../templates/Projects/Projects';
import About from '../templates/About/About';
import Contact from '../templates/Contact/Contact';

const IndexPage = () => (
    <Theme>
        <Hero />
        <main>
            <Technologies />
            <Projects />
            <About />
            <Contact />
            <GlobalStyle />
        </main>
    </Theme>
);

export default IndexPage;
