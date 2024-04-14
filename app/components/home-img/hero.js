import React from 'react'
import styles from './hero.module.css'
import ActionButton from '../service-section/actionButton'

const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.solutions}>Providing end-to-end <span className={styles.gradient}>solutions</span></div>
            <div className={styles.needs}> for your <span className={styles.gradient}>web</span> application needs</div>
            <div className={styles.btnWrapper}>
                <ActionButton />
            </div>
        </div>
    )
}

export default Hero