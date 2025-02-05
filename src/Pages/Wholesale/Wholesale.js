import React from 'react'
import './Wholesale.Styles.scss'
import SpecialSection from '../../Components/SpecialSection/SpecialSection'
import Menu from '../../Components/Menu/Menu'
import LoginIcon from '../../Components/LoginIcon/LoginIcon'
import Shop from '../../Components/Shop/Shop'
import BackButton from '../../Components/BackButton/BackButton'

const Wholesale = () => {
  return (
    <div className='wholesale-page'>
        <BackButton color='light' />
        <Menu />
        <LoginIcon />
        <SpecialSection />
        <Shop />
    </div>
  )
}

export default Wholesale