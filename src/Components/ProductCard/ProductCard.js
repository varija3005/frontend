import React from 'react'
import './ProductCard.Styles.scss'
import { Link } from 'react-router-dom'

const ProductCard = ({product, shopType}) => {
    return (
        <Link className='product-card' to={'/product/' + shopType + '/' + product.prodId}>
            <div className='img-section'>
                <div className='img-container'>
                    <img src='https://i.postimg.cc/YSszhCN7/special.png' alt={product.prodId} />
                </div>
                <div className='background'></div>
            </div>
            <div className='text-section'>
                <h1 className='heading'>{product.name}</h1>
                <h4 className='text'>{product.bagWeight}</h4>
                <div className='sub-heading'>
                    <span>{product.age}</span>
                    <span>{product.priceperkg}</span>
                </div>
                <h4 className='price'>₹ {product[shopType]}</h4>
            </div>
        </Link>
    )
}

export default ProductCard