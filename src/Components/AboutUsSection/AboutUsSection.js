import React, { useState, useEffect } from 'react'
import { FaQuoteLeft, FaRegCheckCircle, FaHandshake  } from "react-icons/fa"
import { GiMultipleTargets } from "react-icons/gi";
import 'aos'

import aboutUsImg from '../../Assets/AboutUsSection/aboutUs.jpg'
import whyUsImg from '../../Assets/AboutUsSection/whyUs.jpg'

import './AboutUsSection.Styles.scss'

const AboutUsSection = () => {
    return (
        <>
            <div className='about-us-section'>
                <div className='content'>
                    <div className='row' data-aos="fade-up" data-aos-duration="1000"> 
                        <h4 className='sub-heading'>About Us</h4>    
                        <h1 className='heading'>Experience Taste of Tradition from Land of Paddy- Siruguppa</h1>
                        <p className='text'>Welcome to  Rice House, where tradition meets quality in every grain of rice. Rooted in the heart of the finest paddy fields of Siruguppa, we believe in delivering purity, freshness, and authenticity. Whether for daily meals or special occasions, our rice enhances every dish with its superior texture and flavor.</p>
                    </div>
                    <div className='stats' data-aos="fade-up" data-aos-duration="1000">
                        <div className='stat'>
                            <span className='number'>2</span>
                            <span className='text'>Locations Served</span>
                        </div>
                        <div className='stat'>
                            <span className='number'>11</span>
                            <span className='text'>Varieties of Rice Sold</span>
                        </div>
                        <div className='stat'>
                            <span className='number'>50</span>
                            <span className='text'>Years of Experience</span>
                        </div>
                        <div className='stat'>
                            <span className='number'>127</span>
                            <span className='text'>Wholesalers Satisfied</span>
                        </div>
                        <div className='stat'>
                            <span className='number'>8K+</span>
                            <span className='text'>Households Reached</span>
                        </div>
                        <div className='stat'>
                            <span className='number'>5M+</span>
                            <span className='text'>Bags of Rice Delivered</span>
                        </div>
                    </div>
                </div>

                <div className='image-section'>
                    <div className='img-container' data-aos="fade-up" data-aos-duration="1000">
                        <img src={aboutUsImg} alt='about-us-img' />
                    </div>
                    <div className='text-container' data-aos="fade-up" data-aos-duration="1000">
                        <span className='quote'><FaQuoteLeft /></span>
                        <span className='heading'>Quality You Can Trust and Taste You Will Love!</span>
                    </div>
                </div>
            </div>

            <div className='why-us-section'>
                <div className='content'>
                    <div className='column'>
                        <h4 className='sub-heading'>Why Choose Us?</h4>
                        <h1 className='heading'>Your Trusted Partner<br />for Quality, Variety<br />and Reliability in Rice</h1>
                    </div>
                    <div className='list'>
                        <div className='item'>
                            <div className='icon'><FaRegCheckCircle /></div>
                            <p className='text'>We deliver premium, meticulously sourced rice to ensure unmatched quality and taste in every grain.</p>
                        </div>
                        <div className='item'>
                            <div className='icon'><GiMultipleTargets /></div>
                            <p className='text'>From Sona Masoori to Basmati, we bring you the range of rice varieties, rich in purity, aroma, and nutritional value.</p>
                        </div>
                        <div className='item'>
                            <div className='icon'><FaHandshake /></div>
                            <p className='text'>Serving with trust, honesty, and excellence directly from Siruguppa's finest paddy fields.</p>
                        </div>
                    </div>
                </div>

                <div className='image-section'>
                    <div className='text-container'>
                        <span className='quote'><FaQuoteLeft /></span>
                        <span className='heading'>Delivering Superior Quality, Flavor, and Nutrition with Every Grain.</span>
                    </div>
                    <div className='img-container'>
                        <img src={whyUsImg} alt='why-us-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsSection