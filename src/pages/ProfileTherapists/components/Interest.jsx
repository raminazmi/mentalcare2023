import React from 'react'

const Interest = ({interest,contentClassName}) => {
  return (
    <span className={`bg-[#ECF8EF] py-1 px-3 rounded-2xl cursor-pointer text-[#43B966] font-medium leading-[24px] text-[15px] ${contentClassName}`}>
      {interest}
    </span>
  )
}

export default Interest