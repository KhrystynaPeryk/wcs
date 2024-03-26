import React from 'react'
import styles from './nav.module.css'

const Nav = () => {
  return (
    <ul className={styles.container}>
      <li>
        Services
      </li>
      <li>
        Contact us
      </li>
    </ul>
  )
}

export default Nav