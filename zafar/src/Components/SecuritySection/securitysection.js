import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './securitysection.css';
import securityImage from '../../img/hero/hero-2.jpg';

const SecuritySection = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="heading">
        <h1>Protecting What Matters Most</h1>
        <p>Explore our comprehensive security solutions</p>
      </div>
      <div className="main-container">
        <div className="left-container">
          <Tabs selectedIndex={activeTab} onSelect={(index) => handleTabClick(index)}>
            <TabList>
              {tabs.map((tab, index) => (
                <Tab key={index}>{tab.label}</Tab>
              ))}
            </TabList>
            {tabs.map((tab, index) => (
              <TabPanel key={index}>
                <div className="tab-content">
                  <h3>{tab.label}</h3>
                  <span className="icon-90">{tab.icon}</span>
                  <p>{tab.description}</p>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
        <div className="right-container">
          <img src={securityImage} alt="Security Services" />
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;