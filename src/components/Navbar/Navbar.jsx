import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';
import teslaLogo from '../../assets/tesla-logo.svg';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > lastScrollPos && currentScrollPos > 50) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollPos(currentScrollPos);
    }, [lastScrollPos]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
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
