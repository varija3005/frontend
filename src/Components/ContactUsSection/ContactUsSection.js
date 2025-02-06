import React from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from "react-icons/fa6";

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
          <div className='row contact'>
            <div className='phone'>
              <h3>Kanchana G</h3>
              <h5>Director</h5>
              <p>+91 97318 35143</p>
              <p>+91 97413 87143</p>
            </div>
            <div className='phone'>
              <h3>V Manoj Kumar</h3>
              <h5>Proprietor</h5>
              <p>+91 82969 35143</p>
              <p>+91 85489 78808</p>
            </div>
            <div className='phone'>
              <h3>Vinay C</h3>
              <h5>Proprietor</h5>
              <p>+91 96116 63106</p>
              <p>+91 78928 59001</p>
            </div>
          </div>
          <div className='row'>
            <div className='address'>
              <h3>Where To Find Us</h3>
              <p>
                #12/2-66 Krishanappa Layout, <br />
                R.R Nagar, Karekodi Main Road, <br />
                Hoskerehalli, Bangalore- 85
              </p>
            </div>
            <div className='mail'>
              <h3>Mail Us At</h3>
              <p>varija.3005@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='links'>
          <a href='mailto:varija.3005@gmail.com' rel='noreferrer'>
            <FiMail className='link' />
          </a>
          <a href='tel:8296935143' rel='noreferrer'>
            <FiPhone className='link' />
          </a>
          <a
            href='https://maps.app.goo.gl/KzMGdqWkogRHqBqV6'
            target='_blanck'
            rel='noreferrer'
          >
            <FiMapPin className='link' />
          </a>
          <a href='https://wa.me/918971545421' rel='noreferrer'>
            <FaWhatsapp className='link' />
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
