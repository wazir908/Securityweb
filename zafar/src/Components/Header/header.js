import React, { useState, useEffect, useRef } from 'react';
import './header.css'; 
import logo from '../../img/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { FaHome, FaUsers, FaBriefcase, FaPhone, FaUserTie } from 'react-icons/fa';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [activeTab, setActiveTab] = useState(null);
    const mobileTabRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768); 
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileTabRef.current && !mobileTabRef.current.contains(event.target)) {
                setActiveTab(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName === activeTab ? null : tabName);
    };
  


    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="pages">
  <ul className={`${isMobileView ? 'mobile-nav' : ''}`}>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li className="dropdown">
  <div className="services-dropdown">
    <a href="/services">Services <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" /></a>
    <div className="dropdown-content">
      <div className="row">
        <a href="/services/front-of-house-security">Front of House Security</a>
        <a href="/services/vacant-property">Vacant Property Security</a>
        <a href="/services/espo-framework">ESPO Framework</a>
        <a href="/services/retail-security">Retail Security</a>
        <a href="/services/kry-holding">KRY Holding</a>
      </div>
      <div className="row">
        <a href="/services/dog-handler-security">Dog Handler Security</a>
        <a href="/services/manned-guarding">Manned Guarding</a>
        <a href="/services/gate-house-duties">Gate House Duties</a>
        <a href="/services/construction-security">Construction Security</a>
        <a href="/services/concierge-services">Concierge Services</a>
      </div>
      <div className="row">
        <a href="/services/traffic-management">Traffic Management</a>
        <a href="/services/alarm-response">Alarm Response</a>
        <a href="/services/cctv-monitoring">CCTV Monitoring</a>
        {/* Add more services links here */}
      </div>
    </div>
  </div>
</li>
    <li><a href="/products">Products</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
            <div className="social-icons">
  <a href="tel:+923469657528"><FaPhone /> <span className="phone-number">+923469657528</span></a>
</div>
{isMobileView && (
    <nav className="mobile-tab-bar" role="navigation" ref={mobileTabRef}>
        <ul>
            <li>
                <a href="#" className={`icon-link ${activeTab === 'Career' ? 'active' : ''}`} onClick={() => handleTabClick('Career')}>
                    <FaUserTie />
                    <span>Career</span>
                </a>
            </li>
            <li>
                <a href="#" className={`icon-link ${activeTab === 'Contact' ? 'active' : ''}`} onClick={() => handleTabClick('Contact')}>
                    <FaPhone />
                    <span>Contact</span>
                </a>
            </li>
            <li className="center-tab">
                <a href="#" className={`icon-link ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => handleTabClick('Home')}>
                    <FaHome />
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="#" className={`icon-link ${activeTab === 'Services' ? 'active' : ''}`} onClick={() => handleTabClick('Services')}>
                    <FaUsers />
                    <span>Services</span>
                </a>
            </li>
            <li>
                <a href="#" className={`icon-link ${activeTab === 'About' ? 'active' : ''}`} onClick={() => handleTabClick('About')}>
                    <FaBriefcase />
                    <span>About</span>
                </a>
            </li>
        </ul>
    </nav>
)}
        </header>
    );
}

export default Header;