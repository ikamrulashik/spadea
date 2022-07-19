import React from 'react';
import '../styles/serviceSection.css';
import Cards from '../components/cards';

function ServiceSection() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards-items'>
            <Cards
              src='images/animation.png'
              text='2d & 3d Animation'
              path='/services'
            />
            <Cards
              src='images/videoproduction.png'
              text='Video Production'
              path='/services'
            />
            <Cards
              src='images/digitalbuying.png'
              text='Digital Buying'
              path='/services'
            />
          </ul>
          <ul className='cards-items'>
            <Cards
              src='images/graphic.png'
              text='Graphic Design'
              path='/services'
            />
            <Cards
              src='images/interior.png'
              text='Interior Design'
              path='/services'
            />
            <Cards
              src='images/appdevelopment.png'
              text='Android & Web Application'
              path='/services'
            />
          </ul>    
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
