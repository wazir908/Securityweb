import React from 'react';
import './feature.css';

const Feature = ({ features }) => {
    return (
        <div className="feature-container">
            {features.map((feature, index) => (
                <div key={index} className="feature-item">
                    {feature.icon}
                    <div>
                        <h5 className="feature-title">{feature.title}</h5>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Feature;