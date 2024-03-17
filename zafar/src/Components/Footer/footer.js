import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from '../../img/logo/logo.png';
import './footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contact' }
  ];

  const services = [
    { name: 'Service 1', link: '/service1' },
    { name: 'Service 2', link: '/service2' },
    { name: 'Service 3', link: '/service3' }
  ];

  const policies = [
    { name: 'Privacy Policy', link: '/privacy' },
    { name: 'Terms & Conditions', link: '/terms' },
    { name: 'Refund Policy', link: '/refund' }
  ];

  return (
    <footer className="footer">
      <div className="container-10">
        <div className="row">
          <div className="col-md-3 footer-section">
            <img src={logo} alt="Logo" className="logo" />
            <p className="mission">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et finibus nulla.</p>
          </div>
          <div className="col-md-3 footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((page, index) => (
                <li key={index}><a href={page.link}>{page.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              {services.map((page, index) => (
                <li key={index}><a href={page.link}>{page.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 footer-section">
            <h4>Our Policies</h4>
            <ul className="footer-links">
              {policies.map((page, index) => (
                <li key={index}><a href={page.link}>{page.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <ul className="social-icons-0">
          <li><a href="#" aria-label="Facebook"><FaFacebookF /></a></li>
          <li><a href="#" aria-label="Twitter"><FaTwitter /></a></li>
          <li><a href="#" aria-label="Instagram"><FaInstagram /></a></li>
          <li><a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
        </ul>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-credit">
        <p>© {new Date().getFullYear()} Instant Support Services. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;