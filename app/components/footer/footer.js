import React from 'react'
import styles from './footer.module.css'
import Logo from '../header/logo'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div>
                Transform <b>your vision</b> into a dynamic and effective online presence with us!
            </div>
            <Logo color={'#fff'}/>
        </div>
    )
}

export default Footer