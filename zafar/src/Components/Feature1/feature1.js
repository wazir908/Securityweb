import React from 'react';
import { FaCheckCircle, FaMoneyBillAlt, FaBuilding, FaPhone, FaLock, FaShieldAlt } from 'react-icons/fa';
import featureImage from '../../img/hero/hero-2.jpg';
import './feature.css';

const Feature1 = ({ image }) => {
  const iconsData = [
    { icon: <FaCheckCircle />, text: 'Quality Service' },
    { icon: <FaMoneyBillAlt />, text: 'Affordable Pricing' },
    { icon: <FaBuilding />, text: 'Reliable Team' },
    { icon: <FaPhone />, text: '24/7 Support' },
    { icon: <FaLock />, text: 'Security Solutions' },
    { icon: <FaShieldAlt />, text: 'Safety Guarantee' },
  ];

  return (
    <div className="feature1-container">
      <div className="image-container">
        <h2 className="feature-heading">Why Choose Us ?</h2>
        <p className="feature-description-01">More Than 100+ Peoples Served</p>
        <img src={featureImage} alt="Feature" />
      </div>
      <div className="sections-container">
        <div className="section">
          {iconsData.slice(0, iconsData.length / 2).map((data, index) => (
            <div key={index} className="icon">
              {data.icon}
              <p>{data.text}</p>
            </div>
          ))}
        </div>
        <div className="section">
          {iconsData.slice(iconsData.length / 2).map((data, index) => (
            <div key={index} className="icon">
              {data.icon}
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature1;