import React from 'react'
import styles from './blogItem.module.css'
import Image from 'next/image'
import TrippleArrows from '../service-section/trippleArrows'
import Link from 'next/link'

const BlogItem = ({image, title, path}) => {
    return (
        <Link href={path} className={styles.link}>
            <div className={styles.blogItemContainer}>
                <div className={styles.imgWrapper}>
                    <Image src={image} alt={title} width={600} height={400} className={styles.img} layout='responsive'/>
                </div>
                <h2>{title}</h2>
                <div className={styles.readMore}>
                    <span>READ MORE</span>
                    <TrippleArrows />           
                </div>
            </div>
        </Link>
    )
}

export default BlogItem