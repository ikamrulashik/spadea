import React from 'react'
import '../styles/main.css';
import Header from '../assets/images/cover.webp';

function Services () {
    return (
        <div className='services'>
            <img src = {Header} className="header-img" alt="header"/>
            <h1 className='services-header'>Our Services</h1>
        </div>
    )
}

export default Services;