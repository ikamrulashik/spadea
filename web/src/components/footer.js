import React from 'react';
import '../styles/footer.css';
import logowhite from '../assets/logos/logo-white.svg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-logo'>
        <div className='footer-logo-heading'>
        <img src={logowhite} width="120"  alt="logo"/>
        </div>
        <div className='social-media'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
        </div>
        
      </div>
      <div className='footer-info'>
        <i class="fas fa-map-marker-alt"/> 	&nbsp; Level 1, House 188, Road 8, Block C, Bashundhara R/A, 1229 Dhaka, Bangladesh.
      </div>
      <div className='footer-info-address'>
        <i class="fas fa-phone-alt"/>	&nbsp;01936-800976
      </div>
      <div className='footer-info-address'>
        <i class="fas fa-envelope"/>	&nbsp; spadeadigital@gmail.com
      </div>
      
      <div className='footer-end'>
        <div className='footer-end-rights'>
          <p>©2022 Spadea. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
