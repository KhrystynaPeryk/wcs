import React from 'react'
import styles from './serviceItem.module.css'

const ServiceItem = ({serviceName, serviceDesc}) => {
    return (
        <div className={styles.item}>
            <h2>{serviceName}</h2>
            <div>{serviceDesc}</div>
        </div>
    )
}

export default ServiceItem