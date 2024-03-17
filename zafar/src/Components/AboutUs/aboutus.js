import React from 'react';
import { AiOutlineSafetyCertificate } from 'react-icons/ai'; 
import { FaTrophy } from 'react-icons/fa'; 
import aboutUsImage from '../../img/hero/hero-4.jpg';
import './aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-image">
        <img src={aboutUsImage} alt="About Us" />
      </div>
      <div className="about-us-content">
        <h2>About Us</h2>
        <h3>10+ Years Of Experience</h3>
        <p>
          Instant Support Solutions is dedicated to providing top-notch security solutions for your peace of mind.
        </p>
        
        <div className="about-us-section row">
          <div className="just-contaner">
            <div className="section-container">
              <AboutUsSection
                icon={<AiOutlineSafetyCertificate className="about-icon" />}
                title="Govt Approved"
                description="Our solutions are certified and approved by government authorities, ensuring the highest level of security standards."
              />
              <AboutUsSection
                icon={<FaTrophy className="about-icon" />}
                title="Award Winning"
                description="Recognized for excellence in security technology, we have been honored with prestigious awards for our innovative solutions."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AboutUsSection = ({ icon, title, description }) => {
  return (
    <div className="govt-approved">
      <div className="section-content">
        <div className="icon-container">
          <div className="icon">
            {icon}
          </div>
        </div>
        <h5 className="mt-2">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutUs;
