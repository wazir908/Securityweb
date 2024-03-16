import React, { Component } from 'react';
import './landingpage.css';
import image1 from '../../img/hero/hero-1.jpg';
import image2 from '../../img/hero/hero-3.jpg';


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      images: [image1, image2]
    };
  }

  componentDidMount() {
    this.slideInterval = setInterval(this.nextSlide, 5000); 
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  goToSlide = (index) => {
    this.setState({
      currentImageIndex: index
    });
  };

  render() {
    return (
      <div className="landing-container">
        <div className="landing-carousel">
          <img src={this.state.images[this.state.currentImageIndex]} alt="carousel" />
          <div className="overlay">
            <h1>Enhanced Security, ISS Protects</h1>
            <p>Top-tier security solutions with personalized care from ISS experts</p>
            <div className="buttons-container">
              <button className="primary-btn">Book a Consultant</button>
              <div className="pagination">
                {this.state.images.map((image, index) => (
                  <button
                    key={index}
                    className={index === this.state.currentImageIndex ? "active" : ""}
                    onClick={() => this.goToSlide(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;