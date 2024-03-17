import React from 'react';
import { AiOutlineBank, AiOutlineHome,AiOutlineAccountBook, AiOutlineShop, AiOutlineCar, AiOutlineUser, AiOutlineTool, AiOutlineSafetyCertificate, AiOutlineControl, AiOutlineTeam, AiOutlineUnlock, AiOutlineBuilding, AiOutlineAlert, AiOutlineFieldTime, AiOutlineFieldNumber, AiOutlineCamera, AiOutlineSecurityScan } from 'react-icons/ai';
import './services.css'; 

import service1Img from '../../img/services/service-1.jpg';
import service2Img from  '../../img/services/service-1.jpg';
import service3Img from  '../../img/services/service-1.jpg';
import service4Img from  '../../img/services/service-1.jpg';
import service5Img from  '../../img/services/service-1.jpg';
import service6Img from  '../../img/services/service-1.jpg';
import service7Img from  '../../img/services/service-7.jpg';
import service8Img from  '../../img/services/service-1.jpg';
import service9Img from  '../../img/services/service-1.jpg';
import service10Img from '../../img/services/service-1.jpg';
import service11Img from '../../img/services/service-1.jpg';
import service12Img from '../../img/services/service-12.png';

const Services = () => {
  return (
    <div className="services-container-1">
      <div className="services-heading text-center mb-5">
        <h5 className="services-main-heading">Our Services</h5>
        <h1 className="services-title">Premium Security Services</h1>
      </div>
      <div className="services-row">
        <ServiceCard
          icon={AiOutlineAlert}
          title="Front of House Security"
          imgSrc={service7Img}
          description="Ensure the safety and security of your front of house area with our professional security personnel. We provide vigilant monitoring and proactive security measures."
        />
        <ServiceCard
          icon={AiOutlineUnlock}
          title="Vacant Property Security"
          imgSrc={service8Img}
          description="Protect vacant properties from trespassing, vandalism, and theft with our vacant property security services. Our security solutions help deter unwanted intrusions and maintain property integrity."
        />
        <ServiceCard
          icon={AiOutlineAccountBook}
          title="ESPO Framework"
          imgSrc={service9Img}
          description="Utilize our security services conveniently through the ESPO framework. We offer streamlined procurement processes and cost-effective solutions for public sector organizations."
        />
        <ServiceCard
          icon={AiOutlineShop}
          title="Retail Security"
          imgSrc={service10Img}
          description="Ensure the safety of your retail establishment and customers with our retail security services. Our trained personnel provide loss prevention, crowd management, and incident response."
        />
        <ServiceCard
          icon={AiOutlineTeam}
          title="KRY Holding"
          imgSrc={service11Img}
          description="Partner with KRY Holding for comprehensive security solutions tailored to your specific needs. Our industry expertise and innovative approaches ensure optimal security outcomes."
        />
        <ServiceCard
          icon={AiOutlineSecurityScan}
          title="Security Assessment"
          imgSrc={service6Img}
          description="Evaluate your security posture and identify vulnerabilities with our comprehensive security assessments. Our expert analysis helps you strengthen your defenses and mitigate risks."
        />
        <ServiceCard
          icon={AiOutlineFieldTime}
          title="Manned Guarding"
          imgSrc={service1Img}
          description="Ensure the safety of your premises with our manned guarding services. Our trained guards provide round-the-clock surveillance, access control, and emergency response."
        />
        <ServiceCard
          icon={AiOutlineFieldNumber}
          title="Gate House Duties"
          imgSrc={service2Img}
          description="Control access to your facility with our gate house duties services. Our trained personnel manage entry and exit points, verify credentials, and enforce security protocols."
        />
        <ServiceCard
          icon={AiOutlineTool}
          title="Construction Security"
          imgSrc={service3Img}
          description="Protect your construction site from theft, vandalism, and unauthorized access with our construction security services. We offer perimeter protection, surveillance, and onsite patrols."
        />
        <ServiceCard
          icon={AiOutlineUser}
          title="Concierge Services"
          imgSrc={service4Img}
          description="Elevate the service experience for your residents or guests with our concierge services. From front desk management to package handling, we ensure a welcoming and secure environment."
        />
        <ServiceCard
          icon={AiOutlineCar}
          title="Traffic Management"
          imgSrc={service5Img}
          description="Manage traffic flow and parking logistics efficiently with our traffic management services. Our trained personnel ensure smooth operations and enhance safety for pedestrians and vehicles."
        />
        <ServiceCard
          icon={AiOutlineCamera}
          title="CCTV Monitoring"
          imgSrc={service12Img}
          description="Enhance surveillance and threat detection with our CCTV monitoring services. Our trained operators monitor camera feeds, identify potential risks, and provide real-time alerts for timely intervention."
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