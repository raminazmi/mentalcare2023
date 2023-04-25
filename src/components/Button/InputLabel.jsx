import React from 'react'

const InputLabel = ({ contentClassName = "",value, onChange,type,name,text,id, checked}) => {
  return (
    <div className='mt-3'>
    <input
      type={type}
      name={name}
      value={value}
      checked={checked}
      className={`${contentClassName}`}
      onChange={onChange} 
       id={id}/>
       <label for={id} className='mr-2'>
       {text}
      </label>
      </div>
  )
}

export default InputLabel