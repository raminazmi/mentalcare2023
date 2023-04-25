import React from 'react'
import "../../styles/index.css"

const Button = ({ value, contentClassName = "", onClicks }) => {
  return (
    <input
      type="submit"
      className={` bg-transparent  cursor-pointer hover:bg-[var(--primary)] text-[var(--primary)] text-lg font-semibold 
       hover:text-white py-3 px-6 border border-[var(--primary)] hover:border-transparent rounded  ${contentClassName}`}
      value={value} onClick={onClicks} />
  )
}

export default Button