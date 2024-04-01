'use client'
import React, { useState } from 'react'
import styles from './service.module.css'
import ServiceItem from './serviceItem';

const Service = () => {
  const [visibleItem, setVisibleItem] = useState(null);

  const toggleVisibility = (itemName) => {
    // Toggle logic: if the clicked item is already visible, hide it, otherwise show it
    setVisibleItem(visibleItem === itemName ? null : itemName);
  };

  return (
    <div className={styles.serviceContainer}>
      <div className={styles.transitional}></div>
      <div className={styles.servicesDesc}>
        <p>Our services</p>
        <div className={styles.itemsContainer}>
          <ServiceItem serviceName={'Design'} serviceDesc={'Responsive custom design for desktop, tablet and mobile devices.'} toggleVisibility={toggleVisibility} isVisible={visibleItem === 'Design'} />
          <ServiceItem serviceName={'Front-end Development'} serviceDesc={'We develop UI of your website or web application as per design approved by you.'} toggleVisibility={toggleVisibility} isVisible={visibleItem === 'Front-end Development'} />
          <ServiceItem serviceName={'Back-end Development'} serviceDesc={'Integration / connection of your website to the 3rd party apps with API.'} toggleVisibility={toggleVisibility} isVisible={visibleItem === 'Back-end Development'} />
          <ServiceItem serviceName={'Support'} serviceDesc={'Customer support services for your commercial website.'} toggleVisibility={toggleVisibility} isVisible={visibleItem === 'Support'} />
          <ServiceItem serviceName={'Cloud Consulting'} serviceDesc={'Optimization of the performance of your website.'} toggleVisibility={toggleVisibility} isVisible={visibleItem === 'Cloud Consulting'} />
        </div>
      </div>
    </div>
  );
}

export default Service