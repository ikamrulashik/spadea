import React from 'react'
import Cards from '../components/cards';
import '../styles/serviceSection.css';

function ServiceSection() {
    return (
        <div className="cards">
            <h1>Our Services</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <Cards src="../assets/images/animation.png" text="2D & 3D Animation" path="/services"/>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection;