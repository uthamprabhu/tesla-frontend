import React, { useState } from 'react';
import './BuildAndPrice.css';

const BuildAndPrice = () => {
    const [color, setColor] = useState('Stealth Grey');
    const [wheel, setWheel] = useState('18" Photon Wheels');
    const [interior, setInterior] = useState('Black Interior');
    const [price, setPrice] = useState(50000);  // base price

    const handleCustomization = (type, value, additionalCost) => {
        if (type === 'color') {
            setColor(value);
            setPrice(prevPrice => prevPrice + additionalCost);
        }
        if (type === 'wheel') {
            setWheel(value);
            setPrice(prevPrice => prevPrice + additionalCost);
        }
        if (type === 'interior') {
            setInterior(value);
            setPrice(prevPrice => prevPrice + additionalCost);
        }
    };

    const priceAlert = () => {
        alert(`The total is $${price} and is proceeding to payment gateway`)
    }

    return (
        <div className="build-and-price-container">
            <header className="build-and-price-header">
                <h1>Customize Your Car</h1>
                <p>Choose your options and see the price!</p>
            </header>
            <main className="customizations-options">
                <div className="customizations-section">
                    <h3>Color</h3>
                    <div className="options">
                        <button className={color === 'Stealth Grey' ? 'active' : ''} onClick={() => handleCustomization('color', 'Stealth Grey', 0)}>Stealth Grey</button>
                        <button className={color === 'Pearl White Multi-Coat' ? 'active' : ''} onClick={() => handleCustomization('color', 'Pearl White Multi-Coat', 5000)}>Pearl White Multi-Coat</button>
                        <button className={color === 'Deep Blue Metallic' ? 'active' : ''} onClick={() => handleCustomization('color', 'Deep Blue Metallic', 4000)}>Deep Blue Metallic</button>
                        <button className={color === 'Solid Black' ? 'active' : ''} onClick={() => handleCustomization('color', 'Solid Black', 3000)}>Solid Black</button>
                        <button className={color === 'Ultra Red' ? 'active' : ''} onClick={() => handleCustomization('color', 'Ultra Red', 6000)}>Ultra Red</button>
                        <button className={color === 'Quicksilver' ? 'active' : ''} onClick={() => handleCustomization('color', 'Quicksilver', 5500)}>Quicksilver</button>
                    </div>
                </div>

                <div className="customizations-section">
                    <h3>Wheels</h3>
                    <div className="options">
                        <button className={wheel === '18" Photon Wheels' ? 'active' : ''} onClick={() => handleCustomization('wheel', '18" Photon Wheels', 0)}>18" Photon Wheels</button>
                        <button className={wheel === '19" Nova Wheels' ? 'active' : ''} onClick={() => handleCustomization('wheel', '19" Nova Wheels', 2000)}>19" Nova Wheels</button>
                    </div>
                </div>

                <div className="customizations-section">
                    <h3>Interior</h3>
                    <div className="options">
                        <button className={interior === 'Black Interior' ? 'active' : ''} onClick={() => handleCustomization('interior', 'Black Interior', 0)}>Black Interior</button>
                        <button className={interior === 'White Interior' ? 'active' : ''} onClick={() => handleCustomization('interior', 'White Interior', 2500)}>White Interior</button>
                    </div>
                </div>

                <div className="total-price">
                    <h3>Total Price</h3>
                    <p>${price}</p>
                </div>
            </main>

            <footer className="action-buttons">
                <button className="btn contact-sales">Contact Sales</button>
                <button onClick={priceAlert} className="btn proceed-payment">Proceed to Payment</button>
            </footer>
        </div>
    );
};

export default BuildAndPrice;
