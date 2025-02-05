import React, { useEffect, useState } from 'react'
import './SpecialSection.Styles.scss'

import specialImg from '../../Assets/Products/special.png'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const SpecialSection = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [prod, setProd] = useState({})

  console.log(location)

  useEffect(() => {
    axios
      .get('https://ricehouse.in/backend/api/prod/1')
      .then(res => {
        setProd(res.data)
      })
      .catch(err => {
        toast.update({
          render: 'Product not found',
          type: 'error',
          isLoading: false,
          autoClose: 5000,
        })
      })
  })
  return (
    <div className='special-section'>
      <div className='product'>
        <div className='img-container'>
          <img src={specialImg} alt='special-product' />
        </div>
        <div className='name'>{prod.name}</div>
      </div>
      <div className='product-details'>
        <h1 className='heading'>{prod.name}</h1>
        <p className='text'>
          Grab it now at a special discounted price for a limited time!
        </p>
        <div className='price-container'>
          <div className='prices'>
            <p className='strikeThrough'>₹. {prod.mrp}</p>
            <p className='price'>₹. {prod[location.pathname.slice(1)]}</p>
          </div>
          <Link to={`/product${location.pathname}/1`}>
            <button className='button'>Check out!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SpecialSection
