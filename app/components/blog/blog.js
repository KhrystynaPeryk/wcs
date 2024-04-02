import React from 'react'
import styles from './blog.module.css'
import BlogItem from './blogItem'
import Blog1Img from '../../../public/assets/img/blog/blog1.jpg'
import Blog2Img from '../../../public/assets/img/blog/blog2.jpg'
import Blog3Img from '../../../public/assets/img/blog/blog3.jpg'

const Blog = () => {
    return (
        <div className={styles.blogContainer}>
            <h1>Blog</h1>
            <div className={styles.itemsWrapper}>
                <BlogItem image={Blog1Img} title={'Embarking on the Cloud Journey: a Comprehensive Guide to Getting Started'} path={'/blog/embarking-on-the-cloud-journey-a-comprehensive-guide-to-getting-started'} />
                <BlogItem image={Blog2Img} title={'Building Seamless E-Commerce Experiences Integrating REST APIs with Front-end Development'} path={'/blog/building-seamless-e-commerce-experiences-integrating-rest-apis-with-front-end-development'} />
                <BlogItem image={Blog3Img} title={'Unleashing the Power of React.js: Why it Triumphs Over Wordpress and Wix for Website Development'} path={'/blog/unleashing-the-power-of-reactjs-why-it-triumphs-over-wordpress-and-wix-for-website-development'} />
            </div>
        </div>
    )
}

export default Blog