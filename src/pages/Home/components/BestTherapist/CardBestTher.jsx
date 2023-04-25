import React from 'react'
import { AiFillStarMini } from '../../../../lib/@reacticons';

const CardBestTher = ({ star, name, nameProperty, image }) => {
    return (
        <div className='rounded-lg w-full h-full space-y-3 shadow-lg bg-white !max-[420px]:w-[260px] ' data-aos='zoom-in-left' >
            <div className=' bg-cover bg-center rounded-t-lg shadow-md rounded-bl-2xl w-full  h-[260px] max-lg:h-[240px] max-md:h-[220px]  max-[350px]:h-[200px] '  style={{ backgroundImage: `url(${image})` }}>
                <p className='absolute mt-2 rounded-md p-1 top-0 right-2 bg-[#464646b9] w-12 h-5 flex justify-center items-center gap-1'>
                    <AiFillStarMini className='text-[#ffd000] ' />
                    <h6 className='text-white text-sm'> {star}</h6>
                </p>
            </div>

            <h4 className='pr-3 font-semibold text-[18px]  text-start text-[#193F63]'>د. {name}</h4>
            <p className='text-md pr-5 pb-4  text-start'>  {nameProperty}</p>
        </div>
    )
}

export default CardBestTher