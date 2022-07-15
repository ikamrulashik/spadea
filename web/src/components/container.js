import React from 'react'
import bg from '../assets/images/cover.webp';
import '../styles/container.css';

function Container () {
    return (
        <div className="content">
            <img src ={bg} className="container-img" alt="backdrop"/>
            <h1>INNOVATION STARTS WITH IDEAS</h1>
            <br/>
            <div className="bg-btn">
                <button className ="btns">
                    LEARN MORE
                </button>
            </div>

        </div>
        
    )
}

export default Container;