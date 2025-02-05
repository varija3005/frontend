import React from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFax } from 'react-icons/fa'

import './ContactUsSection.Styles.scss'

const ContactUsSection = () => {
  return (
    <>
      <div className='contact-us-section'>
        <div data-aos='fade-up' data-aos-duration='1000'>
          <h4 className='sub-heading'>Contact Us</h4>
          <h1 className='heading'>
            For inquiries, bulk orders, or more details, contact us today!
          </h1>
        </div>
        <div className='content' data-aos='fade-up' data-aos-duration='1000'>
          <div className='address'>
            <h3>Where To Find Us</h3>
            <p>
              #12/2-66 Krishanappa Layout, <br />
              R.R Nagar, Karekodi Main Road, <br />
              Hoskerehalli, Bangalore- 85
            </p>
          </div>
          <div className='contact'>
            <div className='mail'>
              <h3>Mail Us At</h3>
              <p>varija.3005@gmail.com</p>
            </div>
            <div className='phone'>
              <h3>Call Us At</h3>
              <p>06-5583064</p>
              <p>050-3828962</p>
            </div>
          </div>
        </div>
        <div className='links'>
          <a href='mailto:info@emperoreng.com' rel='noreferrer'>
            <FiMail className='link' />
          </a>
          <a href='tel:0503828962' rel='noreferrer'>
            <FiPhone className='link' />
          </a>
          <a
            href='https://maps.app.goo.gl/KzMGdqWkogRHqBqV6'
            target='_blanck'
            rel='noreferrer'
          >
            <FiMapPin className='link' />
          </a>
          <a href='tel:+065593065' rel='noreferrer'>
            <FaFax className='link' />
          </a>
        </div>
      </div>
      <div className='footer'>
        Made to Perfection by{' '}
        <a
          href='https://www.linkedin.com/in/yashwanth-kolli-b8b413208/'
          target='_blanck'
          rel='noreferrer'
        >
          Yashwanth Kolli
        </a>
      </div>
    </>
  )
}

export default ContactUsSection
