'use client'
import {useFormState} from 'react-dom'
import React, { useRef } from 'react'
import styles from './contactUs.module.css'
import FormSubmit from './formSubmit'
import { insertContactDetail } from '@/db/mongodb'

const ContactUs = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const requestRef = useRef(null);
    const [state, formAction] = useFormState(insertContactDetail, {message: null})
    
    const clearFormFields = () => {
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (requestRef.current) requestRef.current.value = '';
    };

    if (state.message === 'Submitted successfully!!!') {
        clearFormFields();
    }
    return (
        <div className={styles.contactContainer} id='contact-us'>
            <header className={styles.header}>
                <h1>Contact Us</h1>
                <p>Submit your contact details and request so we can get in touch with you to discuss your needs.</p>
            </header>
            <main className={styles.main}>
                <form 
                    className={styles.form} 
                    action={formAction}
                >
                    <p>
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="name" required ref={nameRef}/>
                    </p>
                    <p>
                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" name="email" required ref={emailRef} />
                    </p>
                    <p>
                        <label htmlFor="request">What can we help you with?</label>
                        <textarea
                        id="request"
                        name="request"
                        rows="10"
                        required
                        ref={requestRef}
                        ></textarea>
                    </p>
                    {state.message && <p>{state.message}</p>}
                    <p className={styles.actions}>
                        <FormSubmit />
                    </p>
                </form>
            </main>
        </div>
    )
}

export default ContactUs