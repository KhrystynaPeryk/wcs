import React from 'react'
import styles from './blogItem.module.css'
import Image from 'next/image'
import TrippleArrows from '../service-section/trippleArrows'
import Link from 'next/link'

const BlogItem = ({image, title, path}) => {
    return (
        <div className={styles.blogItemContainer}>
            <Image src={image} alt={title} width={600} height={400} className={styles.img}/>
            <h2>{title}</h2>
            <Link href={path} className={styles.link}>
                <span>READ MORE</span>
                <TrippleArrows />           
            </Link>
        </div>
    )
}

export default BlogItem