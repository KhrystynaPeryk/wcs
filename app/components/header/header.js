'use client'

import React, { useState, useEffect } from 'react';
import styles from './header.module.css'
import Logo from './logo'
import Nav from './nav'

const Header = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleMenuToggle = (isExpanded) => {
    setMenuExpanded(isExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      // Automatically collapse the menu if window width is greater than 768px
      if (window.innerWidth > 768 && menuExpanded) {
        setMenuExpanded(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [menuExpanded]); 
  
  return (
      <div className={menuExpanded ? `${styles.container} ${styles.black}` : styles.container}>
        <Logo color={'#fff'} onMenuToggle={handleMenuToggle}/>
        <Nav expanded={menuExpanded} />
      </div>
  )
}

export default Header