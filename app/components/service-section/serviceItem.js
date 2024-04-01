'use client'
import React from 'react';
import styles from './serviceItem.module.css';

const ServiceItem = ({ serviceName, serviceDesc, toggleVisibility, isVisible }) => {
    const handleClick = () => {
        if (window.innerWidth <= 875) {
            toggleVisibility(serviceName);
        }
    };

    return (
        <div className={styles.item} onClick={handleClick}>
            <h2>{serviceName}</h2>
            <div className={isVisible ? styles.visible : styles.hidden}>{serviceDesc}</div>
        </div>
    );
};

export default ServiceItem;