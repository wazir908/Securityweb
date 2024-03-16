import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from '../../img/logo/logo.png';
import './footer.css';

const Footer = () => {
  const pages = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Our Team', link: '/team' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact Us', link: '/contact' }
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
              {pages.map((page, index) => (
                <li key={index}><a href={page.link}>{page.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-info-1">
              <li className="contact-item"><MdEmail /><span>Email</span></li>
              <li className="contact-item"><MdPhone /><span>Phone</span></li>
            </ul>
          </div>
          <div className="col-md-3 footer-section">
            <h4>Follow Us</h4>
            <ul className="social-icons-0">
              <li><a href="#" aria-label="Facebook"><FaFacebookF /></a></li>
              <li><a href="#" aria-label="Twitter"><FaTwitter /></a></li>
              <li><a href="#" aria-label="Instagram"><FaInstagram /></a></li>
              <li><a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;