import React from 'react'

const CardProfileDetials = ({nameicon,text}) => {
  const IconComponent = nameicon; 
  return (
    <span className='flex justify-start gap-2'>
      {typeof IconComponent === 'string' ? (
        <img src={IconComponent} className='text-[#58B4C9]' 
        width={22} height={22} 
        alt={IconComponent} />
      ) : 
      (
        <IconComponent className='text-[#58B4C9]' size={22} />
      )}
      <h3 className='font-[400] leading-[24px] text-lg'>{text} </h3>
    </span>
  )
}

export default CardProfileDetials