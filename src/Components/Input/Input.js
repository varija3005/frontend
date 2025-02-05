import React from 'react'
import './Input.Styles.scss'

const Input = ({placeholder, type, value, onChange}) => {
    return (
        <div className="input-container">
            <label className="input">
                <input className="input__field" type={type} value={value} placeholder=" " onChange={onChange} />
                <span className="input__label">{placeholder}</span>
            </label>
        </div>
    )
}

export default Input