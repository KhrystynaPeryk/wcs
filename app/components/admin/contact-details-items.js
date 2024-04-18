'use client'
import React, {useEffect, useState} from 'react'
import styles from './contact-details-items.module.css'
import ContactDetailsItem from './contact-details-item'
import { getAllContactDetails } from '@/db/mongodb'

function ContactDetailsItems() {
    const [contactDetails, setContactDetails] = useState([]);

    useEffect(() => {
        const fetchDetails = async () => {
            const details = await getAllContactDetails();
            setContactDetails(details);
        };

        fetchDetails();
    }, []);

    if (contactDetails.length === 0) {
        return <div>No Contact Details...</div>
    }
    
    return (
        <ul className={styles.contactDetailsContainer}>
            {contactDetails.map(detail => (
                <li key={detail._id}>
                    <ContactDetailsItem {...detail} />
                </li>
            ))}
        </ul>
    )
}

export default ContactDetailsItems