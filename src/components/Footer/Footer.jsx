import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 Tesla, Inc. All Rights Reserved.</p>
                <ul className="footer-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#performance">Performance</a></li>
                    <li><a href="#sustainability">Sustainability</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
