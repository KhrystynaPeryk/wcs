import React from 'react'
import styles from './contact-details-item.module.css'

const ContactDetailsItem = ({name, email, request}) => {
    return (
        <>
            <div className={styles.box}>
                <h2>Name</h2>
                <p>{name}</p>
            </div>
            <div className={styles.box}>
                <h2>Email</h2>
                <p>{email}</p>
            </div>
            <div className={styles.box}>
                <h2>Request</h2>
                <p>{request}</p>
            </div>
        </>
    )
}

export default ContactDetailsItem