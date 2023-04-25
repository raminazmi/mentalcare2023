import React from 'react'
import p1 from "../../../../assets/reviews/p1.jpg"

const Slide = ({ image, name, revirew }) => {
    return (
        <div className=' lg:w-[370px] text-start lg:h-[250px] m-8 bg-white border-2 rounded-2xl border-[#7BB8FF] shadow-xl'>
            <p className='p-8'>
                {revirew}
            </p>
            <div className='flex justify-start items-center gap-4 p-4'>
                <span className='bg-cover bg-center rounded-full  border-[3px] border-[#7BB8FF] w-[68px] lg:w-[70px] h-[68px] lg:h-[70px]' style={{ backgroundImage: `url(${image})` }}>
                </span>
                <div>
                    <h3 className='font-normal text-lg'>{name} </h3>
                    <h4>عميل سابق</h4>
                </div>
            </div>
        </div>
    )
}

export default Slide