import React from 'react'
import "../../styles/index.css"

const ButtonOutline = ({ value="", contentClassName = "", onClicks }) => {
  return (
    <input
      type="submit"
      className={` hover:bg-transparent  cursor-pointer hover:border-[var(--primary)] hover:text-[var(--primary)] text-lg font-semibold text-white py-[11px] px-6 bg-[var(--primary)] border rounded-lg  ${contentClassName}`}
      value={value} onClick={onClicks} />
  )
}

export default ButtonOutline