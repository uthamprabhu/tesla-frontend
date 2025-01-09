import React, { useState } from 'react';
import './Navbar.css';
import teslaLogo from '../../assets/tesla-logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={teslaLogo} alt="Tesla Logo" className="tesla-logo" />
            </div>
            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#performance">Performance</a></li>
                    <li><a href="#sustainability">Sustainability</a></li>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    );
};

export default Navbar;
