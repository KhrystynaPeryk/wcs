import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Team from '../../../public/assets/img/about.png'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.imgWrapper} >
                <Image src={Team} alt='about us' fill className={styles.img} />
            </div>
            <div className={styles.textWrapper} >
                <div>
                    <h1>About us</h1>
                </div>
                <div className={styles.text}>
                    <p>
                        <b>Web Craft Squad</b> is a start up company of enthusiastic IT specialists who specialize in providing end-to-end solutions for your web application needs. 
                    </p>
                    <p>
                        Our commitment to 'Comprehensive Web Application Development and Support' means that we're here to guide you through every step of your project's journey.
                    </p>
                    <p>
                        From conceptualization to deployment and beyond, our team of experts is dedicated to crafting web applications that not only meet your unique requirements but also exceed your expectations.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About