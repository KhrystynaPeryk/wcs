import React from 'react'
import blogArticlesLibrary from '@/app/components/blog/all-blog-articles'

const BlogPage = ({params}) => {
    const article = blogArticlesLibrary.find(item => item.id === params.blogSlug)
    return (
        <div>{article.name}</div>
    )
}

export default BlogPage