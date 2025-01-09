import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Features from './components/Features/Features';
import Performance from './components/Performance/Performance';
import Sustainability from './components/Sustainability/Sustainability';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Performance />
      <Sustainability />
      <Footer />
    </div>
  );
};

export default App;
