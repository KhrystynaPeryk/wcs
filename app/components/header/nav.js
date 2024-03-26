import React from 'react'
import styles from './nav.module.css'

const Nav = ({expanded}) => {

  return (
    <ul className={expanded ? styles.navContainerExpanded : styles.container}>
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