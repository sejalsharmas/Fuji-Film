import React from 'react'
import "./Button.css"
function Button({title, onClick, variant}) {
  return (
    <button onClick={onClick} className={`btn ${variant}`}>{title}</button>
  )
}

export default Button