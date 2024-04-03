import React from 'react'
import styles from './footer.module.css'
import { WCSLogo } from '../header/WCSLogo'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div>
                Transform <b>your vision</b> into a dynamic and effective online presence with us!
            </div>
            <WCSLogo color='#ddd6cb' />
        </div>
    )
}

export default Footer