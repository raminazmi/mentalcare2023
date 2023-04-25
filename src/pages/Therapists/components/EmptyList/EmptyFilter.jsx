import React from 'react';
import imgtitle from "../../../../assets/svg/title_img.svg";

const EmptyFilter = () => (
    <div className="animate-pulse duration-500 ease-linear animation-duration-3s rounded-lg xl:max-w-[320px] md:min-w-[300px] min-h-[380px] shadow-lg  border border-[2.5px] overflow-hidden h-fit">
        <div
            className="w-[800px] h-[80px] bg-slate-300 rotate-[6deg] -translate-y-10 translate-x-3 relative ">
        </div>
        <div className='w-[100%] flex justify-center items-center mt-[90px]'>
            <img className="w-[140px] " src={imgtitle} alt="imagtilte" />
            </div>
    </div>
);

export default EmptyFilter;
