import React from 'react'
import './Input.css'

function Input({value , setValue, placeholder, type="text"}) {
    return (
        
        <div className='input-container'>
            <input htmlFor={placeholder}
                className='input-box'
                placeholder={placeholder}
                type={type}
                id={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

export default Input