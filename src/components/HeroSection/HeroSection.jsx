import React from 'react';
import './HeroSection.css';

import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()

    const goToProductList = () => {
        navigate('/products')
    }

    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <h1>Tesla: Drive into the Future</h1>
                <p>Discover innovation, performance, and sustainability.</p>
                <button onClick={goToProductList}>Explore Models</button>
            </div>
        </section>
    );
};

export default HeroSection;
