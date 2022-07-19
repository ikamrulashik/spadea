import React, {useRef} from 'react'
import logo from '../assets/logos/logo.svg'
import {FaBars, FaTimes} from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar () {
    const navRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle('responsive-nav');
    }

    return (
        <>
            <header className='navbar'>
                <a href = "/"><img src={logo} width="85" height="75" alt="logo"/></a>
                <nav ref={navRef}>
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/work">Our Work</a>
                    <a href="/contact">Contact Us</a>

                    <button class='nav-btn nav-cls-btn' onClick={showNav}>
                        <FaTimes/>
                    </button> 
                </nav>
                <button className='nav-btn' onClick={showNav}>
                    <FaBars/>
                </button>
            </header>

        </>
    )
}

export default Navbar;