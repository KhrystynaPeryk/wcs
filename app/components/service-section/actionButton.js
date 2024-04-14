'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './actionButton.module.css'

const ActionButton = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/#contact-us')
    }
    return (
        <div className={styles.actions}>
            <button type='button' onClick={handleClick}>Ask us a question</button>
        </div>
    )
}

export default ActionButton