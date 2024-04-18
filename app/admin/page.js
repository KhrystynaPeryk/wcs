'use client'

import React, { useRef, useState } from 'react'
import styles from './page.module.css'
import ContactDetailsItems from '../components/admin/contact-details-items'

const AdminPage = () => {
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const [isAdminLogged, setIsAdminLogged] = useState(false)

    const verifyCredentials = (username, password) => (username === 'admin' && password === '123456')

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsAdminLogged(verifyCredentials(userNameRef.current.value, passwordRef.current.value))
    }

    return (
        <div className={styles.adminContainer}>
            {
                isAdminLogged ? <ContactDetailsItems /> :
                (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <p>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required ref={userNameRef}/>
                        </p>
                        <p>
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" name="password" required ref={passwordRef} />
                        </p>
                        <button type='submit'>Log in</button>
                    </form>
                )
            }
        </div>
    )
}

export default AdminPage