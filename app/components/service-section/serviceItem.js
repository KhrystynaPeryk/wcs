'use client'
import React from 'react';
import styles from './serviceItem.module.css';
import Arrow from '../../../public/assets/icons/down-arrow.svg'
import Image from 'next/image';
import Link from 'next/link';

const ServiceItem = ({ serviceName, serviceDesc, toggleVisibility, isVisible }) => {
    const handleClick = () => {
        if (window.innerWidth <= 875) {
            toggleVisibility(serviceName);
        }
    };

    const handleImageClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className={styles.item} onClick={handleClick}>
            <h2>{serviceName}</h2>
            <div className={isVisible ? styles.visible : styles.hidden}>
                {serviceDesc}
                <Link href='/services/design' onClick={handleImageClick}>
                    <span className={styles.arrows}>
                        <Image src={Arrow} alt='arrow' width={20} height={15} className={styles.img}/>
                        <Image src={Arrow} alt='arrow' width={20} height={15} className={styles.img}/>
                        <Image src={Arrow} alt='arrow' width={20} height={15} className={styles.img}/>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ServiceItem;