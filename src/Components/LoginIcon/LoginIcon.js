import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useJwt } from "react-jwt";
import { FaRegUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import './LoginIcon.Styles.scss'

const LoginIcon = ({color}) => {
    const [token, setToken] = useState('') 
    const {isExpired} = useJwt(token)

    useEffect(() => {
      setToken(localStorage.getItem('token'))
    }, [])

    const handleLogout = () => {
      setToken('')
      localStorage.removeItem('token')
    }
    
    return (
      <div className='login-icon'>
          <div className='options' style={{display: isExpired ? 'flex' : 'none'}}>
              <Link className={`option ${color === 'dark' ? 'option-dark' : 'option-light'}`} to='/signup'>Sign Up</Link>
              <Link className={`option ${color === 'dark' ? 'option-dark' : 'option-light'}`} to='/login'>Login</Link>
          </div>
          <div className='icons' style={{display: isExpired ? 'none' : 'flex'}}>
            <Menu menuButton={<div className={`icon ${color === 'dark' ? 'icon-dark' : 'icon-light'}`}><FaRegUserCircle /></div>} transition>
              <MenuItem><Link to='/profile'>Profile</Link></MenuItem>
              <MenuItem><Link to='/orders'>Orders</Link></MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
            <Link className={`icon ${color === 'dark' ? 'icon-dark' : 'icon-light'}`} to='/cart'><FiShoppingBag /></Link>
          </div>
      </div>
    )
}

export default LoginIcon