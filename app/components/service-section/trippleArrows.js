import React from 'react'
import Arrow from '../../../public/assets/icons/down-arrow.svg'
import Image from 'next/image';
import styles from './trippleArrows.module.css'


const TrippleArrows = () => {
    return (
        <span className={styles.arrows}>
            <Image src={Arrow} alt='arrow' width={20} height={15} className={styles.img}/>
            <Image src={Arrow} alt='arrow' width={20} height={15} className={styles.img}/>
            <Image src={Arrow} alt='arrow' width={20} height={15} className={styles.img}/>
        </span>
    )
}

export default TrippleArrows