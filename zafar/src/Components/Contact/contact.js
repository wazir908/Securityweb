import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Message sent successfully!');
        this.setState({ name: '', email: '', message: '' });
      }, (error) => {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you. Feel free to reach out!</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>wazirmubashir2021@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+1234567890</span>
            </div>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-content">
            <h2>Get in Touch</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={this.handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={this.handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={message} onChange={this.handleChange} required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;