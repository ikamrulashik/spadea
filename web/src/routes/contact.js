import React from 'react'
import '../styles/main.css';
import Header from '../assets/images/cover.webp';

function Contact () {
    return (
        <div className='contact'>
            <img src = {Header} className="header-img" alt="header"/>
            <h1 className='contact-header'>Contact Us</h1>
        </div>
    )
}

export default Contact;