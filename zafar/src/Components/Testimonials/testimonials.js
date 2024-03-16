import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import profile1 from '../../img/testimonials/profile.jpg';
import profile2 from '../../img/testimonials/profile.jpg';
import './testimonials.css'; 

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <Slider {...settings}>
        <div className="testimonial">
          <div className="profile">
            <img src={profile1} alt="Profile" />
            <span className="username">John Doe</span>
          </div>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium felis quis metus tristique, quis mollis magna lacinia."</p>
          <div className="rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
          </div>
        </div>
        <div className="testimonial">
          <div className="profile">
            <img src={profile2} alt="Profile" />
            <span className="username">Jane Smith</span>
          </div>
          <p>"Vestibulum in lectus nec metus finibus fermentum id non velit. In hac habitasse platea dictumst. Suspendisse potenti."</p>
          <div className="rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;