import React from 'react'
import './Home.css'

import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import Features from '../Features/Features';
import Performance from '../Performance/Performance';
import Sustainability from '../Sustainability/Sustainability';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Features />
            <Performance />
            <Sustainability />
            <Footer />
        </div>
    )
}

export default Home