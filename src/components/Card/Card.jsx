import React from 'react'
const Card = ({ children, contentClassName = "", MainContentClassName = "" }) => {
  return (
    <div className={`flex justify-center items-center h-screen w-screen overflow-x-hidden bg-blue-100  ${MainContentClassName} `} >
      <div className={`flex items-center  shadow-xl rounded-xl ${contentClassName} `}>
        {children}
      </div>
    </div>
  )
}
export default Card