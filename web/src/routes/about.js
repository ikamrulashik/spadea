import React from 'react'
import '../styles/main.css';
import Header from '../assets/images/cover.webp';

function About () {
    return (
        <div className='about'>
            <img src = {Header} className="header-img" alt="header"/>
            <h1 className='about-header'>About Us</h1>
        </div>
    )
}

export default About;