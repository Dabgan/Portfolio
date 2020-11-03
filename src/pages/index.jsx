import React from 'react';
import GlobalStyle from 'assets/styles/GlobalStyle';
import Theme from 'assets/styles/theme';
import Hero from 'templates/Hero/Hero';
import Technologies from '../templates/Technologies/Technologies';
import Projects from '../templates/Projects/Projects';
import About from '../templates/About/About';
import Contact from '../templates/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SEO from '../components/SEO/SEO';

const IndexPage = () => (
    <Theme>
        <SEO />
        <Navbar />
        <Hero />
        <main>
            <Technologies />
            <Projects />
            <About />
            <Contact />
            <Footer />
            <GlobalStyle />
        </main>
    </Theme>
);

export default IndexPage;
