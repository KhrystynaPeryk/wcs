import React from 'react'
import Image from 'next/image'
import styles from './whatsapp.module.css'
import WhatsAppIcon from '../../../public/assets/icons/whatsapp.svg'

const Whatsapp = () => {
    return (
        <a href="https://api.whatsapp.com/send?phone=971508486964" target="_new" rel="noopener noreferrer" className={styles.whatsappContainer}>
            <Image className={styles.img} src={WhatsAppIcon} alt='whatsapp icon' />
        </a>
    )
}

export default Whatsapp