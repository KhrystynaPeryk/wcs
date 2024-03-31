'use client'
import React from 'react'
import styles from './down-errow.module.css'

export const DownArrow = () => {
    const scrollToServices = () => {
        window.scrollTo({
            top: window.innerHeight * 1.1,
            behavior: 'smooth'
        });
    };
    return (
        <div className={styles.arrContainer}>
            <p onClick={scrollToServices}>LEARN MORE</p>
        </div>
    )
}

export default DownArrow