import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { IoIosClose } from 'react-icons/io'
import './Login.Styles.scss'

import signUpImg from '../../Assets/Login/signUp.jpg'
import Input from '../../Components/Input/Input'
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handlePhoneChange = e => {
    setPhone(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    const id = toast.loading('Please wait...')
    await axios
      .post(`https://ricehouse.in/backend/api/auth`, { phone, password })
      .then(res => {
        localStorage.setItem('token', JSON.stringify(res.data.token))
        toast.update(id, {
          render: 'Login Successful',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
        })
        navigate(-1)
      })
      .catch(err => {
        setPhone('')
        setPassword('')
        toast.update(id, {
          render: 'User not found!',
          type: 'error',
          isLoading: false,
          autoClose: 5000,
        })
      })
  }

  const loginWithGoogle = () => {
    window.open('http://localhost:5000/api/auth/google/callback', '_self')
  }

  const handleClose = () => {
    navigate(-1)
  }

  return (
    <div className='login-page'>
      <div className='content'>
        <div className='close' onClick={handleClose}>
          <IoIosClose />
        </div>
        <div className='img-container'>
          <img src={signUpImg} alt='login-img' />
          <div className='background'></div>
          <div className='welcome'>
            <h1 className='heading'>Welcome Back.</h1>
            <p className='text'>
              Please enter you credentials to explore the finest rice varieties
              and manage your account effortlessly.
            </p>
            <p className='text'>
              Don't have an account?{' '}
              <Link className='bold' to='/signup'>
                Create One
              </Link>
            </p>
          </div>
        </div>
        <div className='login-container'>
          <div className='logo-container'>Rice House</div>
          <div className='inputs'>
            <Input
              placeholder='Phone No or Email'
              type='text'
              onChange={handlePhoneChange}
            />
            <Input
              placeholder='Password'
              type='password'
              onChange={handlePasswordChange}
            />
          </div>
          <div className='buttons-container'>
            <button className='button' onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className='space'>
            <div className='line'></div>
            <div className='text'>or</div>
          </div>
          <button className='googleLogin' onClick={loginWithGoogle}>
            <FcGoogle className='icon' /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
