import React from 'react'
import SpecialSection from '../../Components/SpecialSection/SpecialSection'
import Menu from '../../Components/Menu/Menu'
import LoginIcon from '../../Components/LoginIcon/LoginIcon'
import Shop from '../../Components/Shop/Shop'
import BackButton from '../../Components/BackButton/BackButton'

const Retail = () => {
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

export default Retail