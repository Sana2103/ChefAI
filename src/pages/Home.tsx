import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import AboutUs from '../components/home/AboutUs';
import HowItWorks from '../components/home/HowItWorks';
import Features from '../components/home/Features';
import Pricing from '../components/home/Pricing';
import CTA from '../components/home/CTA';
import Blog from '../components/home/Blog';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-orange-500">
        <Navbar />
      </div>
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Features />
      <Pricing />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;