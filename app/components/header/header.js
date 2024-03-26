import React from 'react'
import styles from './header.module.css'
import Logo from './logo'
import Nav from './nav'

const Header = () => {
  return (
      <div className={styles.container}>
        <Logo color={'#fff'}/>
        <Nav />
      </div>
  )
}

export default Header