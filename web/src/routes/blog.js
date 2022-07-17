import React from 'react'
import '../styles/main.css';
import Header from '../assets/images/cover.webp';

function Blog () {
    return (
        <div className='blog'>
            <img src = {Header} className="header-img" alt="header"/>
            <h1 className='blog-header'>Blog</h1>
        </div>
    )
}

export default Blog;