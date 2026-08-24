import React from 'react';
import Hero from '../pages/home/Hero';
import Projects from '../pages/home/Projects';
import Skills from '../pages/home/Skills';
import About from '../pages/about/About';
import Contacts from '../pages/profile/Contacts';
import Footer from '../pages/footer/Footer';

const AppRoutes = () => (
  <>
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contacts />
    <Footer />
  </>
);

export default AppRoutes;
