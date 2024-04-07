import React from 'react'
import servicesLibrary from '../../components/service-section/all-services-description'
import styles from './page.module.css'
import Image from 'next/image'

const ServicePage = ({params}) => {
    const service = servicesLibrary.find(service => service.id === params.serviceSlug)
    return (
        <div className={styles.serviceLibraryContainer}>
                <div className={styles.imgWrapper}>
                    <Image src={service.image} alt={service.id} width={650} />
                </div>
                <div className={styles.contentWrapper}>
                    <div><span className={styles.img}>{service.name}</span></div>
                    <div className={styles.text} dangerouslySetInnerHTML={{ __html: service.htmlDescription }}></div>
                    <div className={styles.actions}>
                        <button type='button'>Ask us a question</button>
                    </div>
                </div>
        </div>
    )
}

export default ServicePage