import React from 'react';
import './icons.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCamera, faShieldAlt, faUserShield, faWifi, faFileSignature, faCreditCard, faHandshake, faUnlockAlt, faLock } from '@fortawesome/free-solid-svg-icons'; 

const Icons = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1 
                }
            }
        ]
    };

    return (
        <div className="icons-container">
            <h2>We Promise For Safe </h2>
            <Slider {...settings}>
                <div className="icon">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Secure Transportation</span>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faCamera} />
                    <span>Surveillance Cameras</span>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span>Guarded Protocols</span>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faUserShield} />
                    <span>Security Guards</span>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faFileSignature} />
                    <span>Legal Compliance</span>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faHandshake} />
                    <span>Trustworthy Services</span>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faUnlockAlt} />
                    <span>Access Control</span>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faLock} />
                    <span>Physical Security</span>
                </div>
            </Slider>
        </div>
    );
};

export default Icons;