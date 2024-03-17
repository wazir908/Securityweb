import React, { useState, useEffect } from 'react';
import './App.css';
import { AiOutlineWarning, AiOutlineUsergroupAdd, AiOutlineAudit } from 'react-icons/ai';
import { BrowserRouter as Router } from 'react-router-dom';
import { FaUserShield, FaCogs, FaPhone, FaHandsHelping } from 'react-icons/fa';
import Loader from './Components/Loader/loader';
import TopBar from './Components/TopBar/topbar';
import Header from './Components/Header/header';
import LandingPage from './Components/LandingPage/landingpage';
import Feature from './Components/Feature/feature';
import AboutUs from './Components/AboutUs/aboutus';
import CounterSection from './Components/CounterSection/countersection';
import Icons from './Components/Icons/icons';
import Feature1 from './Components/Feature1/feature1';
import Services from './Components/Services/services';
import Testimonials from './Components/Testimonials/testimonials';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import SecuritySection from './Components/SecuritySection/securitysection';

function App() {
  {/*Here I added The Loader script*/}
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); 
    };

    fetchData();
  }, []);

  {/*Loader script edited*/}

  {/*Here I added The Features Data props script linking to Feature main */}
  const featuresData = [
    {
      icon: <FaUserShield className="feature-icon" />,
      title: "Skilled Personnel",
      description: "Our team comprises highly trained security professionals committed to delivering exceptional security services tailored to your needs."
    },
    {
      icon: <FaCogs className="feature-icon" />,
      title: "Advanced Equipment",
      description: "We deploy state-of-the-art security equipment and technology to ensure maximum protection and vigilance at all times."
    },
    {
      icon: <FaPhone className="feature-icon" />,
      title: "24/7 Support",
      description: "Our dedicated support team is available round-the-clock to address any security concerns or emergencies promptly."
    },
    {
      icon: <FaHandsHelping className="feature-icon" />,
      title: "Emergency Response",
      description: "Trained in emergency procedures, our security personnel respond swiftly to any crisis, providing immediate assistance when it matters most."
    }
  ];

  {/*Here  The Features Data props script linking to Feature main  ended */}

  {/*Here I added securityservices features section props script linking to tabs */}

  const tabs = [
    {
      label: 'Threat Detection',
      icon: <AiOutlineWarning />,
      description: 'Our comprehensive threat detection services utilize state-of-the-art technology combined with advanced analytics to monitor your environment for any potential security breaches. We provide real-time alerts and actionable insights to help you mitigate risks and protect your assets effectively. Additionally, our threat detection solutions are scalable and adaptable, ensuring seamless integration with your existing security infrastructure.',
    },
    {
      label: 'Security Guards',
      icon: <AiOutlineUsergroupAdd />,
      description: 'Our team of highly trained security professionals offers a range of security guard services tailored to meet your specific needs. From armed guards to patrol services, access monitoring, and emergency response, we ensure the safety and security of your premises round-the-clock. Furthermore, our security guards undergo rigorous training and adhere to strict standards of professionalism, ensuring optimal security posture at all times.',
    },
    {
      label: 'Security Consultation',
      icon: <AiOutlineAudit />,
      description: 'Our security consultation services provide a comprehensive assessment of your security risks and vulnerabilities. We work closely with you to develop customized security strategies and implement effective measures to mitigate potential threats. With our expertise and experience, we help you safeguard your business and assets. Additionally, our consultants stay updated on the latest security trends and technologies, ensuring that your security posture remains robust and future-proof.',
    }
  ];

  {/*Here I edited security services features section props script linking to tabs */}

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <TopBar/>
          <Header />
          <LandingPage />
          <Feature features={featuresData} />
          <AboutUs />
          <CounterSection/>
          <SecuritySection tabs={tabs} />
          <Icons/>
          <Feature1 />
          <Services />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;