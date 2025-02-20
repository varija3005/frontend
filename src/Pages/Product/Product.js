import React, { useEffect, useState } from 'react'
import './Product.Styles.scss'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom'
import Menu from '../../Components/Menu/Menu'
import LoginIcon from '../../Components/LoginIcon/LoginIcon'
import specialImg from '../../Assets/Products/special.png'
import axios from 'axios'
import setAuthToken from  '../../utils/setAuthToken'
import BackButton from '../../Components/BackButton/BackButton';

const Product = () => {
    // const [relatedProducts, setRelatedProducts] = useState([])
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const {id, type} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://ricehouse.in/backend/api/prod/${id}`)
        .then(res => {
            setProduct(res.data)
        })
        .catch(err => {
            toast.update({ 
                render: "Product not found", 
                type: "error", 
                isLoading: false,
                autoClose: 5000
            });
            navigate(-1)
        })
        // const relProds = [products[id-3], products[id-2], products[id], products[id+1]]
        // setRelatedProducts(relProds)
    }, [id])

    const handleIncrement = () => {
        setQuantity(q => q+1)
    }

    const handleDecrement = () => {
        setQuantity(q => q<=1 ? 1 : q-1)
    }

    const handleCart = async () => {
        const toastId = toast.loading("Please wait...")
        const token = localStorage.token
        if(token) {
            setAuthToken(JSON.parse(token));
            await axios.post('https://ricehouse.in/backend/api/cart/add', {prodId: id, quantity})
            .then(res => {
                toast.update(toastId, { 
                    render: "Added to Cart", 
                    type: "success", 
                    isLoading: false,
                    autoClose: 2000
                });
            })
            .catch(err => {
                console.log((err))
                toast.update(toastId, { 
                    render: "Unable to Update Cart", 
                    type: "error", 
                    isLoading: false,
                    autoClose: 5000
                });
            })
        } else {
            toast.update(toastId, { 
                render: "Please login to add products to cart",
                type: "error", 
                isLoading: false,
                autoClose: 5000
            });
        }

    }

    return (
        <>
            <div className='product-page'>
                <div className='nav'>
                    <BackButton />
                    <Menu color='dark' />
                    <LoginIcon color='dark' />
                </div>
                <div className='content'>
                    <div className='img-section'>
                        <div className='img-container'>
                            <img src={specialImg} alt='prod' />
                        </div>
                        <div className='background'></div>
                    </div>
                    <div className='text-section'>
                        <h1 className='heading'>{product.name}</h1>
                        <div className='prices'>
                            <span className='mrp'>₹ {product.mrp}</span>
                            <span className='price'>₹ {product[type]}</span>
                        </div>
                        <div className='buttons-section'>
                            <div className='quantity'>Only <b>{product.quantity}</b> remaining.</div>
                            <div className='buttons'>
                                <button onClick={handleDecrement} className='quantity-button'>-</button>
                                <div className='number'>{quantity}</div>
                                <button onClick={handleIncrement} className='quantity-button'>+</button>
                            </div>
                            <button className='button' onClick={handleCart}>Add to Cart</button>
                        </div>
                        <div className='details'>
                            <div className='detail'>
                                <span className='property'>Weight</span>
                                <span className='value'>{product.bagWeight}</span>
                            </div>
                            <div className='detail'>
                                <span className='property'>Type</span>
                                <span className='value'>{product.type}</span>
                            </div>
                            <div className='detail'>
                                <span className='property'>Age</span>
                                <span className='value'>{product.age}</span>
                            </div>
                            <div className='detail'>
                                <span className='property'>Price Per Kg</span>
                                <span className='value'>{product.priceperkg}</span>
                            </div>
                            <div className='detail'>
                                <span className='property'>Shipping & Delivery</span>
                                <span className='value'>*Shipping & Delivery charges are extra</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className='related-products'>
                        <h1 className='heading'>Related Products</h1>
                        <div className='products-container'>
                            
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='footer'>
                Made to Perfection by <a href='https://www.linkedin.com/in/yashwanth-kolli-b8b413208/' target='_blanck' rel='noreferrer'>Yashwanth Kolli</a> 
            </div>
        </>
    )
}

export default Product