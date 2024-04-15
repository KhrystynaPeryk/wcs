import React from 'react'
import blogArticlesLibrary from '@/app/components/blog/all-blog-articles'
import styles from './page.module.css'

const BlogPage = ({params}) => {
    const article = blogArticlesLibrary.find(item => item.id === params.blogSlug)
    if (!article) {
        return <div>No article found</div>
    }
    return (
        <div className={styles.blogLibraryContainer}>
            <div className={styles.content}>
                <h1>{article.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: article.htmlBody }} className={styles.text}></div>
            </div>
        </div>
    )
}

export default BlogPage