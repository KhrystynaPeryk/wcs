'use client'
import React, {useState, useEffect} from 'react';
import styles from './logo.module.css'
import { WCSLogo } from './WCSLogo';

const Logo = ({color, onMenuToggle}) => {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    const handleClick = () => {
        const newExpandedState = !isMenuExpanded;
        setIsMenuExpanded(newExpandedState);
        if(onMenuToggle) {
            onMenuToggle(newExpandedState);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleResize = () => {
          // Automatically collapse the menu if window width is greater than 768px
            if (window.innerWidth > 768 && isMenuExpanded) {
                setIsMenuExpanded(false);
            }
        };
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup function to remove the event listener on component unmount
            return () => window.removeEventListener('resize', handleResize);
        }, [isMenuExpanded]); 

    return (
        <div>
            <div className={`${styles.icons} ${styles.logo}`} onClick={scrollToTop}>
                <WCSLogo color={color} />
            </div>
            <div className={`${styles.icons} ${styles.burgerMenu}`} onClick={handleClick}>
                <div className={styles.linesContainer}>
                    <div className={isMenuExpanded ? styles.crossLineOne : ''}></div>
                    <div className={isMenuExpanded ? styles.crossLineTwo : ''}></div>
                    {!isMenuExpanded && <div className={styles.lineThree}></div>}
                </div>
            </div>
        </div>
    );
}

export default Logo;


