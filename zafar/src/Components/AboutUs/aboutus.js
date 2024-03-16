import React from 'react';
import { AiOutlineSafetyCertificate } from 'react-icons/ai'; 
import { FaTrophy } from 'react-icons/fa'; 
import aboutUsImage from '../../img/hero/hero-1.jpg';
import './aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-image">
        <img src={aboutUsImage} alt="About Us" />
      </div>
      <div className="about-us-content">
        <h2>About Us</h2>
        <h>10+ Years Of Experience</h>
        <p>
          Instant Support Solutions is dedicated to providing top-notch security solutions for your peace of mind.
        </p>
        
        <div className="about-us-section row">

          <div className="col-sm-12">
            <div className="section-container">
         
              <div className="govt-approved">
                <div className="section-content">
                  <div className="icon-container">
                    <div className="icon">
                      <AiOutlineSafetyCertificate className="display-3 text-primary" />
                    </div>
                  </div>
                  <h5 className="mt-2">Govt Approved</h5>
                  <p>
                    Our solutions are certified and approved by government authorities, ensuring the highest level of security standards.
                  </p>
                </div>
              </div>
   
              <div className="award-winning">
                <div className="section-content">
                  <div className="icon-container">
                    <div className="icon">
                      <FaTrophy className="display-3 text-primary" />
                    </div>
                  </div>
                  <h5 className="mt-2">Award Winning</h5>
                  <p>
                    Recognized for excellence in security technology, we have been honored with prestigious awards for our innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;