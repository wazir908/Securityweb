import React, { useState, useEffect, Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { FaUserFriends, FaHardHat, FaPhoneAlt, FaHeart } from 'react-icons/fa';
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




function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); 
    };

    fetchData();
  }, []);


{/* here i Started  features icons functions using props in react */}

  const featuresData = [
    {
        icon: <FaUserFriends className="feature-icon" />,
        title: "Professional Staff",
        description: "Our team consists of highly skilled professionals dedicated to providing top-notch service to our customers."
    },
    {
        icon: <FaHardHat className="feature-icon" />,
        title: "Latest Equipment",
        description: "We use the latest equipment and technology to ensure efficiency and quality in our work."
    },
    {
        icon: <FaPhoneAlt className="feature-icon" />,
        title: "24/7 Support",
        description: "We provide round-the-clock support to address any concerns or issues you may have."
    },
    {
      icon: <FaPhoneAlt className="feature-icon" />,
      title: "24/7 Support",
      description: "We provide round-the-clock support to address any concerns or issues you may have."
  }

];

{/* here i ended  features icons functions using props in react */}



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
