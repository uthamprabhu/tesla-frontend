import React from 'react';
import './Sustainability.css';

const Sustainability = () => {
    return (
        <section className="sustainability" id="sustainability">
            <h2>Driving Sustainability</h2>
            <p className="sustainability-intro">
                At Tesla, we are committed to reducing carbon footprints while delivering superior performance.
            </p>
            <div className="sustainability-highlights">
                <div className="highlight">
                    <h3>Zero Emissions</h3>
                    <p>Our vehicles produce no tailpipe emissions, ensuring cleaner air for everyone.</p>
                </div>
                <div className="highlight">
                    <h3>Recyclable Batteries</h3>
                    <p>Innovative battery recycling programs to minimize waste.</p>
                </div>
                <div className="highlight">
                    <h3>Solar Integration</h3>
                    <p>Power your car and home with sustainable energy solutions.</p>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
