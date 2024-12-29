import React from 'react';
import './Home.css';
import MainImg from './MainImg';
import NavigationBar from './Navbar';
import Hero from './Hero';
import About from './About';
import FeatureCards from './FeatureCards';
import Contact from './Contact';
import Footer from './Footer';
import ScrollTop from './ScrollTop';

function Home() {
  return (
    <div>
      <MainImg />
      <NavigationBar />
      <Hero />
      <About />
      <FeatureCards />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Home;
