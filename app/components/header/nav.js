'use client'
import React from 'react'
import styles from './nav.module.css'
import { useRouter } from 'next/navigation'

const Nav = ({expanded}) => {
  const router = useRouter()
  const handleClick = (id) => {
    router.push(`/#${id}`)
  }
  return (
    <ul className={expanded ? styles.navContainerExpanded : styles.container}>
      <li onClick={() => handleClick('our-services')}>
        Services
      </li>
      <li onClick={() => handleClick('blog')}>
        Blog
      </li>
      <li onClick={() => handleClick('about-us')}>
        About
      </li>
      <li onClick={() => handleClick('contact-us')}>
        Contact us
      </li>
    </ul>
  )
}

export default Nav