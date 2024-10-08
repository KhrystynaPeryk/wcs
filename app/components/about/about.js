import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Team from '../../../public/assets/img/about.png'

const About = () => {
    return (
        <div className={styles.aboutContainer} id='about-us'>
            <div className={styles.imgWrapper} >
                <Image src={Team} alt='about us' width={700} height='auto' className={styles.img} />
            </div>
            <div className={styles.textWrapper} >
                <div>
                    <h1>About Us</h1>
                </div>
                <div className={styles.text}>
                    <p>
                        <b>Web Craft Squad</b> is a start up company of enthusiastic IT specialists who specialize in providing end-to-end solutions for your web application needs. 
                    </p>
                    <p>
                        Our commitment to <span>&quot;Comprehensive Web Application Development and Support&quot;</span> means that we&apos;re here to guide you through every step of your project&apos;s journey.
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