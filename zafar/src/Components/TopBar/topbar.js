import React, { useState } from 'react';
import './topbar.css';
import { FaShieldAlt, FaPhone, FaMapMarkerAlt, FaEnvelope, FaAngleDown } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleClickOutside = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  }

  return (
    <div className="top-bar">
      <div className="left-content">
        <div className="top-bar-item">
          <div className="icon-background">
            <FaShieldAlt /> 
          </div>
          <div className="line"></div>
        </div>
        <div className="top-bar-item">
          <div className="icon-background">
            <FaMapMarkerAlt />
          </div>
          <div className="line"></div>
        </div>
        <div className="top-bar-item">
          <div className="icon-background">
            <FaPhone />
          </div>
          <div className="line"></div>
        </div>
        <div className="top-bar-item">
          <div className="icon-background">
            <FaEnvelope />
          </div>
          <div className="line"></div>
        </div>
        <button className="get-quote-button">Get a Quote</button> 
      </div>
      <div className="right-content">
        <Link to="/policies">Our Policies</Link>
        <div className="dropdown" onClick={toggleDropdown}>
        <button className="dropbtn">
    More <span className="dropbtn-icon"><FaAngleDown /></span>
</button>
   
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/refund-policy">Refund Policy</Link>
            </div>
          )}
        </div>
        <Link to="/our-mission">Our Mission</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
}

export default TopBar;