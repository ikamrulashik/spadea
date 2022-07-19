import React from 'react'
import '../styles/main.css';
import Header from '../assets/images/cover.webp';
import ContactForm from '../components/contactFrom';

function Contact () {
    return (
        <div className='contact'>
            <img src = {Header} className="header-img" alt="header"/>
            <h1 className='contact-header'>Contact Us</h1>

            <ContactForm/>
        </div>
    )
}

export default Contact;