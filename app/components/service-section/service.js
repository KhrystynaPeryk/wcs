import React from 'react'
import styles from './service.module.css'
import Image from "next/image";
import servicesImg from '@/public/assets/img/servicesImg.jpg'
import ServiceItem from './serviceItem';

const Service = () => {
  return (
    <div className={styles.serviceContainer}>
      <div className={styles.transitional}></div>
      {/* <Image src={servicesImg} alt='img' className={styles.img}/> */}
      <div className={styles.servicesDesc}>
        <p>Our services</p>
        <div className={styles.itemsContainer}>
          <ServiceItem serviceName={'Design'} serviceDesc={'Responsive custom design for desktop, tablet and mobile devices.'} />
          <ServiceItem serviceName={'Front-end Development'} serviceDesc={'We develop UI of your website or web application as per design approved by you.'} />
          <ServiceItem serviceName={'Back-end Development'} serviceDesc={'Integration / connection of your website to the 3rd party apps with API..'} />
          <ServiceItem serviceName={'Support'} serviceDesc={'Customer support services for your commercial website.'} />
          <ServiceItem serviceName={'Cloud Consulting'} serviceDesc={'Optimization of the performance of your website.'} />
        </div>
      </div>
    </div>
  )
}

export default Service