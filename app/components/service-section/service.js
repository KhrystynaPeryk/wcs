import React from 'react'
import styles from './service.module.css'
import Image from "next/image";
import servicesImg from '@/public/assets/img/servicesImg.jpg'

const Service = () => {
  return (
    <div className={styles.serviceContainer}>
      <Image src={servicesImg} alt='img' fill/>
    </div>
  )
}

export default Service