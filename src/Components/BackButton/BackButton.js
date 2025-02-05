import React from 'react'
import './BackButton.Styles.scss'
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const BackButton = ({color}) => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className='back-button' onClick={handleBack} style={{color: color === 'light' ? '#E7D3B2' : '#173B45'}}>
            <FaAngleLeft />
        </div>
    )
}

export default BackButton