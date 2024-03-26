'use client'
import React, {useState} from 'react';
import styles from './logo.module.css'

const Logo = ({color}) => {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);

    const toggleMenu = () => {
        if (isMenuExpanded) {
            setStartAnimation(true);
            setTimeout(() => {
                setIsMenuExpanded(!isMenuExpanded);
                setStartAnimation(false);
            }, 500);
        } else {
            setIsMenuExpanded(!isMenuExpanded);
            setStartAnimation(true);
        }
    };

    return (
        <div>
            <div className={`${styles.svgElement} ${styles.logo}`}>
                <svg id="eGYU4Xpj7rb1" width="200px" height="50px" xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 43 32" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                    <rect x="0.3" y="7" width="43" height="20" stroke="#bb00ff" strokeWidth="1" fill="none" />
                    <text fontFamily="Nunito Sans" fontSize="7" fontWeight="500" textAnchor="middle" alignmentBaseline="middle" x="50%" y="50%" dy=".3em" strokeWidth="0">
                        WEB CRAFT SQUAD
                    </text>
                </svg>
            </div>
            <div className={`${styles.svgElement} ${styles.burgerMenu}`} onClick={toggleMenu}>
                {isMenuExpanded && (
                    <div className={startAnimation ? styles.fadeIn : styles.fadeOut}>
                        <svg width="90px" height="50px" viewBox="-5 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#73ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M3 3.32001L21 21.32" stroke="#73ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                        </svg>
                    </div>
                )}
                {!isMenuExpanded && (
                    <div className={startAnimation ? styles.fadeOut : styles.fadeIn}>
                    <svg width="100px" height="50px" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#73ff00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/> </g>
                    </svg>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Logo;


