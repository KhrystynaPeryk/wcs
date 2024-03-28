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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Automatically collapse the menu if window width is greater than 768px
      if (window.innerWidth > 768 && menuExpanded) {
        setMenuExpanded(false);
      }
    };

    // Handle scroll to change background color
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position > 0);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    }
  }, [menuExpanded]); 
  
  return (
      // <div className={menuExpanded ? `${styles.container} ${styles.black}` : styles.container}>
      <div className={`${styles.container} ${menuExpanded ? styles.black : ''} ${isScrolled ? styles.black : ''}`}>
        <Logo color={'#fff'} onMenuToggle={handleMenuToggle}/>
        <Nav expanded={menuExpanded} />
      </div>
  )
}

export default Header