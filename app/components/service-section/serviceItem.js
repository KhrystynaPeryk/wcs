'use client'
import React from 'react';
import styles from './serviceItem.module.css';
import Link from 'next/link';
import TrippleArrows from './trippleArrows';

const ServiceItem = ({ serviceName, serviceDesc, path, toggleVisibility, isVisible }) => {
    const handleClick = () => {
        if (window.innerWidth <= 935) {
            toggleVisibility(serviceName);
        }
    };

    const handleImageClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className={styles.item} onClick={handleClick}>
            <h2><span>{serviceName}</span></h2>
            <div className={isVisible ? styles.visible : styles.hidden}>
                {serviceDesc}
                <Link href={'/services' + path} onClick={handleImageClick}>
                    <TrippleArrows />
                </Link>
            </div>
        </div>
    );
};

export default ServiceItem;