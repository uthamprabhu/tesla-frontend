import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Tesla</div>
            <ul className="navbar-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#performance">Performance</a></li>
                <li><a href="#sustainability">Sustainability</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
