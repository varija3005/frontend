import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FcGoogle } from 'react-icons/fc'
import { IoIosClose } from 'react-icons/io'
import './SignUp.Styles.scss'

import loginImg from '../../Assets/Login/login.jpg'
import Input from '../../Components/Input/Input'
import axios from 'axios'

const SignUp = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handlePhoneChange = e => {
    setPhone(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleSignUp = async () => {
    const id = toast.loading('Please wait...')
    await axios
      .post(`https://ricehouse.in/backend/api/users`, { name, phone, password })
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
        setName('')
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

  const handleClose = () => {
    navigate(-1)
  }
  return (
    <div className='login-page'>
      <div className='close' onClick={handleClose}>
        <IoIosClose />
      </div>
      <div className='content'>
        <div className='close' onClick={handleClose}>
          <IoIosClose />
        </div>
        <div className='img-container'>
          <img src={loginImg} alt='login-img' />
          <div className='background'></div>
          <div className='welcome'>
            <div className='heading-container'>
              <h1 className='heading'>Create Your Account!</h1>
            </div>
            <p className='text'>
              Sign up to access premium rice selections and exclusive deals
              tailored just for you.
            </p>
            <p className='text'>
              Already have an account?{' '}
              <Link className='bold' to='/login'>
                Login here
              </Link>
            </p>
          </div>
        </div>
        <div className='login-container'>
          <div className='logo-container'>Rice House</div>
          <div className='inputs'>
            <Input
              placeholder='Name'
              value={name}
              type='text'
              onChange={handleNameChange}
            />
            <Input
              placeholder='Phone No. or EMail'
              value={phone}
              type='text'
              onChange={handlePhoneChange}
            />
            <Input
              placeholder='Password'
              value={password}
              type='password'
              onChange={handlePasswordChange}
            />
          </div>
          <div className='buttons-container'>
            <button className='button' onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
          <div className='space'>
            <div className='line'></div>
            <div className='text'>or</div>
          </div>
          <button className='googleLogin'>
            <FcGoogle className='icon' /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
