import React from 'react'
import Image from "next/image";
import styles from './bannerImage.module.css'
import bannerImg from '@/public/assets/img/banner.jpg'
import Hero from './hero';
import DownArrow from './donw-arrow';

const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <Image src={bannerImg} alt='banner' fill className={styles.img}/>
            <Hero />
            <DownArrow />
        </div>
    )
}

export default Banner