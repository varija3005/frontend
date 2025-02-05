import React, { useState } from 'react'
import './Shop.Styles.scss'
import { FaSearch } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const Shop = () => {
    const location = useLocation()
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [shopType, setShopType] = useState('') 

    useState(() => {
        if(location.pathname === '/wholesale') setShopType('wholesale')
        if(location.pathname === '/retail') setShopType('retail')
        axios.get('http://localhost:5000/api/prod')
        .then(res => setData(res.data))
        .catch(err => {
            toast("Failed to Load", { 
                type: "error", 
                isLoading: false,
                autoClose: 5000
            });
        })
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    let filteredData = data.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div className='shop'>
                <div className='nav'>
                    <div className='filter-container'>
                        <span className='icon'><LuSettings2 /></span>Filter
                    </div>
                    <div className='search-container'>
                        <label className="input">
                            <input className="input-field" type='text' placeholder=" " onChange={handleChange} />
                            <span className="input__label"><FaSearch /> Search</span>
                        </label>
                    </div>
                </div>
                <div className='shop-container'>
                    {
                        filteredData.map(prod => (<ProductCard key={prod.prodId} product={prod} shopType={shopType} />))
                    }
                </div>
            </div>
            <div className='footer'>
                Made to Perfection by <a href='https://www.linkedin.com/in/yashwanth-kolli-b8b413208/' target='_blanck' rel='noreferrer'>Yashwanth Kolli</a> 
            </div>
        </>
    )
}

export default Shop