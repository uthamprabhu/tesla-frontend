import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <ul className="footer-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#performance">Performance</a></li>
                    <li><a href="#sustainability">Sustainability</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Tesla World. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
