import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import 'aos'

import logoPng from '../../Assets/logo.png'

import './LandingSection.Styles.scss'

const LandingSection = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            scrollTo(location.hash.slice(1))
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location])

    const scrollTo = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            offset: 50,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        <div className='landing-section'>
            <div className='logo-container'>
                <picture>
                    {/* <source type="image/webp" srcSet={logoWebp} /> */}
                    <source type="image/png" srcSet={logoPng} />
                    <img src={logoPng} alt="Emperor" />
                </picture>
            </div>
            <div className='text' data-aos="fade-up" data-aos-duration="1000" data-aos-delay='100'>
                <span className='sub-heading'>Since 1975</span>
                <div className='name'>Rice House</div>
                <span className='sub-heading'>Wholesale and Retail Rice Dealers</span>
                <div className='links'>
                    <Link className='nav-option' to='/wholesale'>
                        <button className='button'>Buy Wholesale</button>
                    </Link>
                    <Link className='nav-option' to='/retail'>
                        <button className='button'>Buy Retail</button>
                    </Link>
                </div>                
            </div>
        </div>
    )
}

export default LandingSection