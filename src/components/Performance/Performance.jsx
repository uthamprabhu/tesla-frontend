import React from 'react';
import './Performance.css';

const Performance = () => {
    return (
        <section className="performance" id="performance">
            <h2>Unmatched Performance</h2>
            <div className="performance-details">
                <div className="performance-card">
                    <h3>0-60 mph in 2.1s</h3>
                    <p>Experience thrilling acceleration with Tesla's electric motors.</p>
                </div>
                <div className="performance-card">
                    <h3>Top Speed 200 mph</h3>
                    <p>High-speed precision for an unmatched driving experience.</p>
                </div>
                <div className="performance-card">
                    <h3>All-Wheel Drive</h3>
                    <p>Stay in control with dual-motor AWD for any terrain.</p>
                </div>
            </div>
        </section>
    );
};

export default Performance;
