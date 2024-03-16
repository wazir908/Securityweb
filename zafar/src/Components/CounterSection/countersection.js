import React, { useState, useEffect } from 'react';
import './countersection.css';

import { FaUserShield, FaUsers, FaShieldAlt, FaAward } from 'react-icons/fa';

const CounterSection = () => {
    const counters = [
        { icon: <FaUserShield />, label: 'Our Staff', target: 250 },
        { icon: <FaUsers />, label: 'Happy Clients', target: 1500 },
        { icon: <FaShieldAlt />, label: 'Projects Completed', target: 10000 },
        { icon: <FaAward />, label: 'Award Winning', target: 25 }
    ];

    const [counts, setCounts] = useState(Array(counters.length).fill(0));

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts(prevCounts => {
                return prevCounts.map((count, index) => {
                    const increment = Math.ceil(counters[index].target / 100);
                    return count + increment > counters[index].target ? counters[index].target : count + increment;
                });
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="counter-container">
          {counters.map((counter, index) => (
            <div key={index} className="counter-item">
              {React.cloneElement(counter.icon, { style: { fontSize: '48px' } })}
              <h4>{counts[index]}</h4>
              <h6>{counter.label}</h6>
            </div>
          ))}
        </div>
      );
};

export default CounterSection;