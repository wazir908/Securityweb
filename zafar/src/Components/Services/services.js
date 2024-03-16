import React from 'react';
import { AiOutlineBank, AiOutlineHome, AiOutlineShop, AiOutlineCar, AiOutlineUser } from 'react-icons/ai';
import './services.css'; 


import service1Img from '../../img/services/service-1.jpg';
import service2Img from '../../img/services/service-2.jpg';
import service3Img from '../../img/services/service-3.jpg';
import service4Img from '../../img/services/service-4.jpg';
import service5Img from '../../img/services/service-5.jpg';
import service6Img from '../../img/services/service-6.jpg';

const Services = () => {
  return (
    <div className="services-container-1">
      <div className="services-heading text-center mb-5">
        <h5 className="services-main-heading">Our Services</h5>
        <h1 className="services-title">Premium Security Services</h1>
      </div>
      <div className="services-row">
        <ServiceCard
          icon={AiOutlineBank}
          title="Office Security"
          imgSrc={service1Img}
          description="Protect your office space with our comprehensive security solutions. We offer advanced surveillance systems, access control, and onsite security personnel."
        />
        <ServiceCard
          icon={AiOutlineHome}
          title="Home Security"
          imgSrc={service2Img}
          description="Ensure the safety of your home and loved ones with our home security services. From alarm systems to smart locks, we provide everything you need for peace of mind."
        />
        <ServiceCard
          icon={AiOutlineShop}
          title="Industry Security"
          imgSrc={service3Img}
          description="Secure your industrial facilities and assets with our industry security solutions. Our specialized services include perimeter protection, asset tracking, and emergency response."
        />
        <ServiceCard
          icon={AiOutlineCar}
          title="Transport Security"
          imgSrc={service4Img}
          description="Keep your transportation operations safe and secure with our transport security services. We offer vehicle tracking, cargo protection, and driver safety solutions."
        />
        <ServiceCard
          icon={AiOutlineBank}
          title="Objects Security"
          imgSrc={service5Img}
          description="Safeguard your valuable objects and assets with our customized security solutions. Whether it's artwork, jewelry, or collectibles, we have you covered."
        />
        <ServiceCard
          icon={AiOutlineUser}
          title="Private Security"
          imgSrc={service6Img}
          description="Enhance your personal security with our private security services. Our trained professionals offer VIP protection, personal escort."
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, imgSrc, description }) => {
  return (
    <div className="service-card">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <div className="card-text-container">
            <h6 className="card-title">
              <span className="icon-container">
                <Icon />
              </span>
              {title}
            </h6>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;