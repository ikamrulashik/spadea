import React from 'react'
import '../styles/main.css';
import Header from '../assets/images/cover.webp';

function Work () {
    return (
        <div className='work'>
            <img src = {Header} className="header-img" alt="header"/>
            <h1 className='work-header'>Our Work</h1>
        </div>
    )
}

export default Work;