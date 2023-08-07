import React from 'react'

const Button = ({ text, margin, onClick }) => {
  return (
    <button style={{margin: margin}} className='btn' onClick={onClick}>{text}</button>
  )
}

export default Button