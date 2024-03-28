'use client'
import React, {useState, useEffect} from 'react';
import styles from './logo.module.css'

const Logo = ({color, onMenuToggle}) => {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    const handleClick = () => {
        const newExpandedState = !isMenuExpanded;
        setIsMenuExpanded(newExpandedState);
        if(onMenuToggle) {
            onMenuToggle(newExpandedState);
        }
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
            <div className={`${styles.icons} ${styles.logo}`}>
                <svg id="eGYU4Xpj7rb1" width="200px" height="60px" xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 43 32" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                    <rect x="0.3" y="7" width="43" height="20" stroke="#bb00ff" strokeWidth="1" fill="none" />
                    <text fontFamily="Nunito Sans" fontSize="7" fontWeight="500" textAnchor="middle" alignmentBaseline="middle" x="50%" y="50%" dy=".3em" strokeWidth="0">
                        WEB CRAFT SQUAD
                    </text>
                </svg>
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


